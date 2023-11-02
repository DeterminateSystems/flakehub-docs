const SemVer = ({
  major,
  minor,
  patch,
  explainer,
}: {
  major: string;
  minor: string;
  patch: string;
  explainer: boolean;
}) => {
  return (
    <div className="my-4 md:my-4 lg:my-5">
      <div className="overflow-auto rounded-lg border border-gray-400 bg-gray-100 px-5 py-3 dark:border-gray-600 dark:bg-gray-800">
        <p className="font-mono text-sm md:text-base lg:text-lg">
          <span className="text-pink-600 dark:text-pink-400">{major}</span>
          <span className="text-gray-500 dark:text-gray-300">.</span>
          <span className="text-sky-600 dark:text-sky-400">{minor}</span>
          <span className="text-gray-500 dark:text-gray-300">.</span>
          <span className="text-sky-600 dark:text-sky-400">{patch}</span>
        </p>
      </div>

      {explainer && (
        <p className="text-xxs mt-1.5 space-x-2 text-right font-mono md:mt-2 md:text-xs lg:mt-2.5 lg:text-sm">
          <span>Backwards</span>
          <span className="text-pink-600 dark:text-pink-400">incompatible</span>
          <span className="text-sky-600 dark:text-sky-400">compatible</span>
        </p>
      )}
    </div>
  );
};

export { SemVer };
