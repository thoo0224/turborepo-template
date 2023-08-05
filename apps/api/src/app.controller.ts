import { Controller, Get, Logger } from "@nestjs/common";
import { AppService } from "./app.service";
import { UserRepositoryService } from "./repository/repository-user.service";

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(
    private readonly appService: AppService,
    private readonly userRepository: UserRepositoryService
  ) {}

  @Get()
  getHello(): string {
    this.logger.debug("Test Messahge");
    this.logger.warn("Test Message");
    this.logger.error("Test Message");
    this.logger.verbose("Test Message");
    this.logger.log("Test Message");

    return this.appService.getHello();
  }
}
