import { create } from 'zustand';
import type { User } from '../client/model/User';

export const useUserStore = create((set) => ({
    user: null,
    setUser: (user: User) => set({ user }),
}));