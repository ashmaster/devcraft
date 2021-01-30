import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Dimensions,
  Image
} from "react-native";
import Colors from "../constants/color";
import { Ionicons } from "@expo/vector-icons";
export default class Search extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.primary,
          paddingTop: 40,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            width: Dimensions.get("window").width,
          }}
        >
          <View style={styles.searchSection}>
            <Ionicons
              style={styles.searchIcon}
              name="search"
              size={20}
              color="#000"
            />
            <TextInput
              style={styles.textInput}
              placeholder="Search"
              onChangeText={(searchString) => {
                this.setState({ searchString });
              }}
              underlineColorAndroid="transparent"
            />
          </View>
              <Image source = {require('../images/Saly-17.png')} resizeMode="center" style = {{width:200}}/>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  searchSection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
  },
  searchIcon: {
    padding: 10,
  },
  textInput: {
    backgroundColor: Colors.textPrimary,
    borderColor: "#ccc",
    elevation: 1,
    color: Colors.primary,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    height: 45,
    fontSize: 14,
    paddingLeft: 15,
    width: "70%",
  },
});
