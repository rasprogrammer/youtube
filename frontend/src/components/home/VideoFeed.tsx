import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { videoFeed } from "../../api/feeds";

export default function VideoFeed() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await videoFeed();
        setVideos(data.videos);
      } catch (error) {
        console.error("Failed to load videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="video-feed grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video, index) => (
        <VideoCard video={video} index={index} key={index} />
      ))}
    </div>
  );
}