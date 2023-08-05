import { Module } from "@nestjs/common";
import { UserRepositoryService } from "./repository-user.service";

@Module({
  providers: [],
  exports: [UserRepositoryService],
})
export class RepositoryModule {}
