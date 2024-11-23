const EventDetails = ({ event }: { event: any }) => {
  const {
    title,
    description,
    image,
    date,
    time,
    mode,
    duration,
    location,
    price,
    organizer,
  } = event;

  const defaultImage =
    "https://via.placeholder.com/800x400.png?text=No+Image+Available";

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center text-zinc-800 dark:text-white">
        {title}
      </h1>

      <div className="mb-6">
        <img
          src={image || defaultImage}
          alt={title}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      <div className="space-y-4">
        <p className="text-lg text-gray-700 dark:text-gray-300">
          {description}
        </p>

        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Organized by:{" "}
          <span className="font-medium text-zinc-800 dark:text-white">
            {organizer}
          </span>
        </p>

        <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
          <div>
            <p>
              <span className="font-medium">Date:</span> {date}
            </p>
            <p>
              <span className="font-medium">Time:</span> {time}
            </p>
          </div>

          <div>
            <p>
              <span className="font-medium">Mode:</span> {mode}
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-700 dark:text-gray-300">
          <span className="font-medium">Duration:</span> {duration} hours
        </p>

        {mode === "Offline" && (
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <span className="font-medium">Location:</span> {location}
          </p>
        )}

        <p
          className={`text-sm font-medium ${
            price === 0
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {price === 0 ? "Free" : `Price: $${price}`}
        </p>
      </div>

      <div className="mt-6 text-center">
        <button
          className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg transition duration-200"
          onClick={() => alert("Register Now!")}
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default EventDetails;
