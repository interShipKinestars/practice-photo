import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  SafeAreaView,
  ImageBackground,
  Dimensions
} from 'react-native';
const {width,height} = Dimensions.get('window')
import {Images} from '../../../config'
import { Button } from '../../../components';
import { Screen } from '../../../constants';
import { StoryUser } from '../../home/components';
export default function LoggedOut({navigation}) {
  const item = {
    avatar: Images.avatar,
    name: 'Ridhwan Nordin',
    mail: '@ridzjcob'
  }

  return (
      <View style={styles.container}>
        <ImageBackground
          source={Images.backgroundLogged}
          style={styles.ImageHeader}
        >
          <Text style={styles.titleHedaer}>photo</Text>
          
          <StoryUser style={styles.storyUser} Item={item}/>
        </ImageBackground>

        <View style={styles.groundBtn}>
          <Button
            style={styles.btn}
            round
            outline
            styleText={{color: '#000'}}
            indicatorColor={true}
            onPress={() => navigation.navigate(Screen.LOGIN)}
            >
            <Text style={{fontWeight: '900'}}>
              Login
            </Text>
          </Button>

          <Button
            style={{
              ...styles.btn, 
              backgroundColor: '#000'
            }}
            round
            styleText={{color: '#fff'}}
            indicatorColor={true}
            onPress={() => navigation.navigate(Screen.REGISTER)}
            >
            <Text style={{fontWeight: '900'}}>
              register
            </Text>
          </Button>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  ImageHeader: {
    width: width,
    height: height * 0.85,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleHedaer: {
    fontSize: 48,
    textTransform: 'capitalize',
  },
  storyUser: {
    position: 'absolute',
    bottom: 16,
    left: 16
  },
  groundBtn: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  btn: {
    width: '48%'
  }
});
