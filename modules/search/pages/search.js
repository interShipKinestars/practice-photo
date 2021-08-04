import React,{useState} from 'react';
import { 
  StyleSheet, 
  Text,
  ScrollView,
  View, 
  TouchableOpacity, 
  Dimensions,
  ImageBackground,
  FlatList,
  SafeAreaView
} from 'react-native';
import {TextInput} from '../../../components'
import {ListSearch} from '../../../data'
import { Button } from '../../../components';
const { width } = Dimensions.get('window');
import {Screen} from '../../../constants'
export default function Search({navigation}) {
  const [valueSearch, setValueSearch] = useState('')

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      key={index}
      activeOpacity={0.9}
      onPress={() => navigation.navigate(Screen.INFORMATIONSTOTY, {item})}
      style={{
        flex: 1,
        height: width * 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        
      }}
    >
    <ImageBackground
      source={item.image} 
      style={{
        width: '98%',
        height: '98%',
      }}
        resizeMode="cover"
    />
  </TouchableOpacity>
  )


  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Text style={styles.tilteHeard}>
          Search
        </Text>

        <TextInput
          style={{marginTop: 30, borderWidth: 2, borderColor: '#000'}}
          onChangeText={text => setValueSearch(text)}
          keyExtractor={(item, index) => index.toString()}
          placeholder='Search all photos'
          keyboardType="email-address"
          value={valueSearch}
        />
        
        { valueSearch ?
        <View style={styles.content}>
          <Text style={styles.tilteContent}>
            all results
          </Text>
          <FlatList
            data={ListSearch}
            style={{flex: 1,flexDirection: 'column', justifyItems: 'space-between'}}
            renderItem={renderItem}
            numColumns={3}
          />
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
          </View>
        : null}
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
    marginBottom: 25,
  },
});
