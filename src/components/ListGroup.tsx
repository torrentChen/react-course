import {useState} from "react";

interface Props {
    heading: string;
    items: string[];
    onSelectItem: (item: string) => void;
}
const ListGroup = ({heading, items, onSelectItem}: Props) => {
    const [selectedIndex, setSelectedIndex] = useState(-1)
    return (
        <div className="p-4">
            <h2 className="text-4xl">{heading}</h2>
            <ul className="border-t-2 border-l-2 border-r-2 rounded overflow-auto">
                {items.map((item, index) => (
                    <li
                        onClick={() => {
                            onSelectItem(item)
                            setSelectedIndex(index)
                        }}
                        key={index}
                        className={`border-b-2 p-2 ${index === selectedIndex && 'bg-sky-300'}`}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListGroup;