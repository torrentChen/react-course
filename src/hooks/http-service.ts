import apiClient from "@/services/api-client.ts";

class HttpService {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    getAll<T>(params?: { [key:string]: any }) {
        const controller = new AbortController()
        const request = apiClient.get<T>(this.endpoint, {
            signal: controller.signal,
            params: {
                ...params,
                title_like: params?.searchText,
                _page: params?.pageParam || 1,
                _limit: 10,
                _sort: 'id',
                _order: params?.sortOrder
            }
        })
        return {request, cancel: () => controller.abort()}
    }
}

const create = (endpoint: string) => new HttpService(endpoint)
export default create