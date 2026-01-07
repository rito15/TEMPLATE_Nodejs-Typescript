import { TestUtil } from "./util/test.util";

export function app() {
    console.log("Success");
    TestUtil();
}

// ESM
if (import.meta.url?.endsWith(process.argv[1].replace(/\\/g, '/'))) {
    app();
}