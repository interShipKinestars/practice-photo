import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  ScrollView, 
  FlatList, 
  TouchableOpacity, 
  Image,  
  Dimensions,
  SafeAreaView
} from 'react-native';
import {Screen} from '../../../constants'
import { Button } from '../../../components';
import {Stories, ListImageHome} from '../../../data'
import { StoryFriend , GirdImages} from '../components';
export default function HomePage({ navigation }) {
  const { width } = Dimensions.get('window');

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Text style={styles.tilteHeard}>
          discover
        </Text>

        <View style={styles.content}>
          <Text style={styles.tilteContent}>
            What’s new today
          </Text>

          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Stories}
            keyExtractor={(item, index) => index.toString()}
             renderItem={({ item, index }) => {
               return (
                <TouchableOpacity
                  key={index}
                  style={styles.cardStyle}
                  activeOpacity={0.9}
                  onPress={() => navigation.navigate(Screen.INFORMATIONSTOTY, {item})}
                >
                  <Image
                    style={{
                      width: width,
                      height: 343,
                      marginBottom: 16
                    }}
                    source={item.story}
                  />

                  <StoryFriend Item={item} navigation={navigation}/>
              </TouchableOpacity>
               )
             }}
          >
          </FlatList>
        </View>

         <View style={{...styles.content,...{ marginTop: 48} }}>
            <Text style={styles.tilteContent}>
              Browse all
            </Text>
            
            <GirdImages ListItems={ListImageHome} navigation={navigation}/>
          </View>

          <Button
              style={{ 
                marginTop: width * 0.053,
                marginBottom: width * 0.053,
                backgroundColor: '#FFF',
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
      </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: '#fff'
  },
  content: {
    flex: 1,
    marginTop: 30
  },  
  tilteHeard: {
    marginTop: 44,
    textTransform: 'capitalize',
    fontSize: 36,
    fontWeight: '400',
  },
  tilteContent: {
    textTransform: 'uppercase',
    fontSize: 13,
    fontWeight: '900',
  },
  cardStyle: {
    marginTop: 24,
    paddingRight: 10
  },
  listItems:{
    width: '100%',
    height: '100%',
    display: 'flex',
    marginTop: 24,
    flexDirection: 'row',
  },
  containerColumn:{
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  }
});
