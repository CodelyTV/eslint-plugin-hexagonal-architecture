import { UserRepository } from "../domain/UserRepository"

export class UserRenamer {
  constructor(private readonly repository: UserRepository) {}

  public rename(id: string, newName: string) {
    const user = this.repository.search(id);

    user.rename(newName);

    this.repository.save(user);
  }
}
