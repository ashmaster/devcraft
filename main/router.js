import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RegScreen from './log-reg/register1'
import Regorlog from './log-reg/logorreg'
import RegDet from './log-reg/regdetails'


const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode = "none" initialRouteName = "Regorlog">
        <Stack.Screen name="Regorlog" component={Regorlog} />
        <Stack.Screen name="Reg" component={RegScreen} />
        <Stack.Screen name="RegDet" component={RegDet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;