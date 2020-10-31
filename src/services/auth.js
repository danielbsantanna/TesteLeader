import { AsyncStorage } from 'react-native';

const TOKEN_KEY = 'token';

export const onSignIn = (x) => AsyncStorage.setItem(TOKEN_KEY, x);

export const onSignOut = () => AsyncStorage.removeItem(TOKEN_KEY);

export const isSignedIn = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  return (token !== null) ? true : false;
};