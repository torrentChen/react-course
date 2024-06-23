import {Expense} from "@/expense-tracker/ExpenseWindows.tsx";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

interface Props {
    expenses: Expense[],
    onDelete: (id: number) => void;
}
const ExpenseList = ({expenses, onDelete}: Props) => {
    return (
        <Table>
            <TableCaption>A list of your recent expenses.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead className="text-center">Option</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {expenses.map((expense) => (
                    <TableRow key={expense.id}>
                        <TableCell className="font-medium">{expense.id}</TableCell>
                        <TableCell>{expense.description}</TableCell>
                        <TableCell>${expense.amount}</TableCell>
                        <TableCell>{expense.category}</TableCell>
                        <TableCell className="text-center">
                            <button
                                className="bg-red-600 text-white px-2 py-1 rounded"
                                onClick={() => onDelete(expense.id)}
                            >
                                Delete
                            </button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={4}>Total</TableCell>
                    <TableCell className="text-center">
                        ${expenses.map(expense => expense.amount).reduce((previousValue, currentValue) => previousValue + currentValue, 0)}
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
};

export default ExpenseList;
