import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny line about marathon training: months of preparation,
// race-day confidence, and the twist that the only thing actually
// run was out of excuses — and the excuses beat me to the finish
// line. Two beats, one line, punchline at the very end.
const LINE =
  "I signed up for a marathon, trained for six months, and on race day I realized the only thing I'd been running was out of excuses — and the excuses beat me to the finish line.";

if (LINE.length < 1 || LINE.length > 280 || LINE.includes("\n")) {
  throw new Error(`Entry must be one line of 1-280 chars, got ${LINE.length} chars.`);
}

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote entry (${LINE.length} chars) to ${join(outDir, "entry.txt")}`);
