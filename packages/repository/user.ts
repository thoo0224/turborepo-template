import { User, client } from "@cfxstore/database";

export class UserRepository {
  async findAll(): Promise<User[]> {
    const result = await client.user.findMany();
    return result;
  }

  async findById(id: string): Promise<User | null> {
    const result = await client.user.findUnique({
      where: {
        id,
      },
    });

    return result;
  }
}
