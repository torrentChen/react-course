import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {Expense} from "@/expense-tracker/ExpenseWindows.tsx";
import React from "react";

// 定义表单验证规则
const formSchema = z.object({
    description: z.string().min(1, { message: "Description must be at least 1 character." }).default(""),
    amount: z.coerce.number().positive({ message: "Amount must be a positive number." }).default(0),
    category: z.string(),
});

interface Props {
    setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
    categories: string[];
}
export default function ExpenseForm({setExpenses, categories}: Props) {
    // 使用useForm钩子初始化表单
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    });

    // 定义提交处理函数
    function onSubmit(values: z.infer<typeof formSchema>) {
        setExpenses(expenses => ([...expenses, {...values, id: expenses.length + 1}]))
    }

    return (
        <Form {...form}>
            <h2 className="text-3xl text-center border-t pt-10">Add expense</h2>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Amount</FormLabel>
                            <FormControl>
                                <Input type="number" {...field}/>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Category" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {categories.map(category =>
                                            <SelectItem key={category} value={category}>{category}
                                            </SelectItem>)
                                        }
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}