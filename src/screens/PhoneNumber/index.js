// @flow
import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, TextInput, Keyboard } from "react-native";

import { Toast } from "native-base";

import CustomButton from "../../components/Button";

import { saveData } from "../../utils/index";

const { width, height } = Dimensions.get("window");

export default class PhoneNumber extends Component {
  navigateTo = screen => {
    this.props.navigation.navigate(screen);
  };

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: ""
    };
  }

  continue = () => {
    Keyboard.dismiss();
    const { phoneNumber } = this.state;
    if (!phoneNumber) {
      Toast.show({
        text: "Please provide phone number",
        buttonText: "Okay",
        duration: 3000,
        position: "top"
      });
    } else if (phoneNumber.length !== 11) {
      Toast.show({
        text: "Provide a valid phone number",
        buttonText: "Okay",
        duration: 3000,
        position: "top"
      });
    } else {
      let profile = [{ phoneNumber, id: Date.now() + phoneNumber }];
      saveData(
        JSON.stringify(profile),
        "@UbuntuProfile",
        this.props.navigation,
        "ProfileSetup"
      );
    }
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.rightHeaderContainer}>
          <Text style={styles.logoText}>Ubuntu</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.headerText}>
            {" "}Phone Number Verification Process{" "}
          </Text>
          <Text> Plese Provide a phone number </Text>
          <View>
            <TextInput
              placeholder="08188274143"
              placeholderTextColor="#EDEDED"
              onSubmitEditing={Keyboard.dismiss}
              value={this.state.phoneNumber}
              onChangeText={phoneNumber => this.setState({ phoneNumber })}
              style={styles.input}
              keyboardType="phone-pad"
              autoCapitalize="sentences"
              autoCorrect={true}
            />
          </View>
        </View>
        <View style={styles.bottomButton}>
          <CustomButton
            buttonText={"Continue"}
            style={styles.buttonStyle}
            onConfirm={this.continue}
          />
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
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 20
  },
  input: {
    marginTop: 20,
    height: 50,
    borderBottomColor: "blue",
    fontSize: 16,
    width: 120
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
    bottom: 0
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
