import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { recommendationVideos } from "../../features/feeds/videos";
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

      {/* RIGHT: Recommendation Section */}
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold">Recommendations</h1>
        {recommendations.map((video) => (
          <div key={video.slug} className="flex gap-2 items-center">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-16 h-16 rounded-md"
            />
            <div>
              <p className="text-sm font-semibold">{video.title}</p>
              <p className="text-xs text-gray-400">{video.channel.channelName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default WatchPageLayout;