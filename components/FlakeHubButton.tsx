import Link from "next/link";

const FlakeHubButton = () => {
  return (
    <div className="my-4">
      <Link href="https://flakehub.com" target="_blank">
        <div className="rounded-xl border border-gray-200 px-6 py-4 shadow-sm transition-colors duration-200 hover:border-ds-magenta hover:bg-neutral-50 dark:border-gray-700 hover:dark:bg-gray-900">
          <div className="flex items-center gap-6">
            <span>
              <svg
                className="h-6 w-auto"
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserver"
                enableBackground="new 0 0 5000 4330.17"
                viewBox="0 0 5000 4330.17"
              >
                <linearGradient
                  id="a"
                  x1="4735.838"
                  x2="2764.106"
                  y1="457.542"
                  y2="2429.274"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".114" stopColor="#f8a51c"></stop>
                  <stop offset=".207" stopColor="#f68e28"></stop>
                  <stop offset=".397" stopColor="#f2643e"></stop>
                  <stop offset=".569" stopColor="#ef454e"></stop>
                  <stop offset=".715" stopColor="#ed3358"></stop>
                  <stop offset=".818" stopColor="#ec2c5b"></stop>
                </linearGradient>
                <path
                  d="M5000 2165.11V721.7L3749.97 0 2499.94 721.7v1443.41l1250.03 721.71z"
                  fill="url(#a)"
                ></path>
                <linearGradient
                  id="b"
                  x1="2338.944"
                  x2="161.112"
                  y1="1973.054"
                  y2="3800.472"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset=".078" stopColor="#0d4d9c"></stop>
                  <stop
                    offset=".258"
                    stopColor="#1162ac"
                    stopOpacity=".7735"
                  ></stop>
                  <stop
                    offset=".628"
                    stopColor="#1c98d4"
                    stopOpacity=".3078"
                  ></stop>
                  <stop
                    offset=".675"
                    stopColor="#1e9fd9"
                    stopOpacity=".2483"
                  ></stop>
                  <stop
                    offset=".903"
                    stopColor="#28aae1"
                    stopOpacity=".1"
                  ></stop>
                </linearGradient>
                <path
                  d="M2500.06 3608.47V2165.06l-1250.03-721.7L0 2165.06v1443.41l1250.03 721.7z"
                  fill="url(#b)"
                ></path>
                <linearGradient
                  id="c"
                  x1="3485.914"
                  x2="1514.182"
                  y1="1179.178"
                  y2="3150.91"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop
                    offset=".119"
                    stopColor="#cd1e8b"
                    stopOpacity=".9"
                  ></stop>
                  <stop
                    offset=".223"
                    stopColor="#b52790"
                    stopOpacity=".8852"
                  ></stop>
                  <stop
                    offset=".445"
                    stopColor="#783e9c"
                    stopOpacity=".8539"
                  ></stop>
                  <stop
                    offset=".762"
                    stopColor="#1762af"
                    stopOpacity=".8091"
                  ></stop>
                  <stop
                    offset=".826"
                    stopColor="#036ab3"
                    stopOpacity=".8"
                  ></stop>
                </linearGradient>
                <path
                  d="M3750.08 2886.75V1443.34l-1250.03-721.7-1250.03 721.7v1443.41l1250.03 721.7z"
                  fill="url(#c)"
                ></path>
              </svg>
            </span>

            <div className="space-y-1.5">
              <span className="text-xl font-medium">FlakeHub</span>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                A platform for discovering and publishing Nix flakes
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FlakeHubButton;
