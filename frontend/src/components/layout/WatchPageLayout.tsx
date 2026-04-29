import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { recommendationVideos } from "../../api/videos";
import Header from "./Header";

type Video = {
  thumbnail: string;
  title: string;
  slug: string;
  channel: {
    channelName: string;
    profilePicture: string;
  };
  views: string;
  createdAt: string;
};

const WatchPageLayout = () => {

  const [recommendations, setRecommendations] = useState<Video[]>([]);
  const dummyRecommendations = [
    {
      thumbnail: "https://picsum.photos/400/250?random=11",
      title: "Next.js Full Course 2025",
      slug: "nextjs-full-course-2025",
      channel: {
        channelName: "Tech With Alex",
        profilePicture: "https://i.pravatar.cc/40?img=11",
      },
      views: "18K views",
      createdAt: "1 day ago",
    },
    {
      thumbnail: "https://picsum.photos/400/250?random=12",
      title: "React Hooks Explained Clearly",
      slug: "react-hooks-explained",
      channel: {
        channelName: "Code Explained",
        profilePicture: "https://i.pravatar.cc/40?img=12",
      },
      views: "27K views",
      createdAt: "4 days ago",
    },
    {
      thumbnail: "https://picsum.photos/400/250?random=13",
      title: "Build a Fullstack App (MERN)",
      slug: "mern-fullstack-app",
      channel: {
        channelName: "Fullstack Dev",
        profilePicture: "https://i.pravatar.cc/40?img=13",
      },
      views: "9.8K views",
      createdAt: "2 days ago",
    },
    {
      thumbnail: "https://picsum.photos/400/250?random=14",
      title: "Understanding JWT Authentication",
      slug: "jwt-auth-guide",
      channel: {
        channelName: "Backend Simplified",
        profilePicture: "https://i.pravatar.cc/40?img=14",
      },
      views: "15K views",
      createdAt: "6 days ago",
    },
    {
      thumbnail: "https://picsum.photos/400/250?random=15",
      title: "CSS Grid vs Flexbox",
      slug: "css-grid-vs-flexbox",
      channel: {
        channelName: "Frontend Pro",
        profilePicture: "https://i.pravatar.cc/40?img=15",
      },
      views: "21K views",
      createdAt: "1 week ago",
    },
  ];
  
  useEffect(() => {
    setRecommendations(dummyRecommendations);
  }, []); 
         

  return (
    <>
    <Header />
    <div className="flex flex-col lg:flex-row gap-4 py-4 px-1 max-w-[1400px] mx-auto">
      
      {/* LEFT: Video Section */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* RIGHT: Sidebar Recommendations */}
      <aside className="w-full lg:w-[380px]">
        {/* You can replace this with <RecommendationList /> */}
        <div className="space-y-4">
          {recommendations.map((video: Video, index: number) => (
            <div key={index} className="h-24 bg-gray-200 rounded-lg p-2 hover:bg-gray-300 cursor-pointer" >
              <div className="flex gap-2">
                <img src={video.thumbnail} alt={video.title} className="w-32 h-20 object-cover rounded-lg" />
                <div className="flex flex-col justify-between">
                  <h3 className="font-bold text-sm">{video.title}</h3>
                  <div className="text-xs text-gray-500">
                    <div>{video.channel.channelName}</div>
                    <div>{video.views} • {video.createdAt}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>

    </div>
    </>
  );
};

export default WatchPageLayout;