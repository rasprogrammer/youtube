import { Link } from "react-router-dom";

interface VideoCardProps {
    video: {
        thumbnail: string;
        title: string;
        slug: string;
        channel: {
            channelName: string;
            channelPicture: string;
        };
        views: string;
        createdAt: string;
    };
    index: number;
}

export default function VideoCard({ video, index } : VideoCardProps) {
    
    video.thumbnail = "https://plus.unsplash.com/premium_photo-1682608389022-e30aae063fcc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 

    return <>
        <Link to={`/watch/${video.slug}`} className="p-4 hover:bg-gray-300 rounded-lg transition-colors duration-200">
            <div className="video-card cursor-pointer ">
                <img src={video.thumbnail} alt={video.title} className="w-full h-50 rounded-lg" />
                <div className="py-2 flex gap-2">
                    <img src={video.channel.channelPicture} alt="" className="w-8 h-8 rounded-full"/>
                    <div>
                        <h3 className="text-lg font-semibold text-md leading-6">{video.title}</h3>
                        <p className="text-sm text-gray-600">{video.channel.channelName}</p>
                        {/* time in minutes from created */}
                        <p className="text-sm text-gray-600">{video.views} • {video.createdAt}</p>
                    </div>
                </div>
            </div>
        </Link>
    </>
}