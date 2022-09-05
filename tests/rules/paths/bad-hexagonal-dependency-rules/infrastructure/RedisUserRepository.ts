import { RenameUserCommandHandler } from "../application/RenameUserCommandHandler"
import { User } from "../domain/User"
import { UserRepository } from "../domain/UserRepository"

const handler = new RenameUserCommandHandler();

export class RedisUserRepository implements UserRepository {
  save(id: User): void {}

  search(id: string): User {
    return new User(id, "name");
  }
}
