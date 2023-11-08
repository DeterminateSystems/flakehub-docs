const Rolling = () => {
  return (
    <div className="my-4 md:my-4 lg:my-5">
      <div className="overflow-auto rounded-lg border border-gray-400 bg-gray-100 px-5 py-3 dark:border-gray-600 dark:bg-gray-800">
        <p className="font-mono text-sm md:text-base lg:text-lg">
          <span className="text-pink-600 dark:text-pink-400">0</span>
          <span className="text-gray-500 dark:text-gray-300">.</span>
          <span className="text-pink-600 dark:text-pink-400">1</span>
          <span className="text-gray-500 dark:text-gray-300">.</span>
          <span className="italic text-sky-600 dark:text-sky-400">
            {"${number of commits}"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Rolling;
