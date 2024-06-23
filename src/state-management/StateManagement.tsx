import useAuthStore from "@/state-management/auth/store.ts";
import {Button} from "@/components/ui/button.tsx";
import useCounterStore from "@/state-management/counter/store.ts";

const StateManagement = () => {
    const {username, login, logout} = useAuthStore()
    const {counter, increment, reset} = useCounterStore()
    return (
        <div>
            <h2>State Management</h2>
            <div className="flex gap-5">
                <h3 className="text-4xl w-1/5">username: {username}</h3>
                <Button onClick={() => login("Jerry Chen")}>Login</Button>
                <Button onClick={logout}>logout</Button>
            </div>
            <div className="flex gap-5 mt-2">
                <h3 className="text-4xl w-1/5">counter: {counter}</h3>
                <Button onClick={increment}>increment</Button>
                <Button onClick={reset}>reset</Button>
            </div>
        </div>
    );
};

export default StateManagement;