// @flow
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { style, buttonText, onConfirm } = this.props;
    return (
      <TouchableOpacity style={style ? style : styles.buttonStyle} onPress={onConfirm} >
        <Text style={styles.textStyle} >
          {buttonText}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    backgroundColor: "#075e54",
    borderRadius: 5
  },
  textStyle: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center"
  }
});
