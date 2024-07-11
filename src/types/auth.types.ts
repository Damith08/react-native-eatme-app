export interface IAuthState {
  loading: boolean;
  rootUser?: IRootUser;
  accessToken?: string | null;
}

export interface IRootUser {
  id: number;
  name: string;
  token: string;
}
