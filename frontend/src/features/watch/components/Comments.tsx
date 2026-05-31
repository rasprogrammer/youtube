

export default function Comments() {
    return <>
        <div>
            {/* Comments */}
            <div className="bg-gray-100 p-3 rounded-lg">
                <h5 className="text-xl font-bold">5 Comments</h5>
                {/* Add comment  */}
                <div className="flex gap-2 items-center my-4">
                    <img src="https://i.pravatar.cc/40?img=2" alt="User Profile" className="w-8 h-8 rounded-full" />
                    <input type="text" placeholder="Add a comment..." className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">Comment</button>
                </div>
                {/* Comment List */}
                <div className="space-y-3">
                    <div className="flex gap-2 items-start">
                        <img src="https://i.pravatar.cc/40?img=3" alt="User Profile" className="w-8 h-8 rounded-full" />
                        <div>
                            <div className="text-sm font-bold">Jane Doe</div>
                            <div className="text-sm">Great video! Really helped me understand the concepts.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}