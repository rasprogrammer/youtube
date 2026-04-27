import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            <div className="layout flex">
                <Sidebar />
                <main className="p-2">
                    {children}
                </main>
            </div>
        </div>
    );
}