import { sdk } from "@experiments/core";
import { Spreadsheet } from "@experiments/spreadsheet";

console.info("hello");
console.info(sdk.extend(Spreadsheet).get());
