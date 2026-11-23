// Make the Judge Smile — one line about a small good thing today.
// Writes a single warm, surprising line (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "This morning the warung lady slipped an extra krupuk into my bag and whispered, 'for the road' — I carried a stranger's kindness home like it was still warm.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
