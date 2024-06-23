import {GameQuery} from "@/gamehub/GameHub.tsx";
import {create} from "zustand";

interface GameStore {
    gameQuery: GameQuery;
    setSearchText: (searchText: string) => void;
    setGenre: (genre: string) => void;
    setPlatform: (platform: string) => void;
    setSortOrder: (sortOrder: string) => void;
}

const useGameStore = create<GameStore>((set) => ({
    gameQuery: {} as GameQuery,
    setSearchText: (searchText: string) => set(() => ({gameQuery: {...({} as GameQuery), searchText}})),
    setGenre: (genre: string) => set((state) => ({ gameQuery: { ...state.gameQuery, genre } })),
    setPlatform: (platform: string) => set((state) => ({ gameQuery: { ...state.gameQuery, platform } })),
    setSortOrder: (sortOrder: string) => set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } }))
}));

export default useGameStore;