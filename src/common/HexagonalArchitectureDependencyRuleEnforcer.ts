import { TSESTree } from "@typescript-eslint/utils/dist/ts-estree";

import { RuleContext } from "../rules/enforce";

export class HexagonalArchitectureDependencyRuleEnforcer {
  public enforce(context: RuleContext, node: TSESTree.Node): void {
    console.log(context, node);
  }
}
