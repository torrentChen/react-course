import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/components/theme-provider"
import {useEffect, useState} from "react";

export function ModeToggle() {
    const { setTheme } = useTheme()
    const [checked, setChecked] = useState(false)
    const handleChange = (checked: boolean) => {
        setChecked(checked)
    }

    useEffect(() => {
        checked ? setTheme("dark") : setTheme("light")
    }, [checked]);

    return (
        <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" onCheckedChange = {handleChange} checked={checked} />
            <Label htmlFor="airplane-mode">Dark Mode</Label>
        </div>
    )
}
