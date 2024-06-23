import ExpenseList from "@/expense-tracker/ExpenseList.tsx";
import {useState} from "react";
import ExpenseFilter from "@/expense-tracker/ExpenseFilter.tsx";
import ExpenseForm from "@/expense-tracker/ExpenseForm.tsx";

export interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string;
}
const initialExpenses: Expense[] = [
    { id: 1, description: "Groceries", amount: 120.50, category: "Food" },
    { id: 2, description: "Electricity Bill", amount: 150.00, category: "Utilities" },
    { id: 3, description: "Movie Tickets", amount: 50.00, category: "Entertainment" },
    { id: 4, description: "New Book", amount: 30.00, category: "Education" },
    { id: 5, description: "Dinner with Friends", amount: 80.00, category: "Food" },
    { id: 6, description: "Gym Membership", amount: 50.00, category: "Health" },
    { id: 7, description: "Coffee Shop", amount: 20.00, category: "Food" },
    { id: 8, description: "Phone Bill", amount: 100.00, category: "Utilities" },
    { id: 9, description: "Subscription Service", amount: 15.00, category: "Entertainment" },
    { id: 10, description: "Home Improvement", amount: 200.00, category: "Home" }
]
const ExpenseWindows = () => {
    const [expenses, setExpenses] = useState(initialExpenses);
    const [keyword, setKeyword] = useState("");
    const [category, setCategory] = useState("ALL");
    const handleDelete = (id: number) => {
        setExpenses(expenses.filter(expense => expense.id !== id))
    }
    return (
        <div className="w-1/2 mx-auto flex flex-col gap-4 pt-10">
            <ExpenseFilter
                onInput={keyword => setKeyword(keyword)}
                onSelect={category => setCategory(category)}
                categories={[...new Set(expenses.map(expense => expense.category))]}
            />
            <ExpenseList
                expenses={expenses
                    .filter(expense => !keyword || expense.description.toUpperCase().includes(keyword.toUpperCase()))
                    .filter(expenses => category === 'ALL' || expenses.category === category)
            }
                onDelete={handleDelete}
            />
            <ExpenseForm setExpenses={setExpenses} categories={[...new Set(expenses.map(expense => expense.category))]}/>
        </div>
    );
};

export default ExpenseWindows;