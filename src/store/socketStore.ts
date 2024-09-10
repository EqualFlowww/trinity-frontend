import createWebSocket from '@/libs/createWebsocket';
import { queryClient } from '@/libs/http';
import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

type SocketState = {
  ws: WebSocket;
};

type SocketActions = {
  sendData: (data: any) => void;
  sendMessage: ({
    message,
    roomId,
    others,
  }: {
    message: string;
    roomId: string;
    others: string[];
  }) => void;
};

const initialState: SocketState = {
  ws: createWebSocket(),
};

const store: StateCreator<SocketState & SocketActions> = (_set, get) => ({
  ...initialState,
  sendData: (data: any) => {
    const wsInstance = get().ws;
    if (wsInstance && wsInstance.readyState === WebSocket.OPEN) {
      wsInstance.send(JSON.stringify(data));
    } else {
      console.warn(
        'WebSocket이 연결되지 않았습니다. 메시지를 전송할 수 없습니다.'
      );
    }
  },
  sendMessage: ({ message, roomId, others }) => {
    const wsInstance = get().ws;
    if (wsInstance && wsInstance.readyState === WebSocket.OPEN) {
      wsInstance.send(
        JSON.stringify({
          k: 'msg',
          v: {
            content: message,
            username: window.common.auth.username,
            roomId: roomId,
            unreadUsernames: others,
          },
        })
      );
      queryClient.invalidateQueries({
        queryKey: ['chatRoom', roomId],
      });
    } else {
      console.warn(
        'WebSocket이 연결되지 않았습니다. 메시지를 전송할 수 없습니다.'
      );
    }
  },
});

// Zustand 스토어 생성
const useSocketStore = create<
  SocketState & SocketActions,
  [['zustand/devtools', never]] | []
>(process.env.NODE_ENV !== 'production' ? devtools(store) : store);

export default useSocketStore;
