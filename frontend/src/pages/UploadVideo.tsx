import { useState } from "react";
import { StudioLayout } from "../components/layout/StudioLayout";
import VideoTable from "../features/video/components/VideoTable";
import UploadVideoModal from "../features/video/components/UploadVideoModal";

export default function UploadVideo() {
    
    return (
        <>
            <StudioLayout>
                <div className="p-4 w-full">
                    <h2 className="text-2xl font-bold mb-4">Upload Video</h2>
                    <VideoTable />
                </div>
            </StudioLayout>
        </>
    );
}