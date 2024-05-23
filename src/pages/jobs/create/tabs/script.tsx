import { Editor } from "@monaco-editor/react";
import { pythonCode } from "../python-code";

export const Script = () => {
  return (
    <div>
      <Editor height="70vh" defaultLanguage="python" theme="vs-dark" defaultValue={pythonCode} />
    </div>
  );
};