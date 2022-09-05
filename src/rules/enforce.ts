import { Rule } from "eslint";
import * as ESTree from "estree";

import { HexagonalArchitectureEnforcer } from "../common/HexagonalArchitectureEnforcer";
import RuleContext = Rule.RuleContext;

export interface Context extends RuleContext {
  options: {
    rootPath: string;
  }[];
}

const enforcer = new HexagonalArchitectureEnforcer();

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
        enforcer.enforce(context, node);
      },
    };
  },
};
