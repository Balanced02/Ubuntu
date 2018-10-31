const React = require("react-native");

const { Platform } = React;

const primary = require("../../theme/variables/commonColor").brandPrimary;

export default {
  links: {
    paddingTop: Platform.OS === "android" ? 18 : 20,
    paddingBottom: Platform.OS === "android" ? 18 : 20,
    paddingLeft: Platform.OS === "android" ? 0 : 10,
    borderBottomWidth: Platform.OS === "android" ? 0 : 0,
    borderBottomColor: "#C4C4C4",
  },
  linkText: {
    paddingLeft: 15,
    color: '#000000',
    fontSize: 16
  },
  logoutContainer: {
    padding: 30,
    paddingTop: 0
  },
  logoutbtn: {
    paddingTop: 30,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#fff"
  },
  background: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: primary
  },
  drawerContent: {
    paddingTop: Platform.OS === "android" ? 20 : 30
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: Platform.OS === "android" ? 40 : 20
  }
};
