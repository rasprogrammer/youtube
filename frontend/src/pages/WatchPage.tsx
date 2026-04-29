import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HTTP_URL } from "../config";
import { Share2, ThumbsUp } from "lucide-react";

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
    <div className="space-y-4">
      
      {/* Video */}
      <div className="w-full aspect-video bg-black rounded-xl " />

      {/* Title */}
      <h1 className="text-xl font-bold">
        {video.title || "Video Title"}
      </h1>

      {/* Channel + Actions */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img src={video.channel?.profilePicture} alt="Channel Profile" className="w-10 h-10 rounded-full" />
          <div className="flex flex-col text-sm">
            <div>{video.channel?.channelName}</div>
            <div >{video.channel?.subscribers}</div>
          </div>
          <div className="px-2">
            <button 
              className={`py-1 px-4 rounded-full ${subscribed ? 'bg-gray-300 text-black' : 'bg-red-500 hover:bg-red-600 text-white'}`}
              onClick={() => setSubscribed(!subscribed)}
            >
              {subscribed ? 'Subscribed' : 'Subscribe'}
            </button>
          </div>
        </div>
        <div className="flex items-center gap-4">
            <div className="flex gap-1">
              <button className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-full"><ThumbsUp /></button>
            </div>
            <div>
              <button className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded-full"><Share2 /></button>
            </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-gray-100 p-3 rounded-lg">
        <h5 className="text-md font-bold">Description</h5>
        <p className="text-sm">{video.description}</p>
      </div>

      {/* Comments */}
      <div className="bg-gray-100 p-3 rounded-lg">
        <h5 className="text-xl font-bold">5 Comments</h5>
        {/* Add comment  */}
        <div className="flex gap-2 items-center my-4">
          <img src="https://i.pravatar.cc/40?img=2" alt="User Profile" className="w-8 h-8 rounded-full" />
          <input type="text" placeholder="Add a comment..." className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">Comment</button>
        </div>
        {/* Comment List */}
        <div className="space-y-3">
          <div className="flex gap-2 items-start">
            <img src="https://i.pravatar.cc/40?img=3" alt="User Profile" className="w-8 h-8 rounded-full" />
            <div>
              <div className="text-sm font-bold">Jane Doe</div>
              <div className="text-sm">Great video! Really helped me understand the concepts.</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default WatchPage;