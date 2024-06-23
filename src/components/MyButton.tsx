import {Button} from "@/components/ui/button.tsx";
import React from "react";

interface Props {
    children: React.ReactNode;
    color?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
    onClick: () => void;
}
const MyButton = ({children, onClick, color = "default"}: Props) => {
    return (
        <Button variant={color} onClick={onClick}>
            {children}
        </Button>
    );
};

export default MyButton;