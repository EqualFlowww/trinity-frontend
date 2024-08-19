import { create } from 'zustand';

type MessageState = {
  isModalOpen: boolean;
};
type MessageActions = {
  openModal: () => void;
  closeModal: () => void;
};
console.log('useMessageStore');

const useMessageStore = create<MessageState & MessageActions>((set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
}));

export default useMessageStore;
