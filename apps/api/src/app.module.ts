import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoggerModule } from './logger/logger.module';
import { RepositoryModule } from './repository/repository.module';

@Module({
  imports: [LoggerModule, RepositoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
