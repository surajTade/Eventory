const EventsLoader = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      {Array.from({ length: 7 }).map((_, index) => (
        <div
          key={index}
          className="w-full bg-gray-200 border-gray-400 h-16 rounded-md animate-pulse"
        ></div>
      ))}
    </div>
  );
};

export default EventsLoader;
