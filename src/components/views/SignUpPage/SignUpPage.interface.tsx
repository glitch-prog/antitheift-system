export interface ISignUpPage {
  name: string;
  email: string;
  password: string;
  handleOnChangeEmail: (text: React.SetStateAction<string>) => void;
  handleOnChangeName: (text: React.SetStateAction<string>) => void;
  handleOnChangePassword: (text: React.SetStateAction<string>) => void;
  signUpUser: () => void;
}
