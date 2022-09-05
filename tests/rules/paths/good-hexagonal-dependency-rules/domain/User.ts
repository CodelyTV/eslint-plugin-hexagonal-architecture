export class User {
  constructor(private readonly id: string, private name: string) {}

  rename(newName: string) {
    this.name = newName;
  }
}
