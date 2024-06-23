import React, {useState} from "react";

interface Props {
    children: React.ReactNode;
    onClose?: () => void;
}
const Alert = ({children, onClose}: Props) => {
    const [hidden, setHidden] = useState(false)
    const handleClick = () => {
        setHidden(true)
        if (onClose) {
            onClose()
        }
    }
    return (
        <div className={`flex px-10 py-5 bg-blue-300 items-center justify-between rounded ${hidden && 'hidden'}`}>
            <div>{children}</div>
            <span onClick={handleClick} className="text-2xl cursor-pointer">X</span>
        </div>
    );
};

export default Alert;