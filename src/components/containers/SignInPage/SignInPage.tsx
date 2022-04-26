import {signInWithEmailAndPassword} from 'firebase/auth';
import React, {useState} from 'react';
import {auth} from '../../../firebase/firebase-config';
import {SignInPageView} from '../../views/SignInPage/SignInPage';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const SignInPageContainer = ({navigation}: any) => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const signInUser = () => {
    const navigateToMainPage = () => navigation.navigate('main');

    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user);
        navigateToMainPage();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleOnChangeName = (text: React.SetStateAction<string>) =>
    setName(text);

  const handleOnChangeEmail = (text: React.SetStateAction<string>) =>
    setEmail(text);

  const handleOnChangePassword = (text: React.SetStateAction<string>) =>
    setPassword(text);
  return (
    <SignInPageView
      name={name}
      email={email}
      password={password}
      signInUser={signInUser}
      handleOnChangeName={handleOnChangeName}
      handleOnChangeEmail={handleOnChangeEmail}
      handleOnChangePassword={handleOnChangePassword}
    />
  );
};
