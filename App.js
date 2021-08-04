import { StatusBar } from 'expo-status-bar';
import {LogBox} from 'react-native'
import React from 'react';
import Navigator from './navigation';

LogBox.ignoreAllLogs(true);
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
export default function App() {
  return (
    <>
     <StatusBar backgroundColor={'#fff'}/>
     <Navigator />
    </>
  );
}


