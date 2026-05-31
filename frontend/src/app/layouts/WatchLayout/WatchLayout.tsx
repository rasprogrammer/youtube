import { useState } from "react";
import Header from "../../../shared/layouts/Header";
import Sidebar from "../../../shared/layouts/Sidebar";


export default function WatchLayout({children}: {
    children: React.ReactNode
}) {

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const toggleMenu = () => {
        setIsOpenMenu(!isOpenMenu);
    }

    return (
        <>
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