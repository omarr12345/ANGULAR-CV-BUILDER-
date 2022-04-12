export class User {
  email: any;
  constructor(
    public name: string,
    public password: string,
    public rememberMe: Boolean
  ) {}
}
