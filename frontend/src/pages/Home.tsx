import MainLayout from "../app/layouts/MainLayout/MainLayout";
import VideoFeed from "../features/feeds/components/VideoFeed";

export default function Home() {
    return <>
        <MainLayout>
            <VideoFeed />
        </MainLayout>
    </>
}