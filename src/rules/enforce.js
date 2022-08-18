const path = require("path");

module.exports = function (context) {
  // const root = context.options[1];

  return {
    Program(node) {
      const filename = context.getFilename();
      const rootPath = context.options[0].rootPath;

      const hexagonalFolderPath = filename.split(rootPath)[1];

      const hexagonalFolder = hexagonalFolderPath.split("/")[1];

      console.log("hexagonalFolder", hexagonalFolder);

      if (!["application", "domain", "infrastructure"].includes(hexagonalFolder)) {
        context.report(
          node,
          "Folder '{{name}}' in path '{{path}}' does not match the Hexagonal Architecture naming convention",
          {
            name: hexagonalFolder,
            path: hexagonalFolderPath,
          }
        );
      }
    },
  };
};
