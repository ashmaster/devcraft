import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Colors from '../constants/color';
import Head from '../components/Head';

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
       <Head />

       <View style={{marginVertical: 5}}>
          <View style={styles.viewMore}>
            <View><Text style={styles.text}>Top Categories</Text></View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.text, {paddingRight: 5}]}>See more</Text>
              <Feather name="arrow-right-circle" size={24} color={Colors.textPrimary} />
            </View>
          </View>
          <ScrollView horizontal style={{paddingHorizontal: 10}}>
            <View style={styles.catcard}>
              <View style={styles.catname}>
                <Text numberOfLines={1} style={{fontSize: 25, fontWeight: '600', width: '400%', transform: [{rotate: '-90deg'}], paddingLeft: 20}}>Web Development</Text>
              </View>
              <View style={styles.catdet}>
                <Image source={require('../images/detcard.png')} style={{position: 'absolute', width: '100%', height: 70, top: 70}} />
                <Image source={require('../images/Group.png')} style={{width: 90, height: 90, marginTop: 10}} />
                <View style={{alignItems: 'center', flex: 1, justifyContent: 'center', paddingTop: 10}}>
                  <Text style={{color: Colors.primary, fontSize: 25, fontWeight: 'bold'}}>60</Text>
                  <Text style={{color: Colors.primary, fontSize: 20}}>Courses</Text>
                  <Text style={{color: Colors.primary, fontSize: 25, fontWeight: 'bold'}}>100K</Text>
                  <Text style={{color: Colors.primary, fontSize: 20}}>Downloads</Text>
                </View>
              </View>
            </View>
            <View style={styles.catcard}>
              <View style={styles.catname}>
                <Text numberOfLines={1} style={{fontSize: 25, fontWeight: '600', width: '400%', transform: [{rotate: '-90deg'}], paddingLeft: 20}}>Web Development</Text>
              </View>
              <View style={styles.catdet}>
                <Image source={require('../images/detcard.png')} style={{position: 'absolute', width: '100%', height: 70, top: 70}} />
                <Image source={require('../images/Group.png')} style={{width: 90, height: 90, marginTop: 10}} />
                <View style={{alignItems: 'center', flex: 1, justifyContent: 'center', paddingTop: 10}}>
                  <Text style={{color: Colors.primary, fontSize: 25, fontWeight: 'bold'}}>60</Text>
                  <Text style={{color: Colors.primary, fontSize: 20}}>Courses</Text>
                  <Text style={{color: Colors.primary, fontSize: 25, fontWeight: 'bold'}}>100K</Text>
                  <Text style={{color: Colors.primary, fontSize: 20}}>Downloads</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={{marginVertical: 5}}>
          <View style={styles.viewMore}>
            <View><Text style={styles.text}>Top Courses</Text></View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.text, {paddingRight: 5}]}>See more</Text>
              <Feather name="arrow-right-circle" size={24} color={Colors.textPrimary} />
            </View>
          </View>
          <ScrollView horizontal style={{paddingHorizontal: 10}}>
            <View style={[styles.catcard, {padding: 2, flexDirection: 'column'}]}>
              <Image source={require('../images/coursesvg.png')} style={{
                position: 'absolute',
                width: '100%',
                height: 140,
                top: 80
              }} />
              <Image source={require('../images/codbg.jpeg')} style={{width: '100%', height: 80, borderRadius: 27}} />
              <Text style={{color: Colors.primary, fontSize: 20, paddingLeft: 10, fontWeight: 'bold'}}>Programming for everybody</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-around', top: 25}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 35, fontWeight: 'bold'}}>7</Text>
                  <Text style={{fontSize: 20, fontWeight: '600'}}>Sessions</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 35, fontWeight: 'bold'}}>47</Text>
                  <Text style={{fontSize: 20, fontWeight: '600'}}>Hours</Text>
                </View>
              </View>
            </View>
            <View style={[styles.catcard, {padding: 2, flexDirection: 'column'}]}>
              <Image source={require('../images/coursesvg.png')} style={{
                position: 'absolute',
                width: '100%',
                height: 140,
                top: 80
              }} />
              <Image source={require('../images/codbg.jpeg')} style={{width: '100%', height: 80, borderRadius: 27}} />
              <Text style={{color: Colors.primary, fontSize: 20, paddingLeft: 10, fontWeight: 'bold'}}>Programming for everybody</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-around', top: 25}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 35, fontWeight: 'bold'}}>7</Text>
                  <Text style={{fontSize: 20, fontWeight: '600'}}>Sessions</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 35, fontWeight: 'bold'}}>47</Text>
                  <Text style={{fontSize: 20, fontWeight: '600'}}>Hours</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={{marginVertical: 5, paddingBottom: 80}}>
          <View style={styles.viewMore}>
            <View><Text style={styles.text}>Top Courses</Text></View>
            <View style={{flexDirection: 'row'}}>
              <Text style={[styles.text, {paddingRight: 5}]}>See more</Text>
              <Feather name="arrow-right-circle" size={24} color={Colors.textPrimary} />
            </View>
          </View>
          <ScrollView horizontal style={{paddingHorizontal: 10,marginBottom:100}}>
            <View style={[styles.catcard, {padding: 2, flexDirection: 'column'}]}>
              <Image source={require('../images/coursesvg.png')} style={{
                position: 'absolute',
                width: '100%',
                height: 140,
                top: 80
              }} />
              <Image source={require('../images/codbg.jpeg')} style={{width: '100%', height: 80, borderRadius: 27}} />
              <Text style={{color: Colors.primary, fontSize: 20, paddingLeft: 10, fontWeight: 'bold'}}>Programming for everybody</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-around', top: 25}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 35, fontWeight: 'bold'}}>7</Text>
                  <Text style={{fontSize: 20, fontWeight: '600'}}>Sessions</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 35, fontWeight: 'bold'}}>47</Text>
                  <Text style={{fontSize: 20, fontWeight: '600'}}>Hours</Text>
                </View>
              </View>
            </View>
            <View style={[styles.catcard, {padding: 2, flexDirection: 'column'}]}>
              <Image source={require('../images/coursesvg.png')} style={{
                position: 'absolute',
                width: '100%',
                height: 140,
                top: 80
              }} />
              <Image source={require('../images/codbg.jpeg')} style={{width: '100%', height: 80, borderRadius: 27}} />
              <Text style={{color: Colors.primary, fontSize: 20, paddingLeft: 10, fontWeight: 'bold'}}>Programming for everybody</Text>
              <View style={{flexDirection: 'row', justifyContent: 'space-around', top: 25}}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 35, fontWeight: 'bold'}}>7</Text>
                  <Text style={{fontSize: 20, fontWeight: '600'}}>Sessions</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 35, fontWeight: 'bold'}}>47</Text>
                  <Text style={{fontSize: 20, fontWeight: '600'}}>Hours</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>  
    </View>
  );
}

const styles = StyleSheet.create({
  head: {
    height: 150,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  viewMore: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: Colors.textPrimary,
    fontWeight: 'bold',
    marginLeft:20
  },
  catcard: {
    height: 250,
    width: 250,
    backgroundColor: Colors.secondary,
    borderRadius: 27,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  catdet: {
    flex: 1,
    alignItems: 'center'
  },
  catname: {
    backgroundColor: Colors.textPrimary,
    height: '100%',
    width: '25%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
