import { X } from "lucide-react";

interface UploadVideoModalProps {
    onClose: () => void;
}

export default function UploadVideoModal({ onClose } : UploadVideoModalProps) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 w-full">
            <div className="bg-[#1f1f1f] p-6 rounded-lg w-[90%]">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold mb-4">Upload Video</h2>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full" onClick={onClose}>
                        <X />
                    </button>
                </div>

                {/* form with video, thumbnail, title, description, visibility */}
                <div className="flex gap-4">
                    <div className="h-40 bg-blue-100 min-h-40 min-w-100 flex items-center justify-center rounded-lg">
                        <p className="text-gray-400">Video</p>
                    </div>
                    <div className="h-40 bg-blue-100 min-h-40 min-w-100 flex items-center justify-center rounded-lg">
                        <p className="text-gray-400">Thumbnail</p>
                    </div>
                    <div>
                        <input placeholder="Title" className="w-full mb-2 p-2 rounded bg-[#2a2a2a] outline-none" />
                        <textarea placeholder="Description" className="w-full mb-2 p-2 rounded bg-[#2a2a2a] outline-none" rows={4} />
                        <select className="w-full mb-2 p-2 rounded bg-[#2a2a2a] outline-none">
                            <option>Public</option>
                            <option>Unlisted</option>
                            <option>Private</option>
                        </select>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-full cursor-pointer">Upload</button>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
}