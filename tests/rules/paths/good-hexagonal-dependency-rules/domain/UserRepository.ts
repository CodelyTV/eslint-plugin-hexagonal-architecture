import { User } from "./User"

export interface UserRepository {
   search(id: string): User

   save(id: User): void
}
