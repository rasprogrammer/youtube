
interface VideoCardProps {
    video: {
        thumbnail: string;
        title: string;
        channel: string;
        views: string;
        uploaded: string;
    };
    index: number;
}

export default function VideoCard({ video, index } : VideoCardProps) {
    return <>
        <div key={index} className="video-card">
            <img src={video.thumbnail} alt={video.title} className="w-full h-50" />
            <h3 className="text-lg font-semibold">{video.title}</h3>
            <p className="text-sm text-gray-600">{video.channel}</p>
            <p className="text-sm text-gray-600">{video.views} • {video.uploaded}</p>
        </div>
    </>
}