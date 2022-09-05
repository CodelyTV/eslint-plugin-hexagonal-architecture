import { TSESTree } from "@typescript-eslint/utils/dist/ts-estree";

import { RuleContext } from "../rules/enforce";

type ImportDeclarationNode = {
  type: string;
  source: { value: string };
};

export type GeneralNode = { body: ImportDeclarationNode[] | undefined };

type HexagonalLayers = "application" | "domain" | "infrastructure";

export class HexagonalArchitectureDependencyRuleEnforcer {
  private readonly layers = ["application", "domain", "infrastructure"];
  private readonly dependenciesWildcard = {
    application: ["application", "domain"],
    domain: ["domain"],
    infrastructure: ["application", "domain", "infrastructure"],
  };

  public enforce(context: RuleContext, node: GeneralNode): void {
    const nodeBody = node["body"];

    if (nodeBody !== undefined) {
      nodeBody
        .filter((value) => value.type === "ImportDeclaration")
        .forEach((value) => {
          this.ensureImportIsValid(value.source.value, context, value as TSESTree.Node);
        });
    }
  }

  private ensureImportIsValid(importText: string, context: RuleContext, node: TSESTree.Node): void {
    const currentLayer = this.extractCurrentLayer(context.getFilename());
    const forbiddenImports = this.layers.filter(
      (layer) => !this.dependenciesWildcard[currentLayer].includes(layer)
    );

    forbiddenImports.forEach((forbiddenImport) => {
      if (importText.includes(forbiddenImport)) {
        context.report({
          node,
          messageId: "import-not-follow-hexagonal",
        });
      }
    });
  }

  private extractCurrentLayer(filename: string): HexagonalLayers {
    const regex = /application|domain|infrastructure/g;
    const found = filename.match(regex) as HexagonalLayers[];

    return found[0];
  }
}
