type Video = {
  title: string;
  visibility: 'Public' | 'Unlisted' | 'Private';
  date: string;
  status: 'Published' | 'Draft';
  views: number;
};

const data: Video[] = [
  {
    title: "Week 6.2 useCallback",
    status: "Draft",
    visibility: "Public",
    date: "Today",
    views: 0,
  },
];

export default function VideoTable() {
  return (
    <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">Channel Content</h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3 font-medium">Video</th>
            <th className="py-3 font-medium">Visibility</th>
            <th className="py-3 font-medium">Date</th>
            <th className="py-3 font-medium">Status</th>
            <th className="py-3 font-medium">Views</th>
          </tr>
        </thead>

        <tbody>
          {data.map((video, i) => (
            <tr
              key={i}
              className="border-b hover:bg-gray-50 transition-colors"
            >
              <td className="py-4">{video.title}</td>

              <td className="text-center">
                <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-700">
                  {video.visibility}
                </span>
              </td>

              <td className="text-center">{video.date}</td>

              <td className="text-center">{video.date}</td>

              <td className="text-center">{video.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}