import { useEffect, useState } from "react"
import { getVideos } from "../api";

interface Video {
    title: string;
    visibility: string;
    date: string;
    views: number;
}

export const useVideo = () => {
    const [videos, setVideos] = useState<Video[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setVideos(getVideos());
        setLoading(false);
    }, [videos])

    return [ videos , loading ];

    
}