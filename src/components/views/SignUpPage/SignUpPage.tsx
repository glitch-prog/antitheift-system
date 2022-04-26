import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {ISignUpPage} from './SignUpPage.interface';

export const SignUpPageView = ({
  name,
  email,
  password,
  handleOnChangeEmail,
  handleOnChangeName,
  handleOnChangePassword,
  signUpUser,
}: ISignUpPage) => {
  return (
    <View>
      <TextInput
        placeholder="name"
        value={name}
        onChangeText={handleOnChangeName}
      />

      <TextInput
        placeholder="email"
        value={email}
        onChangeText={handleOnChangeEmail}
      />

      <TextInput
        placeholder="password"
        value={password}
        onChangeText={handleOnChangePassword}
      />

      <Button onPress={signUpUser} title="sign up" />
    </View>
  );
};
