// import { queryClient } from '@/libs/http';
// import { Message } from '@/types/message';
// import { create, StateCreator } from 'zustand';
// import { devtools } from 'zustand/middleware';

// const MAX_RETRY_COUNT = 5;
// const MIN_INTERVAL = 1000;
// const MAX_JITTER = 200;
// const ONERROR_CODE = 4000;
// const NORMAL_CODE = 1000;

// type SocketState = {
//   ws: WebSocket | null; // WebSocket 인스턴스
//   webSocketData: any; // WebSocket으로 수신된 데이터 (필요시 타입 정의)
//   retryCount: number; // 재시도 횟수
//   isMounted: boolean; // 컴포넌트 마운트 상태 관리
// };

// type SocketActions = {
//   // Actions
//   connectWebSocket: () => void;
//   disconnectWebSocket: () => void;
//   setMounted: (isMounted: boolean) => void;
//   setWebSocketData: (data: any) => void;
//   sendData: (data: any) => void;
// };

// const initialState: SocketState = {
//   ws: null,
//   webSocketData: null,
//   retryCount: 0,
//   isMounted: false,
// };

// const store: StateCreator<SocketState & SocketActions> = (set, get) => ({
//   ...initialState,
//   connectWebSocket: () => {
//     const wsInstance = new WebSocket(
//       `wss://${window.common.env.endpoint}/router/websocket/admin?org=trinity&token=${window.common.auth.accessToken}`
//     );

//     wsInstance.onopen = () => {
//       set({ retryCount: 0 });
//       console.info('WebSocket 연결 성공');
//       set({ ws: wsInstance });
//     };

//     wsInstance.onmessage = async (event: MessageEvent) => {
//       if (get().isMounted && wsInstance.readyState === WebSocket.OPEN) {
//         const resData = JSON.parse(event.data);
//         const data: Message = resData.v;
//         console.log('WebSocket 데이터 수신:', data);
//         const str = data.sref;
//         const type = str.split('.').pop();
//         console.log('type:', type);
//         if (type === 'Message') {
//           console.log('Message start');
//           console.log(data.roomId);
//           // queryClient.setQueryData(['chatRoom', data.roomId], (prev: any) => {
//           //   console.log(prev);
//           //   console.log(data);
//           //   return [...prev, data];
//           // });
//           await queryClient.invalidateQueries({
//             queryKey: ['chatRoom', data.roomId],
//           });
//           console.log(queryClient.getQueryData(['chatRoom', data.roomId]));
//           console.log('Message update');
//         } else if (type === 'Cart') {
//           console.log('Cart start');
//           // queryClient.setQueryData(['carts'], (prev: any) => {
//           //   return prev.map((cart: any) => (cart.id !== data.id ? cart : data));
//           // });
//           await queryClient.invalidateQueries({
//             queryKey: ['carts'],
//           });
//           console.log(queryClient.getQueryData(['carts']));
//           console.log('Cart end');
//         }
//       }
//     };

//     wsInstance.onerror = (event: Event) => {
//       console.error(`WebSocket Error: ${event}`);
//       wsInstance.close(ONERROR_CODE);
//     };

//     wsInstance.onclose = (event: CloseEvent) => {
//       console.info(`WebSocket 연결 종료: ${event.code} ${event.reason}`);
//       set({ ws: null });

//       if (event.code !== NORMAL_CODE && event.code === ONERROR_CODE) {
//         let interval = MIN_INTERVAL * Math.pow(2, get().retryCount);

//         // Jitter 추가
//         const jitter =
//           Math.floor(Math.random() * (MAX_JITTER * 2 + 1)) - MAX_JITTER;
//         interval += jitter;

//         if (get().retryCount < MAX_RETRY_COUNT) {
//           setTimeout(() => {
//             get().connectWebSocket();
//             set((state) => ({ retryCount: state.retryCount + 1 }));
//           }, interval);
//         }
//       }
//     };
//   },

//   disconnectWebSocket: () => {
//     const wsInstance = get().ws;
//     if (wsInstance && wsInstance.readyState === WebSocket.OPEN) {
//       console.info('WebSocket 연결 해제');
//       wsInstance.close();
//       set({ ws: null });
//     }
//   },

//   setMounted: (isMounted: boolean) => set({ isMounted }),

//   setWebSocketData: (data: any) => set({ webSocketData: data }),

//   sendData: (data: any) => {
//     const wsInstance = get().ws;
//     if (wsInstance && wsInstance.readyState === WebSocket.OPEN) {
//       wsInstance.send(JSON.stringify(data));
//     } else {
//       console.warn(
//         'WebSocket이 연결되지 않았습니다. 메시지를 전송할 수 없습니다.'
//       );
//     }
//   },
// });

// // Zustand 스토어 생성
// const useSocketStore = create<
//   SocketState & SocketActions,
//   [['zustand/devtools', never]] | []
// >(process.env.NODE_ENV !== 'production' ? devtools(store) : store);

// export default useSocketStore;

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

const store: StateCreator<SocketState & SocketActions> = (set, get) => ({
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
