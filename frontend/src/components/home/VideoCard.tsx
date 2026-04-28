
interface VideoCardProps {
    video: {
        thumbnail: string;
        title: string;
        channel: {
            channelName: string;
        };
        views: string;
        createdAt: string;
    };
    index: number;
}

export default function VideoCard({ video, index } : VideoCardProps) {
    
    video.thumbnail = "https://plus.unsplash.com/premium_photo-1682608389022-e30aae063fcc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; 
    console.log('video > ', video); 

    return <>
        <div key={index} className="video-card cursor-pointer ">
            <img src={video.thumbnail} alt={video.title} className="w-full h-50" />
            <h3 className="text-lg font-semibold">{video.title}</h3>
            <p className="text-sm text-gray-600">{video.channel.channelName}</p>
            {/* time in minutes from created */}
            <p className="text-sm text-gray-600">{video.views} • {Math.floor((Date.now() - new Date(video.createdAt).getTime()) / 60000)} min ago</p>
        </div>
    </>
}