import VideoCard from "./VideoCard";


export default function VideoFeed() {
    const videoFeed = [
        {
            title: 'Sample Video Title 1',
            channel: 'Sample Channel 1',
            views: '1M views',
            uploaded: '2 days ago',
            thumbnail: 'https://images.unsplash.com/photo-1761839257961-4dce65b72d99?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Sample Video Title 2',
            channel: 'Sample Channel 2',
            views: '2M views',
            uploaded: '1 week ago',
            thumbnail: 'https://plus.unsplash.com/premium_photo-1774104897753-7a28d6c22e79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8'
        }
    ];

    return <>
        <div className="video-feed grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {videoFeed.map((video, index) => (
                <VideoCard video={video} index={index} />
            ))}
        </div>
    </>
}