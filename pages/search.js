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
export default class Search extends React.Component {
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
        <View style = {{marginVertical:20}}>
            <Text style = {[styles.text,{fontSize:26}]}>Discover</Text>
        </View>
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
              onChangeText={(searchTerm) => {
                this.textChanged(searchTerm)
              }}
              underlineColorAndroid="transparent"
            />
          </View>
        {this.state.searchTerm.length == 0 ?<ScrollView
          contentContainerStyle={{
            alignItems: "center",
            justifyContent:'center',
            width: Dimensions.get("window").width,
          }}
        >
          
          <Image
            source={require("../images/Saly-17.png")}
            resizeMode="center"
            style={{ width: 600,height:200 }}
          />
          <View style={styles.viewMore}>
            <View><Text style={styles.text}>Top Categories</Text></View>
            <View style = {{width:Dimensions.get('window').width/2-40}}/>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.text, {paddingRight: 5}]}>See more</Text>
              <Feather name="arrow-right-circle" size={24} color={Colors.textPrimary} />
            </View>
          </View>
           <ScrollView horizontal contentContainerStyle = {{marginHorizontal:40,paddingRight:100}}>
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
                        source={item.uri}
                        style={{
                          width: 120,
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
                            {item.name}
                        </Text>
                      </ImageBackground>
                    </View>
                    
                  </View>
                  )
              })}
          
            </ScrollView> 

            </ScrollView>: <ScrollView>
            {this.state.search.map((item,index)=>{
              return(
                <View style = {{width:Dimensions.get('window').width-100,backgroundColor:Colors.secondaryDark, borderRadius:20,marginVertical:20,paddingVertical:20,paddingRight:20}}>
                  <View style = {{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                  <Text style = {[styles.text,{fontSize:22}]}>{item.name}</Text>
                  <Text style = {[styles.text,{fontStyle:"italic"}]}>Rating:{item.rating}</Text>
                  </View>
                  <Text style = {styles.text}>Offered by:{item.offered}</Text>
                </View>
              )
            })}
        </ScrollView>}
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
