import { useRef, useState } from "react";
import { Input } from "../../../shared/components/Input";
import { useCreateChannelModal } from "../../../app/store/ui.store";
import { useCreateChannel } from "../hooks/useCreateChannel";

export const CreateChannelModal = () => {

    const closeCreateChannelModal = useCreateChannelModal(state => state.closeCreateChannelModal);

    const [title, setTitle] = useState("");
    const [handle, setHandle] = useState("");

    const [avatarFile, setAvatarFile] =
        useState<File | null>(null);

    const [preview, setPreview] =
        useState<string | null>(null);

    const fileInputRef =
        useRef<HTMLInputElement>(null);

    const { mutate, isPending, error } = useCreateChannel();

    const handleSelectImage = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        
        setAvatarFile(file);
        const imageUrl = URL.createObjectURL(file);
        setPreview(imageUrl);

    };

    const handleCreateChannel = () => {

        if (!title.trim()) return;
        if (!handle.trim()) return;

        mutate(
            {
                title,
                handle,
                avatar: avatarFile
            },{
                onSuccess: (data) => {
                    console.log('data > ', data);
                    closeCreateChannelModal();
                },
                onError: (error) => {
                    console.log('error > ', error);
                }
            });
    }


    return (
        <section
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md"
            onClick={closeCreateChannelModal}
        >
            <div
                className="w-[90%] max-w-md rounded-xl bg-white p-16 shadow-lg"
                onClick={e => e.stopPropagation()}
            >
                <h2 className="mb-6 text-2xl font-semibold">
                    Create Channel
                </h2>

                <div className="mt-10 text-center">
                    <img
                        src={
                            preview ??
                            "https://picsum.photos/200"
                        }
                        alt="avatar"
                        className="mx-auto h-24 w-24 rounded-full object-cover"
                    />
                    <button
                        type="button"
                        className="cursor-pointer text-blue-600"
                        onClick={handleSelectImage}
                    >
                        Select Picture
                    </button>

                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>

                <Input
                    placeholder=""
                    title="Name"
                    type="text"
                    required
                    value={title}
                    onChange={e =>
                        setTitle(e.target.value)
                    }
                />

                <Input
                    placeholder=""
                    title="Handle"
                    type="text"
                    required
                    value={handle}
                    onChange={e =>
                        setHandle(e.target.value)
                    }
                />

                {error && (
                    <p className="mt-2 text-red-500">Failed to create channel</p>
                )}

                <div className="mt-6 flex justify-end gap-2">

                    <button
                        onClick={
                            closeCreateChannelModal
                        }
                        className="rounded-lg border px-4 py-2"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={handleCreateChannel}
                        disabled={isPending}
                        className="rounded-lg bg-slate-900 px-4 py-2 text-white disabled:opacity-50"
                    >
                        {isPending ? "Creating..." : "Create"}
                    </button>

                </div>
            </div>
        </section>
    );
};