import Header from "./Header";
import Sidebar from "./Sidebar";


export default function MainLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Header />
            <div className="flex gap-4">
                <Sidebar />
                <main className="py-2">
                    {children}
                </main>
            </div>
        </>
    );
}