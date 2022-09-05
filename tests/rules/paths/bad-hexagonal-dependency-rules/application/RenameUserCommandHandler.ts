import { UserRenamer } from "./UserRenamer"

export class RenameUserCommandHandler {
  constructor(private readonly renamer: UserRenamer) {}
}
