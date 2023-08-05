import { Injectable } from "@nestjs/common";
import { UserRepository } from "@cfxstore/repository";

@Injectable()
export class UserRepositoryService extends UserRepository {}
