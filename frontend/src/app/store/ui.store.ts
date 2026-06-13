import { create } from "zustand";

interface UIStore {
    isSidebarOpen: boolean;

    openSidebar: () => void;
    closeSidebar: () => void;
    toggleSidebar: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
    isSidebarOpen: false,

    openSidebar: () => set({ isSidebarOpen: true }),

    closeSidebar: () => set({ isSidebarOpen: false }),

    toggleSidebar: () => set((state) => ({
        isSidebarOpen: !state.isSidebarOpen,
    })),
}));

interface CreateChannelModal {
    isCreateChannelModalOpen: boolean;

    openCreateChannelModal: () => void;
    closeCreateChannelModal: () => void;
}

export const useCreateChannelModal = create<CreateChannelModal>((set) => ({
    isCreateChannelModalOpen: false,

    openCreateChannelModal: () => set({ isCreateChannelModalOpen: true }),

    closeCreateChannelModal: () => set({ isCreateChannelModalOpen: false }),
}));