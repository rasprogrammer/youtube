import {
  Home,
  Clapperboard,
  PlaySquare,
  User,
  History,
  ListVideo,
  Clock3,
  Video,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from "../../features/auth/hooks/useCurrentUser";

export default function Sidebar() {
  const menuList = [
    [
      { name: "Home", path: "/", icon: Home },
      { name: "Shorts", path: "/shorts", icon: Clapperboard },
      { name: "Subscriptions", path: "/subscriptions", icon: PlaySquare },
    ],
    [
      { name: "Your channel", path: "/your-channel", icon: User },
      { name: "History", path: "/history", icon: History },
      { name: "Playlists", path: "/playlists", icon: ListVideo },
      { name: "Watch later", path: "/watch-later", icon: Clock3 },
      { name: "Your videos", path: "/your-videos", icon: Video },
    ],
  ];

  const { data } = useCurrentUser();
  const user = data?.user || null;

  const activeLinkClasses =
    "flex items-center gap-4 px-4 py-2 bg-gray-300 rounded-lg mx-2";

  return (
    <aside className="w-64 min-h-screen bg-gray-100 shadow-md">
      <ul className="py-2">
        {menuList.map((group, groupIndex) => (
          <div key={groupIndex}>
            {group.map((item) => {
              const Icon = item.icon;
              if (groupIndex === 1 && !user && item.path !== "/history") return null;

              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? activeLinkClasses : "flex items-center gap-4 px-4 py-2 rounded-lg mx-2"
                    }
                  >
                    <Icon size={20} />
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              );
            })}

            {groupIndex < menuList.length - 1 && (
              <hr className="my-2 border-gray-300" />
            )}
          </div>
        ))}
      </ul>
    </aside>
  );
}