

export default function UploadVideo() {
    return <>
        <div>
            <h2 className="mt-5 text-2xl text-center ">Upload Video</h2>

            <div className="mt-5 w-full flex justify-center items-center gap-10">
                <div className="h-50 bordered bg-gray-200">
                    <div className="w-100 h-100"></div>
                </div>
                <div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Title</label>
                        <input type="text" className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Description</label>
                        <input type="text" className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Visibility</label>
                        <select className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                            <option value="unlisted">Unlisted</option>
                        </select>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="">Thumbnail</label>
                        <input type="file" className=""/>
                    </div>

                    <div className="mt-5">
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Upload</button>
                    </div>  
                </div>
            </div>
        </div>
    </>
}