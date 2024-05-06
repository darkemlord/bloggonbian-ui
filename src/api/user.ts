export type AuthRequest = {
  email: string;
  password: string;
};

export type AuthResponse = {
  user: string;
  email: string;
  token: string;
};

export type CurrentUserResponse = {
  email: string;
};
