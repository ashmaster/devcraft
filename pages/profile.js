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
import Head from '../components/Head'
import Colors from "../constants/color";
import { Ionicons, Feather } from "@expo/vector-icons";
export default class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm:'',
      search:[],
      searchCourses : [
        {
          name: "Learn React",
          offered: "Harvard",
          rating: 4
        },
        {
          name: "Learn Node",
          offered: "Harvard",
          rating: 4
        },
      ]
    }
  }
  
  textChanged(searchTerm){
    this.setState({searchTerm});
    let search = this.state.searchCourses.filter(item => {
      return item.name.includes(searchTerm)
    })
    this.setState({search})
  }
  render() {
    const interests = [
        {
            name:"Web development",
            uri:require('../images/Group.png')
        },
        {
            name:"Data Science",
            uri:require('../images/deep.png')
        },
        {
            name:"App Development",
            uri:require('../images/appdev.png')
        },
        {
            name:"Competitive Programming",
            uri:require('../images/compet.png')
        },
        {
            name:"Deep Learning",
            uri:require('../images/deep.png')
        }
      ];
    
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.primary,
        }}
      >
      <Head/>
        <View style = {{flex:1}}>
            <Text style = {[styles.text,{fontSize:26}]}>
                Profile Screen
            </Text>
        </View>
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
  viewMore: {
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  text: {
    color: Colors.textPrimary,
    fontWeight: 'bold',
    marginLeft:20
  },
});
