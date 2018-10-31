// @flow
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  AsyncStorage,
  Keyboard
} from "react-native";

import CustomButton from "../../components/Button";
import { retrieveData, saveData } from "../../utils/index";

import { Toast } from "native-base";

const { width, height } = Dimensions.get("window");

export default class PhoneNumber extends Component {
  navigateTo = screen => {
    this.props.navigation.navigate(screen);
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      profile: {}
    };
  }

  continue = () => {
    Keyboard.dismiss();
    const { username } = this.state;
    if (!username) {
      Toast.show({
        text: "Please provide a username",
        buttonText: "Okay",
        duration: 3000,
        position: "top"
      });
    } else {
      let { profile } = this.state;
      profile[0].username = username;
      saveData(JSON.stringify(profile), "@UbuntuProfile", this.props.navigation, "AgeGroup");
    }
  };

  async componentWillMount() {
    try {
      await AsyncStorage.getItem("@UbuntuProfile", (err, result) => {
        if (result) {
          this.setState({
            profile: JSON.parse(result)
          });
        }
        console.log(err);
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.rightHeaderContainer}>
          <Text style={styles.logoText}>Ubuntu</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={{ fontSize: 16 }}>
            {" "}Provide a name to interact with you{" "}
          </Text>
          <View>
            <TextInput
              placeholder="Type a name"
              placeholderTextColor="#698C68"
              value={this.state.username}
              onChangeText={username => this.setState({ username })}
              style={styles.input}
              keyboardType="default"
              onSubmitEditing={Keyboard.dismiss}
              returnKeyType="send"
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
    textAlign: "center",
    fontSize: 16,
    width: 160,
    color: "#698C68"
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
    marginRight: 5,
    marginLeft: 5,
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
