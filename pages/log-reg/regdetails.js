import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  BackHandler,
  Alert,
  Switch,
  TextInput,
  ActivityIndicator,
  ToastAndroid,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { StackActions, NavigationActions } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import Slider from "react-native-fluid-slider";
import axios from "axios";
import Colors from "../../constants/color";
import { ScrollView } from "react-native-gesture-handler";
export default class RegDet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      value: 18,
      mbg: "#fff",
      wbg: "#fff",
      micon: "#000",
      wicon: "#000",
      name: "",
      loading: false,
      gender: "Male",
      userId: "",
      current: "School",
      scrollPos: 1,
      interests: [],
    };
  }
  backAction = () => {
    Alert.alert("Exit App ?", "Are you sure you want to exit ?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel",
      },
      { text: "YES", onPress: () => BackHandler.exitApp() },
    ]);
    return true;
  };
  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }
  onValueChanged = (value) => this.setState({ value });
  mpress() {
    if (this.state.mbg == "#00688B") {
      this.setState({ mbg: "#fff", micon: "#000" });
    } else {
      this.setState({
        mbg: "#00688B",
        micon: "#fff",
        gender: "m",
        wbg: "#fff",
        wicon: "#000",
      });
    }
  }
  wpress() {
    if (this.state.wbg == "#00688B") {
      this.setState({ wbg: "#fff", wicon: "#000" });
    } else {
      this.setState({
        wbg: "#00688B",
        wicon: "#fff",
        gender: "f",
        mbg: "#fff",
        micon: "#000",
      });
    }
  }
  nextPress() {
    this.props.navigation.navigate("Main")
  }
  

  intSelect(item){
      let flag = false
      this.state.interests.map((it,index)=>{
          if(it===item)
            flag = true
      })
      if(flag == false){
        this.setState(prevState => {
            return {interests: [...prevState.interests,item]}
         })
         console.log(this.state.interests)
      }
      else{
        var filtered = this.state.interests.filter(function(value, index, arr){ 
            return value !== item;
        });
        this.setState({interests:filtered})
      }
      
  }
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
      <View style={styles.innerContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          ref={(scroll) => (this.scrollview = scroll)}
          scrollEnabled={false}
        >
          {/*
          <View style={{ flex: 1, width: Dimensions.get("window").width }}>
            <View
              style={{
                justifyContent: "center",
                flex: 2,
                marginLeft: "15%",
                paddingRight: "20%",
              }}
            >
              <Text
                style={{
                  fontSize: 36,
                  fontWeight: "bold",
                  color: Colors.textPrimary,
                }}
              >
                Just two more steps to go...
              </Text>
              <Text style={{ fontSize: 24, color: Colors.textPrimary }}>
                Provide your personal details
              </Text>
            </View>
            <View
              style={{
                flex: 5,
                alignItems: "center",
                width: Dimensions.get("window").width,
              }}
            >
              <View style={styles.card}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TextInput
                    onChangeText={(t) => this.setState({ name: t })}
                    placeholder="Name"
                    placeholderTextColor={Colors.textSecondary}
                    style={{
                      borderBottomWidth: 2,
                      borderColor: Colors.secondary,
                      fontSize: 18,
                      paddingLeft: 10,
                      width: "70%",
                      color: Colors.textPrimary,
                      marginHorizontal: 10,
                    }}
                  />
                </View>

                <View style={{ height: 20 }} />
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TextInput
                    onChangeText={(t) => this.setState({ name: t })}
                    placeholder="Username"
                    placeholderTextColor={Colors.textSecondary}
                    style={{
                      borderBottomWidth: 2,
                      borderColor: Colors.secondary,
                      fontSize: 18,
                      paddingLeft: 10,
                      color: Colors.textPrimary,
                      width: "70%",
                      marginHorizontal: 10,
                    }}
                  />
                </View>
                <View style={{ height: 20 }} />
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 20,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ fontSize: 16, color: Colors.secondary }}>
                    +91
                  </Text>
                  <TextInput
                    onChangeText={(t) => this.setState({ name: t })}
                    placeholder="Mobile"
                    keyboardType="number-pad"
                    placeholderTextColor={Colors.textSecondary}
                    style={{
                      borderBottomWidth: 2,
                      borderColor: Colors.secondary,
                      fontSize: 18,
                      paddingLeft: 10,
                      color: Colors.textPrimary,
                      width: "62%",
                      marginHorizontal: 10,
                    }}
                  />
                </View>
                <View style={styles.sliderContainer}>
                  <View
                    style={{
                      borderRadius: 50,
                      width: 100,
                      height: 100,
                      alignSelf: "center",
                      borderColor: Colors.secondary,
                      borderWidth: 3,
                    }}
                  >
                    <Text style={styles.valueText}>
                      {this.state.value.toFixed()}
                    </Text>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: 12,
                        color: Colors.textSecondary,
                      }}
                    >
                      Age
                    </Text>
                  </View>
                  <Slider
                    style={{ height: 40 }}
                    minimumValue={12}
                    maximumValue={60}
                    minimumTrackTintColor={Colors.secondary}
                    maximumTrackTintColor={Colors.secondary}
                    thumbTintColor={Colors.secondary}
                    value={this.state.value}
                    onValueChange={(value) => this.setState({ value })}
                    onSlidingComplete={(value) => {
                      console.warn("Sliding Complete with value: ", value);
                    }}
                  />
                </View>
                <View style={styles.genderContainer}>
                  <View
                    style={{
                      backgroundColor: Colors.secondary,
                      borderRadius: 6,
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      height: "30%",
                      width: "70%",
                    }}
                  >
                    <TouchableOpacity
                      style={
                        this.state.gender === "Male"
                          ? styles.selected
                          : styles.select
                      }
                      onPress={() => this.setState({ gender: "Male" })}
                    >
                      <Text
                        style={
                          this.state.gender === "Male"
                            ? styles.selectedText
                            : styles.selectText
                        }
                      >
                        Male
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={
                        this.state.gender === "Female"
                          ? styles.selected
                          : styles.select
                      }
                      onPress={() => this.setState({ gender: "Female" })}
                    >
                      <Text
                        style={
                          this.state.gender === "Female"
                            ? styles.selectedText
                            : styles.selectText
                        }
                      >
                        Female
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={
                        this.state.gender === "More"
                          ? styles.selected
                          : styles.select
                      }
                      onPress={() => this.setState({ gender: "More" })}
                    >
                      <Text
                        style={
                          this.state.gender === "More"
                            ? styles.selectedText
                            : styles.selectText
                        }
                      >
                        Other
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          */}
          <View style={{ flex: 1, width: Dimensions.get("window").width }}>
            <View
              style={{
                justifyContent: "center",
                flex: 1,
                marginLeft: "15%",
                paddingRight: "20%",
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  color: Colors.textPrimary,
                  marginTop:50
                }}
              >
                One more step
              </Text>
              <Text style={{ fontSize: 20, color: Colors.textPrimary }}>
                Provide your personal details
              </Text>
            </View>
            <View
              style={{
                flex: 3,
                alignItems: "center",
                width: Dimensions.get("window").width,
              }}
            >
              <View style={styles.card}>
                <View style={styles.genderContainer}>
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        marginBottom: 20,
                        color: Colors.textPrimary,
                        fontStyle: "italic",
                      }}
                    >
                      you're currently{" "}
                    </Text>
                    <Text
                      style={{
                        marginBottom: 20,
                        color: Colors.textPrimary,
                        fontStyle: "italic",
                      }}
                    >{this.state.current == "Working"? "" : "in" }</Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: Colors.secondary,
                      borderRadius: 6,
                      flexDirection: "row",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                      height: "30%",
                      width: "70%",
                    }}
                  >
                    <TouchableOpacity
                      style={
                        this.state.current === "School"
                          ? styles.selected
                          : styles.select
                      }
                      onPress={() => this.setState({ current: "School" })}
                    >
                      <Text
                        style={
                          this.state.current === "School"
                            ? styles.selectedText
                            : styles.selectText
                        }
                      >
                        School
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={
                        this.state.current === "College"
                          ? styles.selected
                          : styles.select
                      }
                      onPress={() => this.setState({ current: "College" })}
                    >
                      <Text
                        style={
                          this.state.current === "College"
                            ? styles.selectedText
                            : styles.selectText
                        }
                      >
                        College
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={
                        this.state.current === "Working"
                          ? styles.selected
                          : styles.select
                      }
                      onPress={() => this.setState({ current: "Working" })}
                    >
                      <Text
                        style={
                          this.state.current === "Working"
                            ? styles.selectedText
                            : styles.selectText
                        }
                      >
                        Working
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Text
                  style={{
                    color: Colors.textPrimary,
                    fontStyle: "italic",
                    textAlign: "left",
                    marginBottom: 10,
                    marginRight: Dimensions.get("window").width / 3,
                  }}
                >
                  your interests are{" "}
                </Text>
                {/**********************Card for homepage*************************
                <ScrollView horizontal>
                  
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
                        source={require("../../images/Group.png")}
                        style={{
                          width: 100,
                          height: 100,
                          position: "absolute",
                          top: -20,
                          alignSelf: "center",
                        }}
                      />
                      <ImageBackground
                        source={require("../../images/interest.png")}
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
                          Web Development
                        </Text>
                      </ImageBackground>
                    </View>
                    
                  </View>
                  
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
                        source={require("../../images/Group.png")}
                        style={{
                          width: 100,
                          height: 100,
                          position: "absolute",
                          top: -20,
                          alignSelf: "center",
                        }}
                      />
                      <ImageBackground
                        source={require("../../images/interest.png")}
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
                          Web Development
                        </Text>
                      </ImageBackground>
                    </View>
                    
                  </View>
                  
                </ScrollView>
                */}

                <ScrollView
                  contentContainerStyle={{
                    flexDirection: "row",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    paddingLeft: 50,
                    paddingRight: 10,
                  }}
                >
                  {interests.map((item, index) => {
                    let flag = false;
                    this.state.interests.map((it,index)=>{
                        if(it == item)
                            flag = true
                    })
                    
                    return (
                      <TouchableOpacity
                        key = {item}
                        style={{
                          paddingVertical: 10,
                          paddingHorizontal: 10,
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: flag == true ? Colors.secondary : Colors.secondaryDark,
                          borderRadius: 10,
                          marginRight: 10,
                          marginTop: 20,
                        }}
                        onPress = {()=>this.intSelect(item)}
                      >
                        <Text style={{ color: Colors.textPrimary }}>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => this.nextPress()}
            style={[
              styles.next,
              {
                borderColor:
                  this.state.scrollPos == 1
                    ? Colors.secondary
                    : Colors.secondaryDark,
              },
            ]}
          >
            <Ionicons
              name="arrow-forward"
              color={
                this.state.scrollPos == 1
                  ? Colors.secondary
                  : Colors.textSecondary
              }
              size={40}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
  },
  card: {
    width: "90%",
    height: "98%",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: Colors.primary,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    paddingTop:30
  },
  sliderContainer: {
    width: "70%",
    marginTop: "10%",
    marginBottom: "2%",
  },
  valueText: {
    fontSize: 52,
    textAlign: "center",
    marginHorizontal: 5,
    color: Colors.textPrimary,
  },

  genderContainer: {
    marginTop: 20,
    height: "20%",
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  select: {
    width: "32%",
    alignItems: "center",
    height: "80%",
    justifyContent: "center",
    borderRadius: 6,
  },
  selected: {
    width: "32%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: "80%",
    borderRadius: 6,
  },
  selectText: {
    fontSize: 14,
    color: "#fff",
    textAlign: "center",
  },
  selectedText: {
    fontSize: 14,
    color: "#000",
    textAlign: "center",
  },
  next: {
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    width: 70,
    borderRadius: 35,
    marginTop: 20,
    marginBottom: 40,
    borderWidth: 2,
    borderColor: Colors.secondary,
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
  continuebtn: {
    width: Dimensions.get("window").width / 3,
    height: 50,
    borderRadius: 20,
    backgroundColor: Colors.secondaryDark,
    marginHorizontal: 40,
    justifyContent: "center",
    alignItems: "center",
  },
});
