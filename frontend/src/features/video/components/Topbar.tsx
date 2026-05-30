import { Bell, Menu, Plus, Search } from "lucide-react";

interface TopbarProps {
    openUploadModal: () => void;
    toggleSidebar: () => void;
}

export default function Topbar({ openUploadModal, toggleSidebar }: TopbarProps) {
  return (
    <div className="h-16 flex items-center justify-between px-6 border-b border-gray-300 shadow-sm">
      <div className="flex items-center gap-4">
        <Menu onClick={() => toggleSidebar()} />
        <h2 className="text-xl font-bold">Studio</h2>
      </div>

      <div className="flex items-center gap-4">
        <Search />
        <input
          placeholder="Search across your channel"
          className="w-96 px-4 py-2 rounded-full bg-gray-100 text-gray-800 placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center gap-2">
        <Bell />
        <button className="bg-white text-black flex gap-1 px-4 py-1 rounded-full cursor-pointer" onClick={openUploadModal}>
          <Plus  /> New 
        </button>
        <div className="w-8 h-8 bg-gray-500 rounded-full" />
      </div>
    </div>
  );
}