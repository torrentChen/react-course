import {create} from "zustand";

interface CounterStore {
    counter: number;
    increment: () => void;
    reset: () => void;
}

const useCounterStore = create<CounterStore>(setState => ({
    counter: 0,
    increment: () => setState(({counter}) => ({counter: counter + 1})),
    reset: () => setState(() => ({counter: 0}))
}))

export default useCounterStore