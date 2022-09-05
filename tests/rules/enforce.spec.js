"use strict";

const rule = require("../../dist/rules/enforce");
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run("enforce", rule, {
  valid: [
    {
      code: "good-hexagonal-folder-structure/application/UseCase.js",
      filename: `${__dirname}/paths/good-hexagonal-folder-structure/application/UseCase.js`,
      options: [{ rootPath: "paths/good-hexagonal-folder-structure" }],
    },
    {
      code: "good-hexagonal-folder-structure/domain/User.js",
      filename: `${__dirname}/paths/good-hexagonal-folder-structure/domain/User.js`,
      options: [{ rootPath: "paths/good-hexagonal-folder-structure" }],
    },
    {
      code: "good-hexagonal-folder-structure/infrastructure/RedisUserRepository.ts",
      filename: `${__dirname}/paths/good-hexagonal-folder-structure/infrastructure/RedisUserRepository.js`,
      options: [{ rootPath: "paths/good-hexagonal-folder-structure" }],
    },
    {
      code: "good-hexagonal-dependency-rules/application/RenameUserCommandHandler.ts",
      filename: `${__dirname}/paths/good-hexagonal-dependency-rules/application/RenameUserCommandHandler.ts`,
      options: [{ rootPath: "paths/good-hexagonal-dependency-rules" }],
    },
    {
      code: "good-hexagonal-dependency-rules/application/UserRenamer.ts",
      filename: `${__dirname}/paths/good-hexagonal-dependency-rules/application/UserRenamer.ts`,
      options: [{ rootPath: "paths/good-hexagonal-dependency-rules" }],
    },
    {
      code: "good-hexagonal-dependency-rules/domain/User.ts",
      filename: `${__dirname}/paths/good-hexagonal-dependency-rules/domain/User.ts`,
      options: [{ rootPath: "paths/good-hexagonal-dependency-rules" }],
    },
    {
      code: "good-hexagonal-dependency-rules/domain/UserRepository.ts",
      filename: `${__dirname}/paths/good-hexagonal-dependency-rules/domain/UserRepository.ts`,
      options: [{ rootPath: "paths/good-hexagonal-dependency-rules" }],
    },
  ],
  invalid: [
    {
      code: "bad-hexagonal-folder-structure/patatas/UseCase.js",
      filename: `${__dirname}/paths/bad-hexagonal-folder-structure/patatas/UseCase.js`,
      options: [{ rootPath: "paths/bad-hexagonal-folder-structure" }],
      errors: [
        {
          message:
            "Folder 'patatas' in path '/patatas/UseCase.js' does not match the Hexagonal Architecture naming convention",
        },
      ],
    },
  ],
});
