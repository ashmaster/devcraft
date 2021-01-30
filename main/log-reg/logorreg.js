import React from "react";
import { View, Text, StyleSheet, Animated } from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import * as Animatable from "react-native-animatable";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/color'

export default class Regorlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gestureName: "none",
      backgroundColor: "#fff",
    };
  }
  handleRegTextRef = ref => this.regText = ref;
  handleLogTextRef = ref => this.logText = ref;
  componentDidMount(){
    const unsubscribe = this.props.navigation.addListener('focus', () => {
        this.logText.fadeInLeftBig();
        this.regText.fadeInRightBig();
      });
  
      return unsubscribe;
  }

  onSwipeLeft(gestureState) {
    this.setState({ myText: "You swiped left!" });
    this.logText.fadeOutLeftBig();
    this.props.navigation.navigate('Main')
  }

  onSwipeRight(gestureState) {
    this.setState({ myText: "You swiped right!" });
    this.regText.fadeOutRightBig();
    this.props.navigation.navigate('Reg')
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80,
    };
    return (
      <View style={styles.main}>
        <Animatable.View ref={this.handleRegTextRef} style = {{flexDirection:'row'}}>
          <GestureRecognizer
            config={config}
            onSwipeRight={(state) => this.onSwipeRight(state)}
          >
            <Text style={{ fontSize: 60, fontWeight: "bold",color:Colors.textPrimary  }}>Register</Text>
          </GestureRecognizer>
          <Animatable.View
            animation="pulse"
            iterationCount="infinite"
            useNativeDriver={true}
          >
            <MaterialCommunityIcons
              size={26}
              style={{ marginLeft: 40, marginTop:25 }}
              name="chevron-triple-right"
              color={Colors.secondary}
            />
          </Animatable.View>
        </Animatable.View>
        <Text style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", color:Colors.textSecondary }}>
          or
        </Text>
        <Animatable.View ref={this.handleLogTextRef} style = {{flexDirection:'row',justifyContent:'flex-end'}}>
        <Animatable.View
            animation="pulse"
            iterationCount="infinite"
            useNativeDriver={true}
          >
            <MaterialCommunityIcons
              size={26}
              style={{ marginRight: 40, marginTop:25 }}
              name="chevron-triple-left"
              color={Colors.secondary}
            />
          </Animatable.View>
          <GestureRecognizer
            config={config}
            onSwipeLeft={(state) => this.onSwipeLeft(state)}
          >
            <Text
              style={{ fontSize: 60, fontWeight: "bold", textAlign: "right", color:Colors.textPrimary }}
            >
              Login
            </Text>
          </GestureRecognizer>
          
        </Animatable.View>

        <Text style = {{textAlign:'center',position:'absolute', bottom:'20%',left:'45%',color:Colors.textSecondary}}>Swipe on your choice ...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: "10%",
    justifyContent: "center",
    backgroundColor:Colors.primary
  },
});
