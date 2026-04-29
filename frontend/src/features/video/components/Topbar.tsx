import { Plus } from "lucide-react";

interface TopbarProps {
    openUploadModal: () => void;
}

export default function Topbar({ openUploadModal }: TopbarProps) {
  return (
    <div className="h-14 flex items-center justify-between px-6 border-b border-gray-700">
      <input
        placeholder="Search across your channel"
        className="bg-[#2a2a2a] px-4 py-2 rounded-full w-1/3 outline-none"
      />

      <div className="flex items-center gap-4">
        <button className="bg-white text-black flex gap-1 px-4 py-1 rounded-full cursor-pointer" onClick={openUploadModal}>
          <Plus  /> New 
        </button>
        <div className="w-8 h-8 bg-gray-500 rounded-full" />
      </div>
    </div>
  );
}