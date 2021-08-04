import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import {Images} from '../../../config'
import { Button } from '../../../components';
import { Screen } from '../../../constants';

const {width} = Dimensions.get('window')
export default function Profile({navigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image source={Images.avatarDefault} style={styles.avatar}/>
          <Text style={styles.title}>Please login or register</Text>
          <Button
            style={styles.btnSignIn}
            full
            round
            styleText={{color: '#fff'}}
            indicatorColor={true}
            onPress={() => navigation.navigate(Screen.LOGGED_OUT)}
            >
            <Text style={{fontWeight: '900'}}>
              Login or register
            </Text>
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    display: 'flex',
    paddingVertical: width * 0.1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: width * 0.3,
    height: width * 0.3,
    borderRadius:  width * 0.3
  },
  title:{
    marginTop: width * 0.053,
    fontWeight: '900',
  },
  btnSignIn:{
    marginTop: width * 0.053,
    marginBottom: width * 0.053,
    backgroundColor: '#000',
  }
});
