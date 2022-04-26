import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {ISignInPage} from './SignInPage.interface';

export const SignInPageView = ({
  name,
  email,
  password,
  handleOnChangeEmail,
  handleOnChangeName,
  handleOnChangePassword,
  signInUser,
}: ISignInPage) => {
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

      <Button onPress={signInUser} title="sign up" />
    </View>
  );
};
