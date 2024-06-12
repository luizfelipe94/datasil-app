import "./editor.css";
import { Editor as MEditor, useMonaco } from "@monaco-editor/react";
import { useEffect, useRef, useState } from "react";

export const Script = () => {

  const monaco = useMonaco();
  const editorRef = useRef();
  const [script, setScript] = useState("");

  const onMount = (editor: any) => {
    editorRef.current = editor;
  };

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme("datasil1", {
        base: "vs",
        inherit: true,
        rules: [],
        colors: {
          "editor.foreground": "#000000",
          "editor.background": "#e6e5e5",
          "editorCursor.foreground": "#8B0000",
          "editor.lineHighlightBackground": "#0000FF20",
          "editorLineNumber.foreground": "#008800",
          "editor.selectionBackground": "#88000030",
          "editor.inactiveSelectionBackground": "#88000015",
        },
      });
    }
  }, [monaco]);

  return (
    <div>
      <MEditor
        height="70vh"
        defaultLanguage="python"
        theme="datasil1"
        defaultValue={example}
        onMount={onMount}
        value={script}
        options={{ minimap: { enabled: false } }}
      />
    </div>
  );
};

const example = `# Import SparkSession
from pyspark.sql import SparkSession

# Create SparkSession 
spark = SparkSession.builder \\
      .master("local[1]") \\
      .appName("[JOB NAME]") \\
      .getOrCreate() 

# Create DataFrame
data = [('James','','Smith','1991-04-01','M',3000),
  ('Michael','Rose','','2000-05-19','M',4000),
  ('Robert','','Williams','1978-09-05','M',4000),
  ('Maria','Anne','Jones','1967-12-01','F',4000),
  ('Jen','Mary','Brown','1980-02-17','F',-1)
]

columns = ["firstname","middlename","lastname","dob","gender","salary"]
df = spark.createDataFrame(data=data, schema = columns)`;