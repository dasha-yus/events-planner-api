export enum Role {
  Admin = 'admin',
  User = 'user',
}

export type User = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  role: Role;
};

export interface IAuthenticate {
  readonly user: User;
  readonly token: string;
}
