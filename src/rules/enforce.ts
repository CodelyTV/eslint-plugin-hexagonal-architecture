import { TSESLint } from "@typescript-eslint/utils";
import { TSESTree } from "@typescript-eslint/utils/dist/ts-estree";

import {
  GeneralNode,
  HexagonalArchitectureDependencyRuleEnforcer,
} from "../common/HexagonalArchitectureDependencyRuleEnforcer";
import { HexagonalArchitectureFolderEnforcer } from "../common/HexagonalArchitectureFolderEnforcer";
import { createRule } from "../utils/createRule";

const folderEnforcer = new HexagonalArchitectureFolderEnforcer();
const dependencyRuleEnforcer = new HexagonalArchitectureDependencyRuleEnforcer();

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
        "The folder containing this file does not follow the Hexagonal Architecture structure",
      "import-not-follow-hexagonal":
        "This import is violating the Hexagonal Architecture dependency rule ({{ source }} can't import {{ target }})",
    },
    type: "problem",
    schema: {},
  },
  defaultOptions: [],
  create(context: RuleContext) {
    return {
      "Program, ImportExpression"(node: TSESTree.Node) {
        folderEnforcer.enforce(context, node);

        if (folderEnforcer.hasCorrectFolderStructure(context.getFilename())) {
          dependencyRuleEnforcer.enforce(context, node as GeneralNode);
        }
      },
    };
  },
});

export default rule;
