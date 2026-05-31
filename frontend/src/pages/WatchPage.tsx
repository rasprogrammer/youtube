import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HTTP_URL } from "../config";
import { Share2, ThumbsUp } from "lucide-react";
import WatchLayout from "../app/layouts/WatchLayout/WatchLayout";
import Comments from "../features/watch/components/Comments";
import VideoDetails from "../features/watch/components/VideoDetails";
import WatchBox from "../features/watch/components/WatchBox";
import RecommendationList from "../features/watch/components/RecommendationList";

const WatchPage = () => {

  const slug = useParams().slug;

  const [video, setVideo] = useState<any>(
    {
      thumbnail: "https://picsum.photos/400/250?random=1",
      title: "Building a YouTube Clone with React & Node.js",
      description: "In this video, we will build a YouTube clone using React for the frontend and Node.js for the backend. We will cover user authentication, video uploading, and real-time comments.",
      slug: "youtube-clone-react-node",
      channel: {
        channelName: "Code Mastery",
        profilePicture: "https://i.pravatar.cc/40?img=1",
        subscribers: "1.2M subscribers"
      },
      views: "12K views",
      createdAt: "2 days ago",
    }
  );

  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {

    // fetch video data based on slug 
    // const fetchVideo = async () => {
    //   const response = await axios.get(`${HTTP_URL}/videos/${slug}`);
    //   setVideo(response.data.video);
    // }

    // fetchVideo();

  }, [slug]);

  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <WatchLayout>
      <div className="flex gap-4 px-4">
        <div className="space-y-4">
          
          <WatchBox />

          <VideoDetails video={video} />

          <Comments />
        </div>
        <div>
          <RecommendationList />
        </div>
      </div>
    </WatchLayout>
  );
};

export default WatchPage;