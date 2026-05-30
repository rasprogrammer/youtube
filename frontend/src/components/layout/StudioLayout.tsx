import { Outlet } from "react-router-dom";
import Sidebar from "../../features/video/components/Sidebar";
import Topbar from "../../features/video/components/Topbar";
import { useState } from "react";
import UploadVideoModal from "../../features/video/components/UploadVideoModal";


export const StudioLayout = ({children} : {
    children: React.ReactNode
}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    const openUploadModal = () => {
        setIsModalOpen(true);
    }

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    };
    
    return (
        <>
            <div className="min-h-full">
                <Topbar openUploadModal={openUploadModal} toggleSidebar={toggleSidebar} />
                <div className="grid grid-cols-6 gap-4">
                    <div className={isSidebarOpen ? "col-span-1" : "hidden"}>
                        <Sidebar />
                    </div>
                    <main className="p-2 col-span-5">
                        {children}
                    </main>
                </div>
            </div>

            {isModalOpen && <UploadVideoModal onClose={() => setIsModalOpen(false)} />}
        </>
    );
};