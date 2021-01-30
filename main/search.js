import * as React from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground
} from "react-native";
import Colors from "../constants/color";
import { Ionicons } from "@expo/vector-icons";
export default class Search extends React.Component {
  render() {
    const interests = [
        "Web Development",
        "Data Science",
        "App Design",
        "Deep Learning",
        "Competitive Programming",
        "Machine Learning",
        "Backend",
        "Frontend",
        "Fullstack",
        "Graphic Design",
        "Photography",  
      ];
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
            alignItems: "center",
            justifyContent:'center',
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
          <Image
            source={require("../images/Saly-17.png")}
            resizeMode="center"
            style={{ width: 400,height:200 }}
          />
          <ScrollView horizontal contentContainerStyle = {{marginHorizontal:40}}>
              {interests.map((item,index) => {
                  return(
                    <View
                    style={{
                      width: 170,
                      height: 240,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View style={styles.categoryCard}>
                      <Image
                        source={require("../images/Group.png")}
                        style={{
                          width: 100,
                          height: 100,
                          position: "absolute",
                          top: -20,
                          alignSelf: "center",
                        }}
                      />
                      <ImageBackground
                        source={require("../images/interest.png")}
                        style={{
                          width: 148,
                          height: 100,
                          justifyContent: "flex-end",
                        }}
                        imageStyle={{
                          borderBottomLeftRadius: 15,
                          borderBottomRightRadius: 15,
                        }}
                        resizeMode="cover"
                      >
                        <Text
                          style={{
                            textAlign: "center",
                            color: Colors.textPrimary,
                            marginBottom: 10,
                            fontWeight: "bold",
                          }}
                        >
                            {item}
                        </Text>
                      </ImageBackground>
                    </View>
                    
                  </View>
                  )
              })}
          
            </ScrollView>
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
  categoryCard: {
    height: 150,
    width: 150,

    borderRadius: 15,
    backgroundColor: Colors.secondary,
    justifyContent: "flex-end",
    elevation: 2,
    paddingRight: 2,
  },
});
