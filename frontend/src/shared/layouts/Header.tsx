import { BellIcon, Menu, Mic, PlusIcon, Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../../features/auth/hooks/useCurrentUser";


export default function Header({ onClick }: { 
    onClick: () => void 
}) {

    const { data } = useCurrentUser();

    const user = data?.user || {};

    return (<>
        <div className="flex items-center justify-between gap-4 px-4 py-2">
            <div className="flex items-center gap-x-4">
                <button 
                    type="button" 
                    className="cursor-pointer hover:bg-gray-300 hover:rounded-full p-2" 
                    onClick={onClick}
                >
                    <Menu />
                </button>
                <NavLink to="/" className="text-2xl font-bold">YouTube</NavLink>
            </div>
            <div className="flex items-center justify-center gap-x-2">
                <div className="flex items-center bg-gray-400 rounded-full">
                    <input type="text" placeholder="Search..." className="w-[450px] px-4 py-2 bg-gray-300 text-black placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-l-full" />
                    <button type="button" className="flex items-center justify-center px-4 cursor-pointer">
                        <Search />
                    </button>
                </div>
                <button type="button" className="flex items-center justify-center px-4 py-2 rounded-full cursor-pointer hover:bg-gray-300">
                    <Mic />
                </button>
            </div>
            <div className="flex items-center gap-6 px-4">
                <NavLink to="/upload" className="flex items-center gap-2 px-4 py-2 text-md font-semibold bg-gray-300 rounded-full cursor-pointer">
                    <PlusIcon />
                    Create
                </NavLink>
                <div>
                    <BellIcon />
                </div>
                {Object.keys(user).length > 0 ? (
                    <div className="flex flex-col items-center">
                        <img src="https://picsum.photos/40/40?random=1" alt="" className="w-8 h-8 rounded-full" /> 
                        {/* <small>{user.name}</small> */}
                    </div>
                    ) : (
                        <NavLink to="/signin" className="bg-gray-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Sign In</NavLink>
                    )
                }
                <div>
                </div>
            </div>
        </div>
    </>);
}