export class AuthResponse {

  /**
   * Bearer authorisation token
   */
  token: string;

  /**
   * The name of authenticated user
   */
  username: string;


  constructor(token: string, username: string) {
    this.token = token;
    this.username = username;
  }
}
