import {useInfiniteQuery} from "@tanstack/react-query";
import commentService from "@/hooks/comment-service.ts";

interface Comment {
    id: number;
    name: string;
    body: string;
}

const useComments = () => useInfiniteQuery<Comment[], Error>({
    queryKey: ['comments'],
    queryFn: ({pageParam=1}) => commentService.getAll<Comment[]>({pageParam}).request.then(res => res.data),
    getNextPageParam: (lastPage, allPages) => {
        return lastPage.length > 0 ? allPages.length + 1 : null
    },
    keepPreviousData: true,
    staleTime: 60 * 1000
})


export default useComments