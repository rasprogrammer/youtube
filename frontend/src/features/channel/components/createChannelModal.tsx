import { useState } from "react";
import { useCreateChannelModal } from "../../../app/store/ui.store";
import { Input } from "../../../shared/components/Input";


export const CreateChannelModal = () => {

    const closeCreateChannelModal = useCreateChannelModal((state) => state.closeCreateChannelModal);

    const [title, setTitle] = useState('');
    const [handle, setHandle] = useState('');

    return <>
        <section
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md'
            onClick={closeCreateChannelModal} // Close when clicking outside
            >
            <div
                className='w-[90%] max-w-md rounded-xl bg-white p-16 shadow-lg'
                onClick={e => e.stopPropagation()} // Prevent closing when clicking inside
            >
                <h2 className='text-secondary mb-6 text-2xl font-semibold'>
                Create Channel
                </h2>

                <div className="text-center mt-10">
                    <img src="https://picsum.photos/40/40?random=1" alt="Profile Picture" className="w-24 h-24 rounded-full mx-auto" />
                    <p className="text-blue-600 cursor-pointer ">Select Picture</p>
                </div>

                {/* Input Field */}
                <Input
                placeholder=''
                title='Name'
                type='text'
                required={true}
                value={title}
                onChange={e => {
                    setTitle(e.target.value);
                }}
                />

                <Input
                    placeholder=''
                    title='Handle'
                    type='text'
                    required={true}
                    value={handle}
                    onChange={e => {
                        setHandle(e.target.value);
                    }}
                />

                {/* Action Buttons */}
                <div className='mt-6 flex justify-end gap-2 font-bold'>
                <button
                    className='cursor-pointer rounded-lg border px-4 py-2 text-gray-600 transition hover:bg-gray-100'
                    onClick={closeCreateChannelModal}
                >
                    Cancel
                </button>
                <button
                    className='bg-primary-darker hover:bg-primary-chubb cursor-pointer rounded-lg px-4 py-2 text-base transition'
                    // onClick={handleCreateRoom}
                >
                    Create
                </button>
                </div>
            </div>
            </section>
    </>;
}