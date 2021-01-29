import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class Regorlog extends React.Component {
    render(){
        return(
            <View style = {styles.main}>
                <Text>
                    Register or Login
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

