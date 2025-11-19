import { help } from "./help";
import { version } from "./version";

const methods = ["help", "init", "generate", "snippets", "version"] as const;
export type MethodName = (typeof methods)[number];

export const map: Record<MethodName | string, (args: string[]) => void> = {
  help: () => help(),
  h: () => help(),
  "-h": () => help(),
  version,
  v: version,
  "-v": version,
};
