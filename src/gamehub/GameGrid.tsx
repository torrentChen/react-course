import {SkeletonCard} from "@/components/SkeletonCard.tsx";
import useGames from "@/hooks/useGames.ts";
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {GameQuery} from "@/gamehub/GameHub.tsx";
import InfiniteScroll from "react-infinite-scroll-component";
import gameImg from "@/assets/game.jpeg"

const GameGrid = ({gameQuery}: {gameQuery: GameQuery}) => {
    const {data: games, error, isLoading, fetchNextPage, hasNextPage} = useGames(gameQuery)
    return (
        <InfiniteScroll
            next={() => fetchNextPage()}
            hasMore={!!hasNextPage}
            loader={"Loading..."}
            dataLength={games?.pages.reduce((total, page) => total + page.length, 0) || 0}
        >
            <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 xl:grid-cols-4 justify-items-center">
            {<p className="text-3xl text-red-600 col-span-4">{error?.message}</p>}
            {
                isLoading ?
                Array.from({length: 20}, (_, i) => i + 1).map((_, index) => (
                    <SkeletonCard key={index}/>
                )) : games?.pages.map(page => page.map(game => (
                        <Card className="w-[350px]" key={game.id}>
                            <img src={gameImg} alt=""/>
                            <CardHeader>
                                <CardTitle className="truncate text-3xl">{game.title}</CardTitle>
                                <CardDescription className="truncate">{game.body}</CardDescription>
                            </CardHeader>
                        </Card>
                    )))
            }
        </div>
        </InfiniteScroll>
    );
};

export default GameGrid;