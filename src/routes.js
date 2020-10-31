import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Login from './components/Login';
import DashBoard from './components/Dashboard';
import Splash from './components/Splash';

const appSplash = createStackNavigator({
    Splash: {
        screen: Splash,
        navigationOptions: {
            headerShown: false,
          }
    }
});

export const SplashApp = createAppContainer(appSplash);

const appOut = createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      }
    },
  })
export const SignedOutRoutes = createAppContainer(appOut);


const appIn = createStackNavigator({
    DashBoard: {
    screen: DashBoard,
    navigationOptions: {
      title: "Dashboard"
    }
  },
});

export const SignedInRoutes = createAppContainer(appIn);

export const createRootNavigator = (signedIn = false) => {
    return createAppContainer(createStackNavigator({
      SignedIn: { screen: SignedInRoutes },
      SignedOut: { screen: SignedOutRoutes },
      Splash: { screen: SplashApp}
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut",
      navigationOptions: {
        gesturesEnabled: false
      }
    }));
  };