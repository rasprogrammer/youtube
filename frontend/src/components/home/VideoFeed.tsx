import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { videoFeed } from "../../api/videos";

export default function VideoFeed() {
  const [videos, setVideos] = useState([
    {
      thumbnail: "https://picsum.photos/400/250?random=1",
      title: "Building a YouTube Clone with React & Node.js",
      slug: "youtube-clone-react-node",
      channel: {
        channelName: "Code Mastery",
        channelPicture: "https://i.pravatar.cc/40?img=1",
      },
      views: "12K views",
      createdAt: "2 days ago",
    },
    {
      thumbnail: "https://picsum.photos/400/250?random=2",
      title: "Learn TypeScript in 30 Minutes",
      slug: "learn-typescript-fast",
      channel: {
        channelName: "Dev Simplified",
        channelPicture: "https://i.pravatar.cc/40?img=2",
      },
      views: "45K views",
      createdAt: "1 week ago",
    },
    {
      thumbnail: "https://picsum.photos/400/250?random=3",
      title: "Tailwind CSS Crash Course",
      slug: "tailwind-css-crash-course",
      channel: {
        channelName: "Frontend Hub",
        channelPicture: "https://i.pravatar.cc/40?img=3",
      },
      views: "8.5K views",
      createdAt: "3 days ago",
    },
    {
      thumbnail: "https://picsum.photos/400/250?random=4",
      title: "How to Build REST APIs with Express",
      slug: "express-rest-api-guide",
      channel: {
        channelName: "Backend Pro",
        channelPicture: "https://i.pravatar.cc/40?img=4",
      },
      views: "22K views",
      createdAt: "5 days ago",
    },
    {
      thumbnail: "https://picsum.photos/400/250?random=5",
      title: "MongoDB Full Tutorial for Beginners",
      slug: "mongodb-full-tutorial",
      channel: {
        channelName: "Database Academy",
        channelPicture: "https://i.pravatar.cc/40?img=5",
      },
      views: "31K views",
      createdAt: "2 weeks ago",
    },
  ]);

  useEffect(() => {
    // const fetchVideos = async () => {
    //   try {
    //     const data = await videoFeed();
    //     setVideos(data.videos);
    //   } catch (error) {
    //     console.error("Failed to load videos:", error);
    //   }
    // };

    // fetchVideos();
  }, []);

  return (
    <div className="video-feed grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video, index) => (
        <VideoCard video={video} index={index} key={index} />
      ))}
    </div>
  );
}