const BLOG_ROUTES = {
  signUp: "/register",
  login: "/login",
  user: "/user",
  currentUser: "/me",
};

export enum AuthType {
  LOGIN = "login",
  SIGN_UP = "register",
}

export default BLOG_ROUTES;
