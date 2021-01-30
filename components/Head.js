import React from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';

const Head = () => {
    return(
        <ImageBackground source={require('../images/head.png')} style={styles.head}>
            <Image source={require('../images/logo.png')} style={{width: 100, height: 100}} />
        </ImageBackground>
    );
} 

const styles = StyleSheet.create({
    head: {
      height: 150,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });

export default Head;