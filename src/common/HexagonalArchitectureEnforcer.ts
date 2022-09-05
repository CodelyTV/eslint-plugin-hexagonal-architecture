import { TSESTree } from "@typescript-eslint/utils/dist/ts-estree";

import { RuleContext } from "../rules/enforce";
import { HexagonalArchitectureDependencyRulesChecker } from "./HexagonalArchitectureDependencyRulesChecker";
import { HexagonalArchitectureFolderChecker } from "./HexagonalArchitectureFolderChecker";

export class HexagonalArchitectureEnforcer {
  private readonly folderChecker = new HexagonalArchitectureFolderChecker();
  private readonly dependencyRulesChecker = new HexagonalArchitectureDependencyRulesChecker();

  public enforce(context: RuleContext, node: TSESTree.Node): void {
    const filename = context.getFilename();

    if (!/application|domain|infrastructure/.test(filename)) {
      context.report({
        node,
        messageId: "folder-not-follow-hexagonal",
      });
    }

    // ["application", "domain", "infrastructure"].includes(layer);
    // if (!this.folderChecker.complies(hexagonalFolderPath)) {

    // }
  }

  // private ensureCompliesWithFolderStructure(
  //   filename: string,
  //   context: RuleContext,
  //   node: unknown
  // ): void {
  //   const hexagonalFolderPath = filename.split(rootPath)[1];
  //
  //   if (!this.folderChecker.complies(hexagonalFolderPath)) {
  //     context.report({
  //       node,
  //       message: `Folder '${this.folderChecker.extractLayerFolder(
  //         hexagonalFolderPath
  //       )}' in path '${hexagonalFolderPath}' does not match the Hexagonal Architecture naming convention`,
  //     });
  //   }
  // }

  // private ensureCompliesWithDependencyRules(
  //   filename: string,
  //   context: Readonly<TSESLint.RuleContext<"folder-not-follow-hexagonal", never[]>>,
  //   node: unknown
  // ): void {
  //   // console.log("dale", node);
  //   // if (!this.dependencyRulesChecker.complies(filename)) {
  //   //   context.report({
  //   //     node,
  //   //     message: `The file '${filename}' is not following the Hexagonal Architecture Dependency rules`,
  //   //   });
  //   // }
  // }
}
