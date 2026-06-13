import { useState } from "react";
import Header from "./../../../shared/layouts/Header";
import Sidebar from "./../../../shared/layouts/Sidebar";
import { AuthProvider } from "../../providers/AuthProvider";


export default function MainLayout({children}: {
    children: React.ReactNode
}) {

    const [isOpenMenu, setIsOpenMenu] = useState(true);

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    }

    return (
        <>
            <AuthProvider />
            <Header onClick={toggleMenu} />
            <div className="flex gap-4">
                <div className={isOpenMenu ? 'block' : 'hidden'}>
                    <Sidebar />
                </div>
                <main className="py-2">
                    {children}
                </main>
            </div>
        </>
    );
}