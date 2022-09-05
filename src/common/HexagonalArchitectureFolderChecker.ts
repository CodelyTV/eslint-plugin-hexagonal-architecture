export class HexagonalArchitectureFolderChecker {
  public complies(path: string): boolean {
    const layer = path.split("/")[1];

    return ["application", "domain", "infrastructure"].includes(layer);
  }

  public extractLayerFolder(path: string): string {
    return path.split("/")[1];
  }
}
