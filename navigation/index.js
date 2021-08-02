import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';

import Main from './main';
const RootStack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer ref={navigationRef}
        onReady={() =>
          (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
        }
        onStateChange={ () => {
          // Save the current route name for later comparison
          routeNameRef.current = currentRouteName;
        }
      }
      >
         <RootStack.Navigator
          mode="modal"
          headerMode="none"
          >
          <RootStack.Screen name="Main" component={Main} />
        </RootStack.Navigator>

      </NavigationContainer>
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
