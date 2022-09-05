import { User } from "../domain/User"
import { UserRepository } from "../domain/UserRepository"

export class RedisUserRepository implements UserRepository {
  save(id: User): void {}

  search(id: string): User {
    return new User(id, "name");
  }
}
