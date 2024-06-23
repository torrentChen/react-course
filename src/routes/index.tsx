import { createBrowserRouter } from 'react-router-dom';
import Root from "@/routes/Root.tsx";
import GameHub from "@/gamehub/GameHub.tsx";
import ExpenseWindows from "@/expense-tracker/ExpenseWindows.tsx";
import ReactQuery from "@/react-query/ReactQuery.tsx";
import StateManagement from "@/state-management/StateManagement.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "game",
                element: <GameHub />,
            },
            {
                path: "expense-tracker",
                element: <ExpenseWindows />,
            },
            {
                path: "react-query",
                element: <ReactQuery />,
            },
            {
                path: 'state-management',
                element: <StateManagement/>
            },
            {
                index: true, // 默认子路由
                element: <GameHub />, // 当访问根路径时，默认显示Home组件
            },
        ],
    },
]);

export default router