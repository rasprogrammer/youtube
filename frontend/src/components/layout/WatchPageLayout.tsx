import { Outlet } from "react-router-dom";

const WatchPageLayout = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 max-w-[1400px] mx-auto">
      
      {/* LEFT: Video Section */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* RIGHT: Sidebar Recommendations */}
      <aside className="w-full lg:w-[380px]">
        {/* You can replace this with <RecommendationList /> */}
        <div className="space-y-4">
          <div className="h-24 bg-gray-200 rounded-lg" />
          <div className="h-24 bg-gray-200 rounded-lg" />
          <div className="h-24 bg-gray-200 rounded-lg" />
        </div>
      </aside>

    </div>
  );
};

export default WatchPageLayout;