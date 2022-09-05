"use strict";

const rule = require("../../dist/rules/enforce");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("enforce", rule, {
  valid: [
    {
      code: "good-hexagonal/application/UseCase.js",
      filename: `${__dirname}/paths/good-hexagonal/application/UseCase.js`,
      options: [{ rootPath: "paths/good-hexagonal" }],
    },
    {
      code: "good-hexagonal/domain/User.js",
      filename: `${__dirname}/paths/good-hexagonal/domain/User.js`,
      options: [{ rootPath: "paths/good-hexagonal" }],
    },
    {
      code: "good-hexagonal/infrastructure/RedisUserRepository.js",
      filename: `${__dirname}/paths/good-hexagonal/infrastructure/RedisUserRepository.js`,
      options: [{ rootPath: "paths/good-hexagonal" }],
    },
  ],
  invalid: [
    {
      code: "bad-hexagonal/patatas/UseCase.js",
      filename: `${__dirname}/paths/bad-hexagonal/patatas/UseCase.js`,
      options: [{ rootPath: "paths/bad-hexagonal" }],
      errors: [
        {
          message:
            "Folder 'patatas' in path '/patatas/UseCase.js' does not match the Hexagonal Architecture naming convention",
        },
      ],
    },
  ],
});
