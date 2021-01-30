import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView, 
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  Animated,
  ToastAndroid,
  Keyboard,
} from "react-native";
import { StackActions, NavigationActions } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from '../../constants/color'
import axios from "axios";
export default class RegScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: "",
      emailVerify: false,
      password: "",
      passwordVerify: false,
      upperCase: false,
      digit: false,
      noOfChar: false,
      symbol: false,
    };
    this.showWidth = new Animated.Value(0);
    this.button = new Animated.Value(0);
    this.buttonWidth = new Animated.Value(0);
    this.buttonOpacity = new Animated.Value(0);
  }
  componentDidMount() {
    this.showAnim();
  }
  showAnim() {
    Animated.timing(this.showWidth, {
      delay: 500,
      toValue: 2,
    }).start();
  }
  showbutton() {
    Animated.parallel([
      Animated.timing(this.button, {
        delay: 200,
        toValue: 1,
      }),
      Animated.timing(this.buttonOpacity, {
        delay: 300,
        toValue: 1,
      }),
    ]).start();
  }
  hidebutton() {
    Animated.parallel([
      Animated.timing(this.button, {
        delay: 200,
        toValue: 0,
      }),
      Animated.timing(this.buttonOpacity, {
        delay: 100,
        toValue: 0,
      }),
    ]).start();
  }
  async afterHide() {
    this.setState({ loading: true });
    
    
    await axios.post('https://e-learning-platform-backend.herokuapp.com/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then((response)=>{
        this.props.navigation.navigate("Main",{token:response.data.token})
        
      })
      .catch(err => {
          console.log(err)
          ToastAndroid.show("Something is wrong", ToastAndroid.SHORT)
          this.setState({loading:false})
          this.showbutton()
    })
    //
  }

  pressed() {
    this.hidebutton();
    this.afterHide()
  }
  async onChangeEmail(text) {
    await this.setState({ email: text });
    var emailVer;
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)
    ) {
      emailVer = true;
    } else {
      emailVer = false;
    }
    this.setState({ emailVerify: emailVer });
    if (emailVer && this.state.passwordVerify) {
      this.showbutton();
    } else this.hidebutton();
  }

  async onChangePassword(text) {
    await this.setState({ password: text });
    const { password } = this.state;
    var upperCase;
    var minDig;
    var symbol;
    var noOfChar;
    var passwordVer;
    if (password.match(/[A-Z]/g)) {
      upperCase = true;
    } else {
      upperCase = false;
    }
    if (password.match(/[0-9]/g)) {
      minDig = true;
    } else {
      minDig = false;
    }
    if (password.match(/[^a-zA-Z\d]/g)) {
      symbol = true;
    } else {
      symbol = false;
    }
    if (password.length >= 8) {
      noOfChar = true;
    } else {
      noOfChar = false;
    }
    this.setState({
      upperCase: upperCase,
      noOfChar: noOfChar,
      digit: minDig,
      symbol: symbol,
    });
    if (minDig && noOfChar && upperCase && symbol) {
      passwordVer = true;
    } else {
      passwordVer = false;
    }
    this.setState({ passwordVerify: passwordVer });
    if (passwordVer && this.state.emailVerify) {
      this.showbutton();
    } else this.hidebutton();
  }

  render() {
    const width = this.showWidth.interpolate({
      inputRange: [0, 2],
      outputRange: ["0%", "90%"],
    });

    const height = this.button.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 50],
    });
    const buttonW = this.buttonWidth.interpolate({
      inputRange: [0, 1],
      outputRange: ["90%", "0%"],
    });
    const copacity = this.showWidth.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [0, 0.5, 1],
    });
    const box_y = this.showWidth.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 10],
    });
    const bopacity = this.buttonOpacity;
    return (
      <View style={{ flex: 1, backgroundColor: Colors.primary }}>
        <MaterialCommunityIcons name = "arrow-left" onPress = {()=>this.props.navigation.goBack()} style = {{position:'absolute',top:100,left:50}} size = {30} color = "#fff"/>
        <View style = {{justifyContent:'flex-end',flex:1,marginLeft:'15%',paddingRight:'20%',marginTop:'30%'}}>
            <Text style = {{fontSize:36,fontWeight:'bold',color:Colors.textPrimary}}>
                Welcome back...
            </Text>
            <Text style = {{fontSize:24,color:Colors.textPrimary}}>
                Login to continue.
            </Text>
        </View>
        <View style={styles.container}>
          <Animated.View
            style={[
              styles.card,
              { opacity: copacity, transform: [{ translateY: box_y }] },
            ]}
          >
            <View
              style={{ margin: 20, marginBottom: 20, alignItems: "center" }}
            >
              
            </View>
            <View
              style={[
                styles.entry,
                {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 30,
                },
              ]}
            >
              <Animated.View style={{ width, alignSelf: "center" }}>
                <TextInput
                  placeholderTextColor={Colors.textSecondary}
            style={{
              borderBottomWidth: 2,
              borderColor: Colors.secondary,
              fontSize: 18,
              paddingLeft: 10,
              color:Colors.textPrimary,
            }}
                  keyboardType="default"
                  placeholder="Email-id"
                  onChangeText={(text) => this.onChangeEmail(text)}
                />
              </Animated.View>
              {this.state.emailVerify ? (
                <MaterialCommunityIcons
                  size={20}
                  name="checkbox-marked-circle"
                  color="green"
                />
              ) : (
                <View style={{ width: 20 }} />
              )}
            </View>
            <View
              style={[
                styles.entry,
                {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingHorizontal: 30,
                  marginBottom: 10,
                },
              ]}
            >
              <Animated.View style={{ width, alignSelf: "center" }}>
                <TextInput
                  placeholderTextColor={Colors.textSecondary}
            style={{
              borderBottomWidth: 2,
              borderColor: Colors.secondary,
              fontSize: 18,
              paddingLeft: 10,
              color:Colors.textPrimary,
              marginBottom:20
            }}
                  keyboardType="default"
                  placeholder="Password"
                  secureTextEntry={true}
                  onChangeText={(text) => this.onChangePassword(text)}
                />
              </Animated.View>
              {this.state.passwordVerify ? (
                <MaterialCommunityIcons
                  size={20}
                  name="checkbox-marked-circle"
                  color="green"
                />
              ) : (
                <View style={{ width: 20 }} />
              )}
            </View>
            
          </Animated.View>
          <TouchableOpacity
            style={{ width: "100%" }}
            onPress={() => this.pressed()}
          >
            <Animated.View
              style={{
                backgroundColor: Colors.secondary,
                justifyContent: "center",
                height,
                width: buttonW,
                opacity: bopacity,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: 18,
                }}
              >
                LOGIN
              </Text>
            </Animated.View>
          </TouchableOpacity>
          <ActivityIndicator
            size="large"
            animating={this.state.loading}
            color={Colors.secondary}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: Colors.primary,
    marginTop:Dimensions.get('window').height/40
  },
  card: {
    width: "90%",
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    backgroundColor: Colors.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: "5%",
  },
  entry: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  textInput: {
    backgroundColor: Colors.secondary,
    borderColor: "#ccc",
    elevation:1,
    color:Colors.primary,
    borderRadius:8,
    height: 40,
    fontSize: 14,
    paddingLeft: 15,
  },
});
