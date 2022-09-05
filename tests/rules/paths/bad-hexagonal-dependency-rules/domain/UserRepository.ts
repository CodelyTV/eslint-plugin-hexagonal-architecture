import { UserRenamer } from "../application/UserRenamer"
import { RedisUserRepository } from "../infrastructure/RedisUserRepository"
import { User } from "./User"

const renamer = new UserRenamer(new RedisUserRepository());

export interface UserRepository {
   search(id: string): User

   save(id: User): void
}
