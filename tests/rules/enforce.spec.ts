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
      name: "a folder named application",
      filename: `${__dirname}/paths/good-hexagonal-folder-structure/application/UseCase.js`,
      code: readFile(`${__dirname}/paths/good-hexagonal-folder-structure/application/UseCase.js`),
    },
    {
      name: "a folder named domain",
      filename: `${__dirname}/paths/good-hexagonal-folder-structure/domain/User.js`,
      code: readFile(`${__dirname}/paths/good-hexagonal-folder-structure/domain/User.js`),
    },
    {
      name: "a folder named infrastructure",
      filename: `${__dirname}/paths/good-hexagonal-folder-structure/infrastructure/RedisUserRepository.js`,
      code: readFile(
        `${__dirname}/paths/good-hexagonal-folder-structure/infrastructure/RedisUserRepository.js`
      ),
    },
    // {
    //   code: "good-hexagonal-dependency-rules/application/RenameUserCommandHandler.ts",
    //   filename: `${__dirname}/paths/good-hexagonal-dependency-rules/application/RenameUserCommandHandler.ts`,
    //   options: [{ rootPath: "paths/good-hexagonal-dependency-rules" }],
    // },
    // {
    //   code: "good-hexagonal-dependency-rules/application/UserRenamer.ts",
    //   filename: `${__dirname}/paths/good-hexagonal-dependency-rules/application/UserRenamer.ts`,
    //   options: [{ rootPath: "paths/good-hexagonal-dependency-rules" }],
    // },
    // {
    //   code: "good-hexagonal-dependency-rules/domain/User.ts",
    //   filename: `${__dirname}/paths/good-hexagonal-dependency-rules/domain/User.ts`,
    //   options: [{ rootPath: "paths/good-hexagonal-dependency-rules" }],
    // },
    // {
    //   code: "good-hexagonal-dependency-rules/domain/UserRepository.ts",
    //   filename: `${__dirname}/paths/good-hexagonal-dependency-rules/domain/UserRepository.ts`,
    //   options: [{ rootPath: "paths/good-hexagonal-dependency-rules" }],
    // },
  ],
  invalid: [
    {
      name: "a folder named patatas",
      filename: `${__dirname}/paths/bad-hexagonal-folder-structure/patatas/UseCase.js`,
      code: readFile(`${__dirname}/paths/bad-hexagonal-folder-structure/patatas/UseCase.js`),
      errors: [
        {
          messageId: "folder-not-follow-hexagonal",
        },
      ],
    },
    // {
    //   name: "application importing infrastructure",
    //   code: readFile(
    //     `${__dirname}/paths/bad-hexagonal-dependency-rules/application/UserRenamer.ts`
    //   ),
    //   filename: `${__dirname}/paths/bad-hexagonal-dependency-rules/application/UserRenamer.ts`,
    //   errors: [
    //     {
    //       messageId: "folder-not-follow-hexagonal",
    //     },
    //   ],
    // },
    // {
    //   code: "bad-hexagonal-dependency-rules/domain/User.ts",
    //   filename: `${__dirname}/paths/bad-hexagonal-dependency-rules/domain/User.ts`,
    //   options: [{ rootPath: "paths/bad-hexagonal-dependency-rules" }],
    //   errors: [
    //     {
    //       message:
    //         "",
    //     },
    //   ],
    // },
    // {
    //   code: "bad-hexagonal-dependency-rules/domain/UserRepository.ts",
    //   filename: `${__dirname}/paths/bad-hexagonal-dependency-rules/domain/UserRepository.ts`,
    //   options: [{ rootPath: "paths/bad-hexagonal-dependency-rules" }],
    //   errors: [
    //     {
    //       message:
    //         "",
    //     },
    //   ],
    // },
    // {
    //   code: "bad-hexagonal-dependency-rules/infrastructure/RedisUserRepository.ts",
    //   filename: `${__dirname}/paths/bad-hexagonal-dependency-rules/infrastructure/RedisUserRepository.ts`,
    //   options: [{ rootPath: "paths/bad-hexagonal-dependency-rules" }],
    //   errors: [
    //     {
    //       message:
    //         "",
    //     },
    //   ],
    // },
  ],
});
