import * as React from 'react';
import { View, Text,Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../constants/color'
import { Ionicons } from "@expo/vector-icons";
import RegScreen from '../pages/log-reg/register1';
import Regorlog from '../pages/log-reg/logorreg';
import RegDet from '../pages/log-reg/regdetails';
import Login from '../pages/log-reg/login';
import Home from '../pages/home';
import Search from '../pages/search';
import Profile from '../pages/profile';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function TabRouter(){
    return(
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          }else if(route.name === 'Profile'){
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: Colors.secondaryDark,
        activeBackgroundColor:Colors.secondary,
        inactiveBackgroundColor:Colors.secondary,
        showLabel:false,
        style:{
            marginBottom:20,
            height:58,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            borderColor: 'transparent',
            overflow: 'hidden',
            width: Dimensions.get('window').width-40,
            alignSelf:'center',
            position:'absolute',
            left:20,
            zIndex: 1
        }
        
      }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
    )
}
function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode = "none" initialRouteName = "Regorlog">
        <Stack.Screen name="Regorlog" component={Regorlog} />
        <Stack.Screen name="RegDet" component={RegDet} />
        <Stack.Screen name="Reg" component={RegScreen} />
        <Stack.Screen name="Log" component={Login} />
        <Stack.Screen name="Main" component={TabRouter}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;