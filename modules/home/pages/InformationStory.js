import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { 
  StyleSheet,
  ImageBackground,
  Dimensions, 
  View
} from 'react-native';
import { StoryUser } from '../components';
import { EvilIcons } from '@expo/vector-icons';
const {width} = Dimensions.get('window')
export default function InformationStory({ navigation, route }) {
  const { params } = route || {};
  const { item } = params || {};
  const close = () => {
    navigation.goBack()
  }
  return (
    <ImageBackground source={item?.story ? item.story : item.image} style={styles.container}>
      <LinearGradient
        colors={['#000000', 'rgba(96, 96, 96, 0)']}
        style={{
          width: width,
          height: width * 0.5,
          paddingHorizontal: 16
        }}
      >
        <View 
          style={{
            marginTop: 46,
            flexDirection:'row',
            alignItems: 'center',
          }}
        >
        <StoryUser Item={item} styleText={{ color: '#fff'}}/>
        <EvilIcons onPress={close} name="close" size={24} color="#fff" />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
