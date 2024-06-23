import {useState} from "react";

interface Props {
    children: string;
    maxChars?: number;
}
const ExpendableText = ({children, maxChars = 20}: Props) => {
    const [expended, setExpended] = useState(false)
    return (
        <p>
            {expended ? children: (children.length > maxChars ? children.substring(0, maxChars) + '...' : children)}
            <button
                className="border px-2 py-1 rounded ml-1"
                onClick={() => setExpended(!expended)}
            >
                {expended ? 'Less': "More"}
            </button>
        </p>
    );
};

export default ExpendableText;