<p align="center">
  <a href="https://codely.com">
    <img src="https://user-images.githubusercontent.com/10558907/170513882-a09eee57-7765-4ca4-b2dd-3c2e061fdad0.png" width="300px" height="92px"/>
  </a>
</p>

<h1 align="center">
  🎯 Codely's ESLint Hexagonal Architecture plugin
</h1>

<p align="center">
    <a href="https://github.com/CodelyTV"><img src="https://img.shields.io/badge/CodelyTV-OS-green.svg?style=flat-square" alt="Codely Open Source"/></a>
    <a href="https://pro.codely.com"><img src="https://img.shields.io/badge/CodelyTV-PRO-black.svg?style=flat-square" alt="CodelyTV Courses"/></a>
</p>

<p align="center">
  A plugin that helps you to enforce hexagonal architecture best practises. Valid for your JavaScript or TypeScript projects 🤟
  <a href="https://github.com/CodelyTV/eslint-config-codely/stargazers">Stars are welcome 😊</a>
</p>

## 🤔 What it does

- **Enforce conventional folder naming**: only `domain`, `application` and `infrastructure` are valid folder names (under the glob pattern you specify)
- **Prevent imports from restricted layers**: 
  - `domain` can only import files from the same folder
  - `application` can only import from `application` and `domain`
  - `infrastructure` can import from `application`, `domain` and `infrastructure`


<p align="center">
  <img src="https://user-images.githubusercontent.com/1331435/188609417-1d51b243-613e-4b87-8c82-b429d8ef5841.png" alt="hexagonal-dependency-rule" width="360" >
</p>

## 👀 How to use

1. Install the dependency
   ```bash
   npm install --save-dev eslint-config-codely
   ```
2. Add the plugin to your `.eslintrc.js` file:
    ```js
    {
      plugins: ["hexagonal-architecture"],
    }
    ``` 
3. Enable the rule for the specific folders that will contain your logic using [ESLint's Glob Patterns overrides](https://eslint.org/docs/latest/user-guide/configuring/configuration-files#how-do-overrides-work):
    ```js
    {
      overrides: [
        {
          files: ["contexts/{backend,frontend}/*/src/**/*.ts"],
          rules: {
            "hexagonal-architecture/enforce": ["error"],
          },
        },
      ]
    }
    ```

## 👌 Codely Code Quality Standards

Publishing this package we are committing ourselves to the following code quality standards:

- 🤝 Respect **Semantic Versioning**: No breaking changes in patch or minor versions
- 🤏 No surprises in transitive dependencies: Use the **bare minimum dependencies** needed to meet the purpose
- 🎯 **One specific purpose** to meet without having to carry a bunch of unnecessary other utilities
- ✅ **Tests** as documentation and usage examples
- 📖 **Well documented ReadMe** showing how to install and use
- ⚖️ **License favoring Open Source** and collaboration
