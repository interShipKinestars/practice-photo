import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function InformationStory({ navigation, route }) {
  const { params } = route || {};
  const { item } = params || {};
  console.log(item)
  return (
    <View style={styles.container}>
      <Text>InformationStory</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
