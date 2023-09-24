import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";

const MainLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="px-5">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayOut;