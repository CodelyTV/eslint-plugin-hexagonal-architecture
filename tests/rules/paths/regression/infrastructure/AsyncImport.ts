export class AsyncImport {
  async test(): Promise<string[]> {
    const {moocContainer} = await import(
      "@codely/backend-mooc-context/src/shared/infrastructure/dic/moocContainer"
    );
  }
}
