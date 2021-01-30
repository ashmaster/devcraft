import * as React from 'react';
import { View, Text } from 'react-native';

export default class Profile extends React.Component{
    render(){
        return(
            <View style = {{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>
                    Profile
                </Text>
            </View>
        )
    }
}