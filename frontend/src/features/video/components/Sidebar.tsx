import { NavLink } from "react-router-dom";

const menu = [
  { name: "Dashboard", path: "/" },
  { name: "Content", path: "/upload", isActive: true, },
  { name: "Analytics", path: "/analytics" },
  { name: "Customization", path: "/customization" },
];

export default function Sidebar() {
  return (
    <div className="w-full min-h-screen border-r border-gray-300 shadow-xl p-4 hidden md:block">
      <ul className="space-y-2">
        {menu.map((item) => (
          <li key={item.name}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block p-2 pl-4 rounded-lg cursor-pointer transition-colors ${
                  isActive
                    ? "bg-blue-500 text-white font-semibold"
                    : "hover:bg-gray-100"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}