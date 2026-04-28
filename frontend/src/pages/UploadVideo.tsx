import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { uploadVideo } from "../api/upload-video";

export default function UploadVideo() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [visibility, setVisibility] = useState('PUBLIC');
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [thumbnail, setThumbnail] = useState<File | null>(null);

    const navigate = useNavigate();

    const uploadVideoMutation = useMutation({
        mutationFn: uploadVideo,
        onSuccess: (data) => {
            toast.success(data.message);
            navigate('/');
        },
        onError: (err: any) => {
            toast.error(err.message || "Upload failed");
        }
    });

    const handleUploadVideo = (e: React.FormEvent) => {
        e.preventDefault();

        // ✅ Basic validation
        if (!title || !description) {
            toast.error("All fields are required");
            return;
        }

        uploadVideoMutation.mutate({ title, description, visibility });
    };

    return (
        <div>
            <h2 className="mt-5 text-2xl text-center">Upload Video</h2>

            <form onSubmit={handleUploadVideo} className="mt-5 w-full flex justify-center items-center gap-10">

                {/* Preview Section */}
                <div className="h-50 w-80 bg-gray-200 flex items-center justify-center">
                    {thumbnail ? (
                        <img
                            src={URL.createObjectURL(thumbnail)}
                            alt="thumbnail"
                            className="h-full w-full object-cover"
                        />
                    ) : (
                        <span>No Preview</span>
                    )}
                </div>

                {/* Form Section */}
                <div className="flex flex-col gap-4 w-80">

                    <div className="flex flex-col gap-2">
                        <label>Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>Description</label>
                        <input
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>Visibility</label>
                        <select
                            value={visibility}
                            onChange={(e) => setVisibility(e.target.value)}
                            className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="PUBLIC">Public</option>
                            <option value="PRIVATE">Private</option>
                            <option value="UNLISTED">Unlisted</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>Video File</label>
                        <input
                            type="file"
                            accept="video/*"
                            onChange={(e) => setVideoFile(e.target.files?.[0] || null)}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label>Thumbnail</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
                        />
                    </div>

                    <div className="mt-3">
                        <button
                            type="submit"
                            disabled={uploadVideoMutation.isPending}
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50"
                        >
                            {uploadVideoMutation.isPending ? "Uploading..." : "Upload"}
                        </button>
                    </div>

                </div>
            </form>
        </div>
    );
}