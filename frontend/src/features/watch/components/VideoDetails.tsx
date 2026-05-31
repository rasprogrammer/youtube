import { Share2, ThumbsUp } from "lucide-react";
import { useState } from "react";


export default function VideoDetails({ video }: { video: any }) {

    const [subscribed, setSubscribed] = useState(false);

    return <>
    
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
    </>
}