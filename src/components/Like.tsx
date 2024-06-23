import { Heart } from "lucide-react"
import {useState} from "react";

interface Props {
    onClick?: () => void;
}
const Like = ({onClick}: Props) => {
    const [status, setStatus] = useState(false)
    const toggle = () => {
        onClick?.()
        setStatus(!status)
    }
    return (
        <Heart onClick={toggle} className={`${status && 'text-red-600'} w-10 h-10`}/>
    );
};

export default Like;