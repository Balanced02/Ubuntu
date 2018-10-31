// @flow
import React, { Component } from "react";
import { ImageBackground, AsyncStorage } from "react-native";

import { NavigationActions } from "react-navigation";
import {
  Container,
  Content,
  Text,
  Icon,
  ListItem,
  Thumbnail,
  View
} from "native-base";
import { Grid, Col } from "react-native-easy-grid";

import styles from "./style";
const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Login" })]
});

const menuItems = [
  {
    id: 1,
    route: "Home",
    name: "HOME"
  },
];
class SideBar extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Container style={{
        backgroundColor: "#F9F9F9"
      }} >
          <Content style={styles.drawerContent}>
            {menuItems.map(item => (
            <ListItem
              key={item.id}
              button
              onPress={() => {
                if (item.name === "LOG OUT") {
                  try {
                    AsyncStorage.removeItem("@ADPMobileToken");
                    navigation.navigate("Splash");
                  } catch (error) {
                    console.log(error);
                  }
                }
                navigation.navigate(item.route);
              }}
              iconLeft
              style={styles.links}
            >
              <Text style={styles.linkText}>{item.name}</Text>
            </ListItem>
            ))}
          </Content>
      </Container>
    );
  }
}

export default SideBar;
