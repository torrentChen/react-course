import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {ModeToggle} from "@/components/ModeToggle.tsx";

interface Props {
    onInput: (keyword: string) => void;
    onSelect: (category: string) => void;
    categories: string[];
}
const ExpenseFilter = ({onInput, onSelect, categories}: Props) => {
    return (
        <div className="flex gap-4">
            <Input type="text" placeholder="Search" onChange={event => onInput(event.currentTarget.value)} />
            <Select onValueChange={onSelect} defaultValue="ALL">
                <SelectTrigger className="w-[200px]">
                    <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="ALL">ALL</SelectItem>
                        {
                            categories.map(category => <SelectItem key={category} value={category}>{category}</SelectItem>)
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
            <ModeToggle />
        </div>
    );
};

export default ExpenseFilter;