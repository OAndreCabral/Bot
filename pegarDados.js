import fs from "fs";
import { XMLParser } from "fast-xml-parser";

const arquivo = fs.readdirSync("xml", "utf-8");

let dadosArray = [];