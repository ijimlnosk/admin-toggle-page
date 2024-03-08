import { Outlet } from "react-router-dom";
import SideMenu from "../commons/side-menu";

const RootLayout = () => {
    return (
        <>
            <Outlet />
            <SideMenu />
        </>
    );
};
export default RootLayout;
