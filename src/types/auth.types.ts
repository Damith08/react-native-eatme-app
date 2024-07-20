export type RegisterFormData = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  address: string;
  contact: string;
};

export type LoginFormData = {
  email: string;
  password: string;
};

export type CheckEmailData = {
  email: string;
};

export type ResetPassword = {
  password: string;
};
export interface IAuthSlice {
  loading: boolean;
  accessToken?: string | null;
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  address: string;
  contact: string;
  updatedAt: string;
  createdAt: string;
}

export interface IToken {
  token: string;
}
