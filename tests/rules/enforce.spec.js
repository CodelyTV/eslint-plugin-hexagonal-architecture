"use strict";

const rule = require("../../src/rules/enforce");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("enforce", rule, {
  valid: [
    {
      code: "",
      filename: "/Users/codely/tests/paths/good-hexagonal/application/UseCase.js",
      options: [{ rootPath: "tests/paths/good-hexagonal" }],
    },
  ],
  invalid: [
    {
      code: "",
      filename: "/Users/codely/tests/paths/bad-hexagonal/patatas/UseCase.js",
      options: [{ rootPath: "tests/paths/bad-hexagonal" }],
      errors: [
        {
          message:
            "Folder 'patatas' in path '/patatas/UseCase.js' does not match the Hexagonal Architecture naming convention",
        },
      ],
    },
  ],
});
