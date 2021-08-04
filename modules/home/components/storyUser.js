import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';

export default function StoryUser(props) {
  const {Item, styleText, style} = props
  return (
    <View style={StyleSheet.flatten([
            styles.container,
            style,
          ])}>
      <Image style={styles.avatar} source={Item.avatar}/>
      <View style={styles.contentText}>
        <Text 
          style={StyleSheet.flatten([
            styles.name,
            styleText,
          ])}
        >
          {Item.name}
        </Text>

        <Text 
          style={StyleSheet.flatten([
            styles.mail,
            styleText,
          ])} 
        >
          {Item.mail}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
    textTransform: 'capitalize',
    fontSize: 13,
    fontWeight: '700'
  },
  mail: {
    fontSize: 11,
  }
});
