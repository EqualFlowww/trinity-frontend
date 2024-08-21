import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

type MessageState = {
  isModalOpen: boolean;
  // recentChatRoomIdList: string[];
  openChatRoomIdList: string[];
  selectedChatRoomId: string | null;
};
type MessageActions = {
  openModal: () => void;
  closeModal: () => void;
  openChatRoom: (chatRoomId: string) => void;
  closeChatRoom: (chatRoomId: string) => void;
  selectChatRoom: (chatRoomId: string) => void;
  // setRecentChatRoomIdList: (chatRoomIdList: string[]) => void;
  // updateRecentChatRoomIdList: (chatRoomId: string) => void;
};
// console.log('useMessageStore');

const initialState: MessageState = {
  isModalOpen: false,
  // recentChatRoomIdList: [],
  openChatRoomIdList: [],
  selectedChatRoomId: null,
};

const store: StateCreator<MessageState & MessageActions> = (set) => ({
  ...initialState,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
  selectChatRoom: (chatRoomId) => set({ selectedChatRoomId: chatRoomId }),
  openChatRoom: (chatRoomId) =>
    set((state) => {
      if (state.openChatRoomIdList.includes(chatRoomId)) {
        return { selectedChatRoomId: chatRoomId };
      }

      return {
        openChatRoomIdList: [...state.openChatRoomIdList, chatRoomId],
        selectedChatRoomId: chatRoomId,
      };
    }),
  closeChatRoom: (chatRoomId) =>
    set((state) => {
      if (!state.selectedChatRoomId) return { ...state };
      if (state.openChatRoomIdList.length === 1)
        return { openChatRoomIdList: [], selectedChatRoomId: null };
      else if (state.selectedChatRoomId === chatRoomId) {
        if (state.openChatRoomIdList.indexOf(chatRoomId) === 0)
          return {
            selectedChatRoomId:
              state.openChatRoomIdList[
                state.openChatRoomIdList.indexOf(chatRoomId) + 1
              ],
            openChatRoomIdList: state.openChatRoomIdList.filter(
              (id) => id !== chatRoomId
            ),
          };
        return {
          selectedChatRoomId:
            state.openChatRoomIdList[
              state.openChatRoomIdList.indexOf(chatRoomId) - 1
            ],
          openChatRoomIdList: state.openChatRoomIdList.filter(
            (id) => id !== chatRoomId
          ),
        };
      }

      return {
        openChatRoomIdList: state.openChatRoomIdList.filter(
          (id) => id !== chatRoomId
        ),
      };
    }),
  // setRecentChatRoomIdList: (chatRoomIdList) =>
  //   set({ recentChatRoomIdList: chatRoomIdList }),
  // updateRecentChatRoomIdList: (chatRoomId) =>
  //   set((state) => ({
  //     recentChatRoomIdList: [chatRoomId, ...state.recentChatRoomIdList],
  //   })),
});

const useMessageStore = create<
  MessageState & MessageActions,
  [['zustand/devtools', never]] | []
>(process.env.NODE_ENV !== 'production' ? devtools(store) : store);

export default useMessageStore;
