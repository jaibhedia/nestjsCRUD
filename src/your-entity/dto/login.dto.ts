// src/auth/dto/login.dto.ts
export class LoginDto {
    email!: string;
    password!: string;
    userId!: string;  // Add userId if it's required in the payload
  }
  