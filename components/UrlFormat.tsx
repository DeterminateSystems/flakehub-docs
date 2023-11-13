import clsx from "clsx";

type Segment =
  | {
      variable: boolean;
      name: string;
    }
  | "slash";

const UrlFormat = ({
  root,
  segments,
}: {
  root: string;
  segments: Segment[];
}) => {
  return (
    <div className="my-4 md:my-5 lg:my-6">
      <div className="overflow-auto rounded-lg border border-gray-400 bg-gray-100 px-5 py-3 dark:border-gray-600 dark:bg-gray-800">
        <p className="font-mono text-sm md:text-base lg:text-lg">
          <span className="text-blue-500 dark:text-blue-400">{root}</span>
          <span>
            {segments.map((segment) => (
              <>
                <>
                  {segment == "slash" && (
                    <span className="text-gray-400">/</span>
                  )}
                </>
                <>
                  {segment != "slash" && (
                    <span
                      className={clsx(
                        !segment.variable && "text-blue-500 dark:text-blue-400",
                        segment.variable &&
                          "text-orange-500 dark:text-orange-400",
                      )}
                    >{`${segment.variable ? ":" : ""}${segment.name}`}</span>
                  )}
                </>
              </>
            ))}
          </span>
        </p>
      </div>

      <p className="float-right mt-1.5 space-x-2 font-mono text-xs md:mt-2 md:text-sm lg:mt-2.5">
        <span className="text-blue-500 dark:text-blue-400">static</span>
        <span className="text-orange-500 dark:text-orange-400">required</span>
      </p>
    </div>
  );
};

export default UrlFormat;
