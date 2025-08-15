import { User } from "./user";

export type LoginParams = {
  email: string;
  password: string;
};

export type LoginResponse = {
  statusCode: number;
  value: {
    statusCode: number;
    message: "string";
    value: {
      user: User;
      token: string;
    } | null;
  };
};

export type VerifyParams = {
  key: string;
  code: string;
  emailAddress: string;
};

export type ResetPasswordParams = {
  email: string;
};

export type ChangePasswordParams = {
  password: string;
  newPassword: string;
};

export type UpdateProfileParams = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
};

export type GoogleLoginParams = {
  idToken: string;
};

export type GenerateResetPasswordLinkParams = {
  email: string;
};

export type CompleteRegistrationParams = {
  key: string;
  code: string;
  emailAddress: string;
};
