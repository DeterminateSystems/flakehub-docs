import Link from "next/link";

const EXAMPLE_BASE_URL = "https://flakehub.com";

type FlakePath = {
  org: string;
  repo: string;
  version?: string;
};

const flakeHubUrl = ({ org, repo, version }: FlakePath): string => {
  const flakeHubUrl = `${EXAMPLE_BASE_URL}/f/${org}/${repo}/${version}.tar.gz`;

  return flakeHubUrl;
};

const orgUrl = (org: string): string => `https://github.com/${org}`;
const repoUrl = (org: string, repo: string) => `${orgUrl(org)}/${repo}`;

const ExampleUrls = ({ examples }: { examples: FlakePath[] }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Org</th>
          <th>Repo</th>
          <th>Version</th>
          <th>FlakeHub URL</th>
        </tr>
      </thead>
      <tbody>
        {examples.map(({ org, repo, version }, idx) => (
          <tr key={idx}>
            <td>
              <a href={orgUrl(org)}>
                <code>{org}</code>
              </a>
            </td>
            <td>
              <a href={repoUrl(org, repo)}>
                <code>{repo}</code>
              </a>
            </td>
            <td>{version && <code>{version}</code>}</td>
            <td>
              <Link href={flakeHubUrl({ org, repo, version })}>
                <code>{flakeHubUrl({ org, repo, version })}</code>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const UrlStructure = () => {
  return (
    <div className="not-prose">
      <div className="overflow-auto rounded-lg border border-gray-400 bg-gray-100 px-5 py-3 dark:border-gray-600 dark:bg-gray-800">
        <p className="font-mono text-sm md:text-base lg:text-lg">
          <span className="text-blue-500 dark:text-blue-400">
            {`${EXAMPLE_BASE_URL}/f/`}
          </span>
          <span className="text-orange-500 dark:text-orange-400">
            :org/:project/:version-range
          </span>
          <span className="text-blue-500 dark:text-blue-400">.tar.gz</span>
        </p>
      </div>

      <p className="float-right mt-1.5 space-x-2 font-mono text-xs md:mt-2 md:text-sm lg:mt-2.5">
        <span className="text-blue-500 dark:text-blue-400">static</span>
        <span className="text-orange-500 dark:text-orange-400">required</span>
      </p>
    </div>
  );
};

export { ExampleUrls, UrlStructure };
