import { TSESLint } from "@typescript-eslint/utils";
import { TSESTree } from "@typescript-eslint/utils/dist/ts-estree";

import { HexagonalArchitectureEnforcer } from "../common/HexagonalArchitectureEnforcer";
import { createRule } from "../utils/createRule";

const enforcer = new HexagonalArchitectureEnforcer();

type MessageIds = "folder-not-follow-hexagonal" | "import-not-follow-hexagonal";
type Options = unknown;
// type Options = {
//   rootPath: string;
// };
export type RuleContext = Readonly<TSESLint.RuleContext<MessageIds, Options[]>>;

const rule = createRule<Options[], MessageIds>({
  name: "enforce",
  meta: {
    docs: {
      description: "Enforce Hexagonal Architecture on a given path",
      recommended: "error",
      requiresTypeChecking: false,
    },
    messages: {
      "folder-not-follow-hexagonal":
        "The folder containing this file does not follow the Hexagonal Architecture",
      "import-not-follow-hexagonal":
        "This import is violating the Hexagonal Architecture dependency rule",
    },
    type: "problem",
    schema: {},
  },
  defaultOptions: [],
  create(context: RuleContext) {
    return {
      Program(node: TSESTree.Node) {
        enforcer.enforce(context, node);
      },
    };
  },
});

export default rule;
