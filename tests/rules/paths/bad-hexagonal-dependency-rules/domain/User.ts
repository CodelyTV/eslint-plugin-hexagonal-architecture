import { RenameUserCommandHandler } from "../application/RenameUserCommandHandler"

const handler = new RenameUserCommandHandler();

export class User {
  constructor(private readonly id: string, private name: string) {}

  rename(newName: string) {
    this.name = newName;
  }
}
