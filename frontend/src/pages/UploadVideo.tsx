import { useState } from "react";
import Sidebar from "../features/video/components/Sidebar";
import Topbar from "../features/video/components/Topbar";
import UploadVideoModal from "../features/video/components/UploadVideoModal";
import VideoTable from "../features/video/components/VideoTable";

export default function UploadVideo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openUploadModal = () => {
        setIsModalOpen(true);
    }
    
    return (
        <div className="flex h-screen bg-[#0f0f0f] text-white">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Topbar openUploadModal={openUploadModal} />
                <main className="flex-1 overflow-y-auto p-4">
                    <VideoTable />
                </main>
            </div>
            {isModalOpen && <UploadVideoModal onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}