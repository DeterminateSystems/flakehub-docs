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
    <div className="prose my-4 max-w-none dark:prose-invert md:my-5 lg:my-6">
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
    </div>
  );
};

export default ExampleUrls;
