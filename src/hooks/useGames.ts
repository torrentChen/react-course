import {GameQuery} from "@/gamehub/GameHub.tsx";
import {useInfiniteQuery} from "@tanstack/react-query";
import gameService from "@/hooks/game-service.ts";

interface Game {
    id: number;
    title: string;
    body: string;
}

const useGames = (gameQuery?: GameQuery) => useInfiniteQuery<Game[], Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam=1}) => gameService.getAll<Game[]>({pageParam, ...gameQuery}).request.then(res => res.data),
    getNextPageParam: (lastPage, allPages) => {
        return lastPage.length > 0 ? allPages.length + 1 : null
    },
    keepPreviousData: true,
})

export default useGames;