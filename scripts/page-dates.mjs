// Writes src/lib/page-dates.json: route -> date of the last git commit that
// touched that route's page file. The sitemap reads this file when the build
// has no full git history (Vercel clones shallow). Run after changing a page:
//   node scripts/page-dates.mjs
import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";

const PAGE_DIR = "src/app/(site)";
const git = (...args) => execFileSync("git", args, { encoding: "utf8" }).trim();

if (git("rev-parse", "--is-shallow-repository") !== "false") {
  console.error("Shallow clone: git dates would be wrong. Run this in a full clone.");
  process.exit(1);
}

const dates = {};
for (const file of git("ls-files", `${PAGE_DIR}/**/page.tsx`, `${PAGE_DIR}/page.tsx`).split("\n")) {
  if (!file || file.includes("[")) continue;
  const route = file.slice(PAGE_DIR.length).replace(/\/page\.tsx$/, "") || "/";
  dates[route] = git("log", "-1", "--format=%cs", "--", file);
}
const sorted = Object.fromEntries(Object.entries(dates).sort(([a], [b]) => a.localeCompare(b)));
writeFileSync("src/lib/page-dates.json", JSON.stringify(sorted, null, 2) + "\n");
console.log(sorted);
