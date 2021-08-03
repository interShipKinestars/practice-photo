import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { Images } from '../../../config/image.config';

export default function StoryUser(props) {
  const {Item} = props
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={Item.avatar}/>
      <View style={styles.contentText}>
        <Text style={styles.name}>{Item.name}</Text>
        <Text style={styles.mail}>{Item.mail}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 28,
    height: 28,
    borderRadius: 50,
    marginRight: 10
  },
  contentText: {
    flex: 1,
    flexDirection: 'column',
  },
  name: {
    textTransform: 'uppercase',
    fontSize: 13,
    fontWeight: '700'
  },
  mail: {
    fontSize: 11,
  }
});
