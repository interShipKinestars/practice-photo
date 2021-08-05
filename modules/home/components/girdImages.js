import React from 'react';
import { 
  StyleSheet, 
  View,
  FlatList, 
  TouchableOpacity, 
  ImageBackground 
} from 'react-native';
import {Screen} from '../../../constants'

export default function GirdImages(props) {
  const {ListItems, navigation} = props 
  const lastItem = ListItems.length /2 - 1;

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
          height: index ===  0 ? 220: 310
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
          height: index === lastItem  ? 220 : 310
        }} 
        resizeMode="cover"
      />
    </TouchableOpacity>
  )

  return (
    <View style={styles.listItems}>
      <FlatList
          style={{...styles.containerColumn, marginRight: 10}}
            keyExtractor={(item, index) => index.toString()}
          data={ListItems.filter((item, index) => index % 2 === 0)}
          renderItem={renderListItemFirstChildSmaller}
        />

        <FlatList
          style={styles.containerColumn}
          keyExtractor={(item, index) => index.toString()}
          data={ListItems.filter((item, index) => index % 2 !== 0) }
          renderItem={renderListItemLastChildSmaller}
        />

    </View> 
  );
}

const styles = StyleSheet.create({
  listItems:{
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
