import React,{useRef} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from '../services';

import Main from './main';
const RootStack = createStackNavigator();

export default function Navigator() {
   const routeNameRef = useRef();
  return (
    <NavigationContainer ref={navigationRef}
        onReady={() =>
          (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
        }
        onStateChange={ () => {
          const currentRouteName = navigationRef.current.getCurrentRoute().name;
          console.log('currentRouteName', currentRouteName);
          // Save the current route name for later comparison
          routeNameRef.current = currentRouteName;
        }
      }
      >
         <RootStack.Navigator
          headerMode="none"
          >
          <RootStack.Screen  name="Main" component={Main} />
        </RootStack.Navigator>

      </NavigationContainer>
  );
}

