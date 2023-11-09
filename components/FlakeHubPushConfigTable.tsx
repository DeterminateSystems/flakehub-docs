import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";

const md = (input: string): string =>
  DOMPurify.sanitize(
    marked.parseInline(input, { headerIds: false, mangle: false }),
  );

const Org = () => {
  return <span className="font-mono font-bold text-blue-500">org</span>;
};

const Repo = () => {
  return <span className="font-mono font-bold text-teal-500">repo</span>;
};

const NameFormat = () => {
  return (
    <span className="inline-flex items-center font-mono font-bold">
      <Org />
      <span className="text-gray-500">/</span>
      <Repo />
    </span>
  );
};

type Param = {
  name: string;
  description: string | React.ReactElement;
  required: boolean;
  default?: string;
};

const FlakeHubPushConfigTable = ({ params }: { params: Param[] }) => {
  return (
    <table className="prose table-auto overflow-auto dark:prose-invert">
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Description</th>
          <th>Required?</th>
          <th>Default</th>
        </tr>
      </thead>
      <tbody>
        {params.map((param, idx) => (
          <tr key={idx} id={`cfg-${param.name}`}>
            <td className="w-1/5">
              <code>{param.name}</code>
            </td>
            <td>
              {typeof param.description === "string" && (
                <div
                  dangerouslySetInnerHTML={{ __html: md(param.description) }}
                />
              )}
              {typeof param.description !== "string" && param.description}
            </td>
            <td className="w-1/6">{param.required && <>✅</>}</td>
            <td className="w-1/6">
              {param.default && <code>{param.default}</code>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { FlakeHubPushConfigTable, NameFormat, Org };
