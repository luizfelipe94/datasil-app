import { GrDocumentCsv } from "react-icons/gr";
import { FaFolder } from "react-icons/fa";
import { LuFileJson } from "react-icons/lu";
import { FaRegFilePdf } from "react-icons/fa";
import { FaFileImage } from "react-icons/fa6";

export const FileIcon = ({ extension }: { extension: string }) => {
  return {
    folder: <FaFolder />,
    csv: <GrDocumentCsv />,
    json: <LuFileJson />,
    pdf: <FaRegFilePdf />,
    jpeg: <FaFileImage />,
    png: <FaFileImage />,
  }[extension] || <></>;
};