import { TSESTree } from "@typescript-eslint/utils/dist/ts-estree";

import { RuleContext } from "../rules/enforce";

export class HexagonalArchitectureFolderEnforcer {
  public enforce(context: RuleContext, node: TSESTree.Node): void {
    const filename = context.getFilename();

    if (!this.hasCorrectFolderStructure(filename)) {
      context.report({
        node,
        messageId: "folder-not-follow-hexagonal",
      });
    }
  }

  public hasCorrectFolderStructure(filename: string): boolean {
    return /application|domain|infrastructure/.test(filename);
  }
}
