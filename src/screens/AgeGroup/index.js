// @flow
import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions, AsyncStorage } from "react-native";

import { ListItem, Left, Right, Radio, Content } from "native-base";
import { Toast } from "native-base";

import { saveData } from "../../utils/index";

import CustomButton from "../../components/Button";

const { width, height } = Dimensions.get("window");

let ageGroups = [{
  id: "0001",
  group: "18 - 25"
}, {
  id: "0002",
  group: "25 - 40"
}, {
  id: "0003",
  group: "40 - 60"
}, {
  id: "0004",
  group: "60 and above"
}];

export default class AgeGroup extends Component {
  navigateTo = screen => {
    this.props.navigation.navigate(screen);
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedAge: "",
      profile: [{}],
      profileType: ""
    };
  }

  continue = () => {
    const { selectedAge } = this.state;
    if (!selectedAge) {
      Toast.show({
        text: "Please Select an age group",
        buttonText: "Okay",
        duration: 3000,
        position: "top"
      });
    } else {
      let { profile } = this.state;
      if (this.state.profileType === "new") {
        profile[profile.length - 1].ageGroup = ageGroups.filter(ageGroup => ageGroup.id === selectedAge)[0].group;
      } else {
        profile[0].ageGroup = ageGroups.filter(ageGroup => ageGroup.id === selectedAge)[0].group;
      }
      saveData(JSON.stringify(profile), "@UbuntuKeyName", this.props.navigation, "BloodGroup", this.state.profileType);
    }
  };

  async componentWillMount() {
    const { navigation } = this.props;
    const profile = navigation.getParam("type", "");
    if (profile === "new") {
      ageGroups = [{
        id: "0005",
        group: "0 - 8"
      },{id: "0001",
      group: "9 - 17"},{
        id: "0001",
        group: "18 - 25"
      }, {
        id: "0002",
        group: "25 - 40"
      }, {
        id: "0003",
        group: "40 - 60"
      }, {
        id: "0004",
        group: "60 and above"
      }];
    }
    this.setState({ profileType: profile });
    try {
      await AsyncStorage.getItem("@UbuntuProfile", (err, result) => {
        if (result) {
          console.log(result);
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

  selectAge = (ageGroup) => {
    this.setState({ selectedAge: ageGroup.id });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.rightHeaderContainer}>
          <Text style={styles.logoText}>Ubuntu</Text>
        </View>
        <View style={styles.contentContainer}>
          <Text style={{ fontSize: 16, textAlign: "center" }} > Please Select Appropriate Age Group </Text>
          <Content>
            { ageGroups.map(ageGroup => <ListItem key={ageGroup.id} >
            <Left>
              <Text >{ageGroup.group}</Text>
            </Left>
            <Right>
              <Radio selected={ageGroup.id === this.state.selectedAge} onPress={() => this.selectAge(ageGroup)} />
            </Right>
          </ListItem> ) }
          </Content>
        </View>
        <View style={styles.bottomButton}>
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
    marginTop: 10,
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
