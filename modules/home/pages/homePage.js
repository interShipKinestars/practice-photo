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
  ImageBackground 
} from 'react-native';
import {Screen} from '../../../constants'
import { Button } from '../../../components';
import {Stories, ListImageHome} from '../../../data'
import { StoryUser } from '../components';
export default function HomePage({ navigation }) {
  const { width, height } = Dimensions.get('window');
  const lastItem = ListImageHome.length /2 - 1

  const renderListItemFirstChildSmaller = ({item, index}) => (
    <TouchableOpacity
      key={index}
      activeOpacity={0.9}
      onPress={() => navigation.navigate(Screen.INFORMATIONSTOTY, {item})}
    >
      <ImageBackground 
        source={item.image} 
        style={{ 
          marginBottom: 10 ,
          height: index ===  0 ||  index ===  2 ? 220: 310
        }} 
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  const  renderListItemLastChildSmaller = ({item, index}) => (
    <TouchableOpacity
      key={index}
      activeOpacity={0.9}
      onPress={() => navigation.navigate(Screen.INFORMATIONSTOTY, {item})}
    >
      <ImageBackground 
        source={item.image} 
        style={{
          marginBottom: 10, 
          height: index == lastItem ||  index ===  2 ? 220 : 310
        }} 
        resizeMode="cover"
      />
    </TouchableOpacity>
  )

  return (
      <ScrollView style={styles.scrollView}>
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

                  <StoryUser Item={item}/>
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

            <View style={styles.listItems}>
              <FlatList
                  style={{...styles.containerColumn, marginRight: 10}}
                  data={ListImageHome.filter((item, index) => index % 2 === 0)}
                  renderItem={renderListItemFirstChildSmaller}
                />

                <FlatList
                  style={styles.containerColumn}
                  data={ListImageHome.filter((item, index) => index % 2 !== 0) }
                  renderItem={renderListItemLastChildSmaller}
                />

            </View>
          </View>

          <Button
              style={{ 
                width: '100%',
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    paddingHorizontal: 16,
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
