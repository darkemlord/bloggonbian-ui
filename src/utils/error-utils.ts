export type ErrorType = {
  response?: {
    data?: {
      error: string;
    };
    status?: number;
  };
};
