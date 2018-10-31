// @flow
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";

import CustomButton from "../../components/Button";
import Wakanda from "../../assets/logo.png";

const { width, height } = Dimensions.get("window");

export default class WelcomePage extends Component {
  navigateTo = screen => {
    this.props.navigation.navigate(screen);
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  continue = () => {
    this.props.navigation.navigate("PhoneNumber");
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.rightHeaderContainer}>
          <Text style={styles.logoText}>Ubuntu</Text>
        </View>
        <View style={styles.contentContainer}>
        <Image source={Wakanda}  style={{ width: 100, height: 100 }} />
          <Text> Welcome To Ubuntu, Your health is our primary concern </Text>
        </View>
          <View style={styles.bottomButton} >
          <CustomButton buttonText={"Continue"} style={styles.buttonStyle} onConfirm={this.continue} />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    height: 24
  },
  leftHeaderContainer: {
    alignItems: "flex-start",
    flexDirection: "row"
  },
  rightHeaderContainer: {
    flex: 1,
    backgroundColor: "#075e54",
    alignItems: "center",
    justifyContent: "center"
  },
  bottomButton: {
    alignSelf: "center",
    marginBottom: 5,
    flexDirection: "row",
    bottom: 0,
  },
  contentContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonStyle: {
    padding: 10,
    backgroundColor: "#075e54",
    borderRadius: 5,
    width: width - 10
  },
  logoText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 10
  },
  listItemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-start"
  },
  callerDetailsContainer: {
    flex: 4,
    justifyContent: "center",
    borderBottomColor: "rgba(92,94,94,0.5)",
    borderBottomWidth: 0.25
  },
  callerDetailsContainerWrap: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row"
  },
  nameContainer: {
    alignItems: "flex-start",
    flex: 1
  },
  dateContainer: {
    alignItems: "flex-end"
  },
  initStyle: {
    borderRadius: 30,
    width: 60,
    height: 60
  },
  messageContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start"
  }
});

