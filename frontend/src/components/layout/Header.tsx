import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ProtectRoute from "../guard/ProtectRoute";


export default function Header() {

    // const { user } = useAuth();
    const user = { profilePic: "https://i.pravatar.cc/40?img=1", name: "John Doe" }; 

    return (
        <header className="header w-full h-16 bg-gray-900 text-white flex items-center justify-between px-4">
            <h1 className="text-xl font-bold">YouTube</h1>
            <div className="ml-4">
                <input type="text" placeholder="Search..." className="w-100 px-4 py-1 ml-4 bg-gray-800 text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
                {/* User profile or other header icons can go here */}
                {user ? 
                    <span className="flex items-center gap-4">
                    <p className="flex items-center gap-2"><span><img src={user.profilePic} alt={user.name} className="w-8 h-8 rounded-full" /></span>{user.name}</p>
                    <Link to="/upload" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ">Upload</Link>
                    </span>
                    : 
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In</button>
                }
                    
            </div>
        </header>
    )
}