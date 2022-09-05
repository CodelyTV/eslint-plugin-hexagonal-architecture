import * as ESTree from "estree";

import { Context } from "../rules/enforce";
import { HexagonalArchitectureDependencyRulesChecker } from "./HexagonalArchitectureDependencyRulesChecker";
import { HexagonalArchitectureFolderChecker } from "./HexagonalArchitectureFolderChecker";

export class HexagonalArchitectureEnforcer {
  private readonly folderChecker = new HexagonalArchitectureFolderChecker();
  private readonly dependencyRulesChecker = new HexagonalArchitectureDependencyRulesChecker();

  public enforce(context: Context, node: ESTree.Node): void {
    const filename = context.getFilename();

    this.ensureCompliesWithFolderStructure(filename, context, node);
    this.ensureCompliesWithDependencyRules(filename, context, node);
  }

  private ensureCompliesWithFolderStructure(
    filename: string,
    context: Context,
    node: ESTree.Node
  ): void {
    const rootPath = context.options[0].rootPath;

    const hexagonalFolderPath = filename.split(rootPath)[1];

    if (!this.folderChecker.complies(hexagonalFolderPath)) {
      context.report({
        node,
        message: `Folder '${this.folderChecker.extractLayerFolder(
          hexagonalFolderPath
        )}' in path '${hexagonalFolderPath}' does not match the Hexagonal Architecture naming convention`,
      });
    }
  }

  private ensureCompliesWithDependencyRules(
    filename: string,
    context: Context,
    node: ESTree.Node
  ): void {
    if (!this.dependencyRulesChecker.complies(filename)) {
      context.report({
        node,
        message: `The file '${filename}' is not following the Hexagonal Architecture Dependency rules`,
      });
    }
  }
}
