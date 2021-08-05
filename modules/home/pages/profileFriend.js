import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Button } from '../../../components';
import { Images } from '../../../config';
import { GirdImages } from '../components';
const {width} = Dimensions.get('window')
export default function ProfileFriend({navigation, route}) {
  const { params } = route || {};
  const { Item } = params || {};
  const ListImages = [
    {image: Images.image11},
    {image: Images.image12},
    {image: Images.image13},
    {image: Images.image14},
    {image: Images.image15},
    {image: Images.image16},
  ]

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image source={Item.avatar} style={styles.avatar}/>
          <Text style={styles.title}>{Item.name}</Text>
          <Text style={styles.text}>San francisco, ca</Text>
          <Button
            style={styles.btnSignIn}
            full
            round
            styleText={{color: '#fff'}}
            indicatorColor={true}
            // onPress={() => navigation.navigate(Screen.LOGGED_OUT)}
            >
            <Text style={{fontWeight: '900'}}>
             follow {Item.name}
            </Text>
          </Button>

          <Button
            style={{backgroundColor: '#fff'}}
            full
            round
            outline
            styleText={{color: '#000'}}
            indicatorColor={true}
            // onPress={() => navigation.navigate(Screen.LOGGED_OUT)}
            >
            <Text style={{fontWeight: '900'}}>
              Message
            </Text>
          </Button>
        </View>

        <View>
          <GirdImages ListItems={ListImages} navigation={navigation}/>
          <Button
            style={{ 
              marginTop: width * 0.053,
              marginBottom: width * 0.053,
              backgroundColor: '#fff',
            }}
            full
            round
            outline
            styleText={{color: '#000'}}
            indicatorColor={true}
            >
            <Text style={{fontWeight: '900'}}>
              see more
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
  title: {
    marginTop: width * 0.06,
    fontSize: 36,
    textTransform: 'capitalize',
  },
  text:{
    marginTop: width * 0.03,
    fontWeight: '900',
    fontSize: 13
  },
  btnSignIn:{
    marginTop: width * 0.1,
    marginBottom: width * 0.053,
    backgroundColor: '#000',
  },
  
});
