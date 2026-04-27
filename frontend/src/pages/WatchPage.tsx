const WatchPage = () => {
  return (
    <div className="space-y-4">
      
      {/* Video */}
      <div className="w-full aspect-video bg-black rounded-xl" />

      {/* Title */}
      <h1 className="text-xl font-semibold">
        Video Title Here
      </h1>

      {/* Channel + Actions */}
      <div className="flex justify-between items-center">
        <div>Channel Info</div>
        <div>Actions</div>
      </div>

      {/* Description */}
      <div className="bg-gray-100 p-3 rounded-lg">
        Description...
      </div>

    </div>
  );
};

export default WatchPage;