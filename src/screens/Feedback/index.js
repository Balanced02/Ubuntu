"use strict";

import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Image,
  AsyncStorage,
  ListView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  View
} from "react-native";

const { width, height } = Dimensions.get("window");

import Icon from "react-native-vector-icons/MaterialIcons";

import { saveData, abujaDisease } from "../../utils/index";

let messages = [];

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });

export default class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msgTxt: "",
      datasource: ds.cloneWithRows(messages),
      id: ""
    };
  }

  _onSendMsg = () => {
    const { id } = this.state;
    messages.push({
      id,
      sent: true,
      msgTxt: this.state.msgTxt
    });

    this.setState({
      datasource: ds.cloneWithRows(messages),
      msgTxt: ""
    });
    this.getReply(this.state.msgTxt);
  };

  async componentWillMount() {
    const { navigation } = this.props;
    const id = navigation.getParam("id", 0);
    this.setState({
      id
    });
    // AsyncStorage.removeItem(id);
    try {
      await AsyncStorage.getItem(
        typeof id === "string" ? id : JSON.stringify(id),
        (err, result) => {
          if (result) {
            messages = JSON.parse(result);
            console.log(messages);
            this.setState({
              dataSource: ds.cloneWithRows(JSON.parse(result))
            });
          }
          this.getReply("Hello");
          console.log(err);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  getReply = (msgTxt) => {
    const { id } = this.state;
    msgTxt = msgTxt.toLocaleLowerCase();
    if (msgTxt.includes("hello")) {
      if (!messages.length) {
        messages.push({
          id,
          sent: false,
          msgTxt:
          "Welcome to Ubuntu, your health is our concern"
        });
      } else {
        let lastMessage = messages[messages.length - 1];
        console.log(lastMessage);
        if (lastMessage.msgTxt.includes("detect") === false ) {
          messages.push({
            id,
            sent: false,
            msgTxt:
              "Welcome back, I'll send you current situation in your location. \n You can also send some keywords like: \n Help: to list all keywords \n Outbreak 'location': To get outbreaks in a particular location e.g. Outbreak Abuja"
          });
          const disease = abujaDisease[0];
          messages.push({
            id,
            sent: false,
            msgTxt:
              `I detect you're in Abuja, As at ${disease.Year}, there was an outbreak of ${disease.Disease} at ${disease.Lga} of ${disease.State}`
          });
        }
      }
    } if (msgTxt.includes("outbreak")) {
      let msgArray = msgTxt.split(" ");
      if (msgArray.length === 1) {
        messages.push({
          id,
          sent: false,
          msgTxt:
            "Please send Outbreak and Location. For Example, Outbreak Abuja"
        });
      } else {
        const disease = abujaDisease[0];
        messages.push({
          id,
          sent: false,
          msgTxt: `As at ${disease.Year}, there was an outbreak of ${disease.Disease} at ${disease.Lga} of ${disease.State}.`
        });
      }
    }
    if (msgTxt.includes("check") || msgTxt.includes("care") || msgTxt.includes("centres")) {
      messages.push({
        id,
        sent: false,
        msgTxt: "I'm doing a background check for health care around your location. Won't be long I promise"
      });
      messages.push({
        id,
        sent: false,
        msgTxt: "Based on your location, the closest health care is National Hospital, Wuse II, Abuja, Send More for other health care centres"
      });
    }

    if (msgTxt.includes("more")) {
      messages.push({
        id,
        sent: false,
        msgTxt:
          "Other health care centres are \nAsokoro General Hospital, Asokoro \n "
      });
    }

    if (msgTxt.includes("thanks")) {
      messages.push({
        id,
        sent: false,
        msgTxt:
          "No problems, I'll always keep you updated. Would be your friend always. Wakanda Forever"
      });
    }

    this.setState({
      datasource: ds.cloneWithRows(messages),
      msgTxt: ""
    });
    saveData(
      JSON.stringify(messages),
      typeof id === "string" ? id : JSON.stringify(id)
    );
  };

  render() {
    return (
      <View style={styles.keyboard}>
        <View style={styles.headerContainer}>
          <View style={styles.leftHeaderContainer}>
            <Icon
              name="arrow-back"
              color="#fff"
              size={23}
              style={{ padding: 5 }}
              onPress={() => this.props.navigation.goBack()}
            />
            <Image
              source={require("../../../assets/Contacts/sanket.png")}
              style={styles.initStyle}
              resizeMode="contain"
            />
            <Text style={styles.nameText}>
              {this.props.name}
            </Text>
          </View>
        </View>
        <ListView
          ref={ref => (this.listView = ref)}
          onContentSizeChange={(contentWidth, contentHeight) => {
            this.listView.scrollTo({
              y: contentHeight,
              animated: true
            });
          }}
          renderRow={msg => this._renderEachMsg(msg)}
          contentContainerStyle={{ justifyContent: "flex-end" }}
          style={{ flex: 1 }}
          enableEmptySections
          dataSource={this.state.datasource}
        />
        <View style={styles.footerContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Type a message..."
              placeholderTextColor="#EDEDED"
              value={this.state.msgTxt}
              onChangeText={msgTxt => this.setState({ msgTxt })}
              style={styles.input}
              returnKeyType="send"
              autoCapitalize="sentences"
              autoCorrect={true}
            />
          </View>
          <TouchableOpacity
            onPress={this._onSendMsg}
            style={styles.sendIconContainer}
          >
            <Icon name="send" color="#075e54" size={25} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _renderEachMsg(msg) {
    if (msg.sent === false) {
      return (
        <View style={styles.eachMsg}>
          <Image
            source={require("../../../assets/Contacts/sanket.png")}
            style={styles.userPic}
          />
          <View style={styles.msgBlock}>
            <Text style={styles.msgTxt}>
              {msg.msgTxt}
            </Text>
          </View>
        </View>
      );
    } else {
      return (
        <View style={styles.rightMsg}>
          <View style={styles.rightBlock}>
            <Text style={styles.rightTxt}>
              {msg.msgTxt}
            </Text>
          </View>
          <Image
            source={require("../../../assets/Contacts/sanket.png")}
            style={styles.userPic}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: height
  },
  headerContainer: {
    height: 65,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#075e54"
  },
  leftHeaderContainer: {
    alignItems: "flex-start",
    flexDirection: "row"
  },
  rightHeaderContainer: {
    alignItems: "flex-end",
    flexDirection: "row"
  },
  contentContainer: {
    backgroundColor: "#BEEEBD"
  },
  nameText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
    paddingLeft: 7
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginLeft: 10,
    borderRadius: 5,
    alignSelf: "flex-end",
    padding: 10,
    height: 40,
    width: width - 20,
    margin: 10,
    shadowColor: "#3d3d3d",
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1
    }
  },
  logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "flex-start",
    marginLeft: 10
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    marginLeft: 10,
    borderRadius: 5
  },
  input: {
    flex: 1,
    height: 50,
    borderBottomColor: "blue",
    fontSize: 16
  },
  icon: {
    alignSelf: "center",
    backgroundColor: "rgba(0,0,0,0)"
  },
  initStyle: {
    borderRadius: 40,
    width: 35,
    height: 35
  },
  sendIconContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    margin: 5,
    width: 50,
    backgroundColor: "#fff",
    height: 50,
    alignSelf: "center"
  },
  listItemContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  eachMsg: {
    flexDirection: "row",
    alignItems: "flex-end",
    margin: 5
  },
  msgBlock: {
    width: 220,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    padding: 10,
    shadowColor: "#3d3d3d",
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1
    }
  },
  msgTxt: {
    fontSize: 15,
    color: "#555",
    fontWeight: "400"
  },
  userPic: {
    height: 40,
    width: 40,
    margin: 5,
    borderRadius: 20
  },
  rightMsg: {
    flexDirection: "row",
    alignItems: "flex-end",
    margin: 5,
    alignSelf: "flex-end"
  },
  rightBlock: {
    width: 220,
    borderRadius: 5,
    backgroundColor: "#97c163",
    padding: 10,
    shadowColor: "#3d3d3d",
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1
    }
  },
  rightTxt: {
    fontSize: 15,
    color: "#202020",
    fontWeight: "400"
  },
  keyboard: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#BEEEBD"
  }
});
