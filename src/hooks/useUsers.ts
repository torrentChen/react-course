import {useEffect, useState} from "react";
import {CanceledError} from "@/services/api-client.ts";
import userService from "@/hooks/user-service.ts";

interface User {
    id: number;
    name: string;
}
const useUsers = () => {
    const [users, setUsers] = useState<User[]>([])
    const [error, setError] = useState("")
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const {request, cancel} = userService.getAll<User[]>()
        request.then(res => {
            setUsers(res.data)
            setLoading(false)
        }).catch(e => {
            if (e instanceof CanceledError) return
            setError(e.message)
            setLoading(false)
        }).finally(() => {
            // setLoading(false)
        })
        return cancel
    }, []);
    return {users, error, isLoading}
}

export default useUsers;