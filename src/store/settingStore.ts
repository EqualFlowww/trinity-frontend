import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

type SettingState = {
  isModalOpen: boolean;
};
type SettingActions = {
  openModal: () => void;
  closeModal: () => void;
};

const store: StateCreator<SettingState & SettingActions> = (set) => ({
  isModalOpen: false,
  openModal: () => set({ isModalOpen: true }),
  closeModal: () => set({ isModalOpen: false }),
});

const useSettingStore = create<
  SettingState & SettingActions,
  [['zustand/devtools', never]] | []
>(process.env.NODE_ENV !== 'production' ? devtools(store) : store);

export default useSettingStore;
