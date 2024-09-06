import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    { userId: 1, username: 'testuser', password: 'password123' },
  ];

  async findOne(username: string): Promise<any> {
    return this.users.find(user => user.username === username);
  }
}
