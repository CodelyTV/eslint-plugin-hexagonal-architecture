import * as ESTree from "estree";

import { Context } from "../rules/enforce";
import { HexagonalArchitectureFolderChecker } from "./HexagonalArchitectureFolderChecker";

export class HexagonalArchitectureEnforcer {
  private readonly folderChecker = new HexagonalArchitectureFolderChecker();

  public enforce(context: Context, node: ESTree.Node): void {
    this.ensureCompliesWithFolderStructure(context, node);
  }

  private ensureCompliesWithFolderStructure(context: Context, node: ESTree.Node): void {
    const filename = context.getFilename();
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
}
