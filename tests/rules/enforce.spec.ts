"use strict";

import { ESLintUtils } from "@typescript-eslint/utils";
import fs from "fs";

import rule from "../../src/rules/enforce";

const ruleTester = new ESLintUtils.RuleTester({
  parser: "@typescript-eslint/parser",
});

function readFile(path: string): string {
  return fs.readFileSync(path).toString();
}

ruleTester.run("enforce", rule, {
  valid: [
    {
      name: "📁 folder named application",
      filename: `${__dirname}/paths/good-hexagonal-folder-structure/application/UseCase.js`,
      code: readFile(`${__dirname}/paths/good-hexagonal-folder-structure/application/UseCase.js`),
    },
    {
      name: "📁 folder named domain",
      filename: `${__dirname}/paths/good-hexagonal-folder-structure/domain/User.js`,
      code: readFile(`${__dirname}/paths/good-hexagonal-folder-structure/domain/User.js`),
    },
    {
      name: "📁 folder named infrastructure",
      filename: `${__dirname}/paths/good-hexagonal-folder-structure/infrastructure/RedisUserRepository.js`,
      code: readFile(
        `${__dirname}/paths/good-hexagonal-folder-structure/infrastructure/RedisUserRepository.js`
      ),
    },
    {
      name: "🔀 command handler importing an use case",
      filename: `${__dirname}/paths/good-hexagonal-dependency-rules/application/RenameUserCommandHandler.ts`,
      code: readFile(
        `${__dirname}/paths/good-hexagonal-dependency-rules/application/RenameUserCommandHandler.ts`
      ),
    },
    {
      name: "🔀 use case importing a repository interface",
      filename: `${__dirname}/paths/good-hexagonal-dependency-rules/application/UserRenamer.ts`,
      code: readFile(
        `${__dirname}/paths/good-hexagonal-dependency-rules/application/UserRenamer.ts`
      ),
    },
    {
      name: "🔀 aggregate not importing anything",
      filename: `${__dirname}/paths/good-hexagonal-dependency-rules/domain/User.ts`,
      code: readFile(`${__dirname}/paths/good-hexagonal-dependency-rules/domain/User.ts`),
    },
    {
      name: "🔀 repository interface importing an aggregate",
      filename: `${__dirname}/paths/good-hexagonal-dependency-rules/domain/UserRepository.ts`,
      code: readFile(`${__dirname}/paths/good-hexagonal-dependency-rules/domain/UserRepository.ts`),
    },
    {
      name: "🔀 repository implementation importing an aggregate and repository interface",
      filename: `${__dirname}/paths/good-hexagonal-dependency-rules/infrastructure/RedisUserRepository.ts`,
      code: readFile(
        `${__dirname}/paths/good-hexagonal-dependency-rules/infrastructure/RedisUserRepository.ts`
      ),
    },
    {
      name: "♻️ async import is ignored",
      filename: `${__dirname}/paths/regression/infrastructure/AsyncImport.ts`,
      code: readFile(`${__dirname}/paths/regression/infrastructure/AsyncImport.ts`),
    },
  ],
  invalid: [
    {
      name: "📁 folder named patatas",
      filename: `${__dirname}/paths/bad-hexagonal-folder-structure/patatas/UseCase.js`,
      code: readFile(`${__dirname}/paths/bad-hexagonal-folder-structure/patatas/UseCase.js`),
      errors: [{ messageId: "folder-not-follow-hexagonal" }],
    },
    {
      name: "🔀 application importing infrastructure",
      filename: `${__dirname}/paths/bad-hexagonal-dependency-rules/application/UserRenamer.ts`,
      code: readFile(
        `${__dirname}/paths/bad-hexagonal-dependency-rules/application/UserRenamer.ts`
      ),
      errors: [{ messageId: "import-not-follow-hexagonal" }],
    },
    {
      name: "🔀 aggregate importing from application",
      filename: `${__dirname}/paths/bad-hexagonal-dependency-rules/domain/User.ts`,
      code: readFile(`${__dirname}/paths/bad-hexagonal-dependency-rules/domain/User.ts`),
      errors: [{ messageId: "import-not-follow-hexagonal" }],
    },
    {
      name: "🔀 repository interface importing from application and infrastructure",
      filename: `${__dirname}/paths/bad-hexagonal-dependency-rules/domain/UserRepository.ts`,
      code: readFile(`${__dirname}/paths/bad-hexagonal-dependency-rules/domain/UserRepository.ts`),
      errors: [
        { messageId: "import-not-follow-hexagonal" },
        { messageId: "import-not-follow-hexagonal" },
      ],
    },
  ],
});
