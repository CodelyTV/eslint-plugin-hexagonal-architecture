import { Rule } from "eslint";
import * as ESTree from "estree";
import RuleContext = Rule.RuleContext;

interface Context extends RuleContext {
  options: {
    rootPath: string;
  }[];
}

module.exports = {
  meta: {
    schema: [
      {
        type: "object",
        properties: {
          rootPath: {
            type: "string",
          },
        },
        additionalProperties: false,
      },
    ],
  },
  create(context: Context) {
    return {
      Program(node: ESTree.Node) {
        const filename = context.getFilename();
        const rootPath = context.options[0].rootPath;

        const hexagonalFolderPath = filename.split(rootPath)[1];

        const hexagonalFolder = hexagonalFolderPath.split("/")[1];

        if (!["application", "domain", "infrastructure"].includes(hexagonalFolder)) {
          context.report({
            node,
            message: `Folder '${hexagonalFolder}' in path '${hexagonalFolderPath}' does not match the Hexagonal Architecture naming convention`,
          });
        }
      },
    };
  },
};
