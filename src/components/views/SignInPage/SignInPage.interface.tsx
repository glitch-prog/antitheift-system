export interface ISignInPage {
  name: string;
  email: string;
  password: string;
  handleOnChangeEmail: (text: React.SetStateAction<string>) => void;
  handleOnChangeName: (text: React.SetStateAction<string>) => void;
  handleOnChangePassword: (text: React.SetStateAction<string>) => void;
  signInUser: () => void;
}
