import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainLayout() {
    return (
        <div>
            <Header />
            <div className="layout flex">
                <Sidebar />
                <main className="p-2">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}