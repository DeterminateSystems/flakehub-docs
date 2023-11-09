import clsx from "clsx";
import {
  IoCheckmarkOutline,
  IoInformationCircleOutline,
  IoWarningOutline,
} from "react-icons/io5";

const Admonition = ({
  children,
  kind,
}: {
  children: React.ReactNode;
  kind: "info" | "success" | "warning";
}) => {
  return (
    <div
      className={clsx(
        kind === "info" &&
          "border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-gray-900",
        kind === "success" &&
          "border-green-500 bg-green-50 dark:border-green-400 dark:bg-gray-900",
        kind == "warning" &&
          "border-yellow-500 bg-yellow-50 dark:border-yellow-400 dark:bg-gray-900",
        "!md:py-4 prose-sm my-3 rounded-lg border-2 px-4 py-3 md:prose-base prose-p:m-0 md:px-6",
      )}
    >
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-3 lg:gap-4">
        {kind === "info" && (
          <IoInformationCircleOutline className="text-blue-500 dark:text-blue-400" />
        )}
        {kind === "success" && (
          <IoCheckmarkOutline className="fill-2 text-green-500 dark:text-green-400" />
        )}
        {kind == "warning" && (
          <IoWarningOutline className="fill-2 text-yellow-500 dark:text-yellow-400" />
        )}

        <div className="text-sm md:text-base">{children}</div>
      </div>
    </div>
  );
};

export default Admonition;
