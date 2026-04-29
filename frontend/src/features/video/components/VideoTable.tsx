type Video = {
  title: string;
  visibility: string;
  date: string;
  views: number;
};

const data: Video[] = [
  {
    title: "Week 6.2 useCallback",
    visibility: "Draft",
    date: "Today",
    views: 0,
  },
];

export default function VideoTable() {
  return (
    <div className="bg-[#1f1f1f] rounded-xl p-4">
      <h2 className="text-lg mb-4">Channel content</h2>

      <table className="w-full text-sm">
        <thead className="text-gray-400">
          <tr>
            <th className="text-left">Video</th>
            <th>Visibility</th>
            <th>Date</th>
            <th>Views</th>
          </tr>
        </thead>

        <tbody>
          {data.map((video, i) => (
            <tr key={i} className="border-t border-gray-700">
              <td className="py-3">{video.title}</td>
              <td className="text-center">{video.visibility}</td>
              <td className="text-center">{video.date}</td>
              <td className="text-center">{video.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}