import NavBar from "@/gamehub/NavBar.tsx";
import GenreList from "@/gamehub/GenreList.tsx";
import PlatformSelector from "@/gamehub/PlatformSelector.tsx";
import GameGrid from "@/gamehub/GameGrid.tsx";
import useGameStore from "@/state-management/game/store.ts";

export interface GameQuery {
    searchText: string;
    genre: string;
    platform: string;
    sortOrder: string;
}
const GameHub = () => {
    const {gameQuery} = useGameStore()

    return (
        <div className="md:px-8">
            <NavBar/>
            <div className="flex mt-6">
                <GenreList/>
                <div>
                    <h2 className="text-5xl font-bold">{`${gameQuery.genre ?? ''} ${gameQuery.platform ?? ''} Games`}</h2>
                    <PlatformSelector/>
                    <GameGrid gameQuery={gameQuery}/>
                </div>
            </div>

        </div>
    );
};

export default GameHub;