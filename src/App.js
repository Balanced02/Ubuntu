// @flow
import React, { Component } from "react";
import {
  StackNavigator,
  DrawerNavigator,
  SwitchNavigator
} from "react-navigation";
import { Easing, Animated, AsyncStorage } from "react-native";
import { Root, Switch } from "native-base";
import Profile from "./screens/Profile/";
import Feedback from "./screens/Feedback";
import WelcomeScreen from "./screens/WelcomePage";
import PhoneNumber from "./screens/PhoneNumber";
import ProfileSetup from "./screens/ProfileSetup";
import AgeGroup from "./screens/AgeGroup";
import BloodGroup from "./screens/BloodGroup";
import Genotype from "./screens/Genotype";
import SplashScreen from "./screens/SplashScreen";
import NewProfile from "./screens/NewProfile";

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0]
      });

      return { transform: [{ translateX }] };
    }
  };
};


  const App = StackNavigator(
    {
      Home: { screen: Profile },
      Feedback: { screen: Feedback },
      WelcomeScreen: { screen: WelcomeScreen },
      PhoneNumber: { screen: PhoneNumber },
      ProfileSetup: { screen: ProfileSetup },
      AgeGroup: { screen: AgeGroup },
      BloodGroup: { screen: BloodGroup },
      Genotype: { screen: Genotype },
      SplashScreen: {screen: SplashScreen},
      NewProfile: { screen: NewProfile }
  },
  {
    index: 0,
    initialRouteName: "SplashScreen",
    headerMode: "none",
    transitionConfig
  }
);

export default class Setup extends Component {

  render() {
    return (
      <Root>
        <App />
      </Root>
    );
  }
}
