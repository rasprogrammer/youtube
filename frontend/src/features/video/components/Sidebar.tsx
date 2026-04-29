const menu = [
  "Dashboard",
  "Content",
  "Analytics",
  "Community",
  "Subtitles",
  "Settings",
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-[#1f1f1f] p-4 hidden md:block">
      <h1 className="text-xl font-bold mb-6">Studio</h1>

      <ul className="space-y-2">
        {menu.map((item) => (
          <li
            key={item}
            className="p-2 rounded-lg hover:bg-[#2a2a2a] cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}