import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
// import { auth } from "../../../firebase/firebase-config";
import { SignUpPageView } from "../../views/SignUpPage/SignUpPage";
import auth from "@react-native-firebase/auth";
// import {createNativeStackNavigator} from '@react-navigation/native-stack';

export const SignUpPageContainer = ({ navigation }: any) => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    console.log(user);
    if (initializing) setInitializing(false);
  }

  const signUpUser = async () => {
    const navigateToMainPage = () => navigation.navigate("main");
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User account created & signed in!");
        navigateToMainPage();
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  };

  // const signUpUser = () => {
  //   const navigateToMainPage = () => navigation.navigate('register');
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then(re => {
  //       console.log(re);
  //       navigateToMainPage();
  //     })
  //     .catch(error => console.log(error));
  // };
  // onAuthStateChanged();
  const handleOnChangeName = (text: React.SetStateAction<string>) =>
    setName(text);

  const handleOnChangeEmail = (text: React.SetStateAction<string>) =>
    setEmail(text);

  const handleOnChangePassword = (text: React.SetStateAction<string>) =>
    setPassword(text);
  return (
    <SignUpPageView
      name={name}
      email={email}
      password={password}
      signUpUser={signUpUser}
      handleOnChangeName={handleOnChangeName}
      handleOnChangeEmail={handleOnChangeEmail}
      handleOnChangePassword={handleOnChangePassword}
    />
  );
};
