import {writeFormatType} from "@yfnote/generate-types";
import {templates} from "../src/constants/templates";
import path from "path";

const rootPath = path.resolve(__dirname, "../src/lib/messageFormatType.ts");
writeFormatType(templates, rootPath);
