import { X, Upload } from "lucide-react";

interface UploadVideoModalProps {
  onClose: () => void;
}

export default function UploadVideoModal({
  onClose,
}: UploadVideoModalProps) {


  function handleUploadVideo() {
    console.log('upload video');
  }

  return (
    <div 
        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
        onClick={onClose}
    >
        <div 
            className="bg-white rounded-xl w-full max-w-5xl p-6"
            onClick={(e) => e.stopPropagation()}
        >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white">
            Upload Video
          </h2>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-300"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Upload */}
          <label className="border-2 border-dashed border-gray-600 rounded-lg h-52 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500">
            <Upload size={32} className="mb-2" />
            <span>Select Video</span>
            <input type="file" accept="video/*" className="hidden" />
          </label>

          {/* Thumbnail Upload */}
          <label className="border-2 border-dashed border-gray-600 rounded-lg h-52 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500">
            <Upload size={32} className="mb-2" />
            <span>Select Thumbnail</span>
            <input type="file" accept="image/*" className="hidden" />
          </label>

          {/* Form */}
          <div className="flex flex-col">
            <input
              placeholder="Title"
              className="w-full mb-3 p-3 rounded bg-gray-100 outline-none"
            />

            <textarea
              placeholder="Description"
              rows={5}
              className="w-full mb-3 p-3 rounded bg-gray-100 outline-none resize-none"
            />

            <select className="w-full mb-4 p-3 rounded bg-gray-100 outline-none">
              <option value="public">Public</option>
              <option value="unlisted">Unlisted</option>
              <option value="private">Private</option>
            </select>

            <button 
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
              onClick={handleUploadVideo}
              >
                Upload
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}