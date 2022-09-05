import { RedisUserRepository } from "../infrastructure/RedisUserRepository"

export class UserRenamer {
  constructor(private readonly repository: RedisUserRepository) {}

  public rename(id: string, newName: string) {
    const user = this.repository.search(id);

    user.rename(newName);

    this.repository.save(user);
  }
}
