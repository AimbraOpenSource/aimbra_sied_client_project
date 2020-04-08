import { UserRole } from './user-role.model';

export class UserModel {
  public id: number;
  public username: string;
  public password: string;
  public email: string;
  public role: UserRole;
  public createdAt: Date;
  public updatedAt: Date;
  public lastAccessIn: Date;
}
