import {Outlet} from "react-router-dom";
import NavigationBar from "@/routes/NavigationBar.tsx";

const Root = () => {
    return (
        <div>
            <NavigationBar/>
            <Outlet/>
        </div>
    );
};

export default Root;