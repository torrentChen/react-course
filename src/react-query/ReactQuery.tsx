import useComments from "@/react-query/hooks/useComments.ts";
import {Button} from "@/components/ui/button.tsx";

const ReactQuery = () => {
    const {data, error, isLoading, isFetching, fetchNextPage, isFetchingNextPage, hasNextPage} = useComments();
    return (
        <div>
            {isLoading && <p className="text-3xl">loading</p>}
            {isFetching && <p className="text-3xl">isFetching</p>}
            {isFetchingNextPage && <p className="text-3xl">isFetchingNextPage</p>}
            {<p className="text-3xl text-red-600">{error?.message}</p>}
                {data?.pages.map((page, index)=> (
                    <ul key={index}>
                        {page.map(item => (
                            <li key={item.id} className="border truncate flex gap-5">
                                <span className="font-bold w-1/3">{item.name}</span>
                                <span className="w-2/3 truncate">
                            {item.body}
                        </span>
                            </li>
                        ))}
                    </ul>
                ))}
            <Button onClick={() => fetchNextPage()} disabled={!hasNextPage}>fetchNextPage</Button>
        </div>
    );
};

export default ReactQuery;