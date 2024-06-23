import genres from '@/data/genres.ts'
import useGameStore from "@/state-management/game/store.ts";
const GenreList = () => {
    const {setGenre} = useGameStore()
    return (
        <div className="hidden md:block">
            <h2 className="text-3xl font-bold">Genres</h2>
            <ul className="flex flex-col gap-2 pr-8">
                {genres.map(genre=> (
                    <li key={genre.id} className="flex items-center gap-1" onClick={() => setGenre(genre.name)}>
                        <img src={genre.image_background} alt={genre.name} className="h-8 w-8 rounded"/>
                        <span className="cursor-pointer">{genre.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GenreList;