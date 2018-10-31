// @flow
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
  AsyncStorage
} from "react-native";

// import { Icon } from "native-base";

import Icon from "react-native-vector-icons/MaterialIcons";

import SanketImage from "../../../assets/Contacts/sanket.png";

import Menu, {
  MenuContext,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-menu";

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });

class Home extends Component {
  navigateTo = screen => {
    this.props.navigation.navigate(screen);
  };

  constructor(props) {
    super(props);
    this.state = {
      profiles: ds.cloneWithRows([])
    };
  }

  async componentWillMount() {
    try {
      await AsyncStorage.getItem("@UbuntuProfile", (err, result) => {
        if (result) {
          console.log(result);
          this.setState({
            profiles: ds.cloneWithRows(JSON.parse(result))
          });
        }
        console.log(err);
      });
    } catch (error) {
      console.log(error);
    }
  }

  renderPersonRow(person) {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("Feedback", {
          id: person.id
        })}
      >
        <View style={styles.listItemContainer}>
          <View style={styles.iconContainer}>
            <Image
              source={SanketImage}
              style={styles.initStyle}
              resizeMode="contain"
            />
          </View>
          <View style={styles.callerDetailsContainer}>
            <View style={styles.callerDetailsContainerWrap}>
              <View style={styles.nameContainer}>
                <Text style={{ fontWeight: "bold" }}>
                  {person.username}
                </Text>
              </View>
              <View style={styles.dateContainer}>
                <Text style={{ fontSize: 11 }}>
                  {person.time}
                </Text>
              </View>
            </View>
            <View style={styles.messageContainer}>
            {person.message ? <Icon
                name="done-all"
                color={"#075e54"}
                size={15}
                style={{ padding: 0 }}
              /> : <View/>}

              <Text
                numberOfLines={1}
                style={{ flex: 1, fontSize: 12, color: "#777" }}
              >
                {person.message}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <MenuContext style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.leftHeaderContainer}>
            <Menu
              onSelect={value => alert(`User selected the number ${value}`)}
            >
              <MenuTrigger>
                <Icon
                  name="more-vert"
                  color="#fff"
                  size={23}
                  style={{ padding: 5 }}
                />
              </MenuTrigger>
              <MenuOptions>
                <MenuOption value={1}>
                  <Text>Refresh</Text>
                </MenuOption>
                <MenuOption value={2}>
                  <Text>Status</Text>
                </MenuOption>
                <MenuOption value={3}>
                  <Text>Settings</Text>
                </MenuOption>
              </MenuOptions>
            </Menu>
          </View>
          <View style={styles.rightHeaderContainer}>
            <Text style={styles.logoText}>Ubuntu</Text>
          </View>
        </View>
        <View style={styles.contentContainer}>
          <ListView
            initialListSize={5}
            enableEmptySections={true}
            dataSource={this.state.profiles}
            renderRow={person => {
              return this.renderPersonRow(person);
            }}
          />
        </View>
      </MenuContext>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    height: 24
  },
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#075e54",
    alignItems: "center",
    paddingRight: 5,
    paddingLeft: 5
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
    flex: 7
  },
  logoText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    alignItems: "flex-start",
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

export default Home;
