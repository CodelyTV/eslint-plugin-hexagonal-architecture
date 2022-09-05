import { ESLintUtils } from "@typescript-eslint/utils";

// eslint-disable-next-line new-cap
export const createRule = ESLintUtils.RuleCreator(
  () => "https://github.com/CodelyTV/eslint-plugin-hexagonal-architecture/blob/main/README.md"
);
