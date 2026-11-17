import { execFileSync } from "child_process";
import path from "path";
import snapshot from "./page-dates.json";

const PAGE_DIR = "src/app/(site)";

function git(...args: string[]): string | null {
  try {
    return execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    return null;
  }
}

// A shallow clone (Vercel's default) dates every old file to the clone's
// boundary commit, so live git dates are only trusted with full history.
const fullHistory = git("rev-parse", "--is-shallow-repository") === "false";

/**
 * Date (YYYY-MM-DD) of the last commit that touched a static page's file.
 * Uses git when the build has full history, else the committed snapshot
 * written by `node scripts/page-dates.mjs`.
 */
export function pageLastModified(route: string): string {
  if (fullHistory) {
    const file = path.posix.join(PAGE_DIR, route === "/" ? "" : route, "page.tsx");
    const date = git("log", "-1", "--format=%cs", "--", file);
    if (date) return date;
  }
  const date = (snapshot as Record<string, string>)[route];
  if (!date) throw new Error(`No last-modified date for ${route}. Run node scripts/page-dates.mjs`);
  return date;
}
