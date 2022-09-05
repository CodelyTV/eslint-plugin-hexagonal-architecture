import fs from "fs";

export class HexagonalArchitectureDependencyRulesChecker {
  public complies(path: string): boolean {
    const file = fs.readFileSync(path);

    const importLines = file
      .toString()
      .split("\n")
      .filter((line) => line.includes("import"));

    console.log(importLines);

    return true;
  }
}
