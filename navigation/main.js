import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screen } from '../constants';
import { Ionicons } from '@expo/vector-icons';
import {
  HomePage, 
  LoggedOut, 
  Login, 
  Resgister,
  Chat,
  Profile,
  Search
} from '../modules'

const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
export default function Main() {
  return (
    <MainStack.Navigator
      headerMode="none"
      initialRouteName={"BottomTabNavigator"}>
      <MainStack.Screen
        name="BottomTabNavigator"
        // component={BottomTabNavigator}
      />
      <MainStack.Screen
        name={Screen.LoggedOut}
        component={LoggedOut}
      />
      <MainStack.Screen
        name={Screen.Login}
        component={Login}
      />
      <MainStack.Screen
        name={Screen.Resgister}
        component={Resgister}
      />
      
    </MainStack.Navigator>
  );
};
function BottomTabNavigator() {
 
  return (
    <BottomTab.Navigator
      initialRouteName={Screen.HOME_PAGE}
      headerMode="none"
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.primary,
        inactiveTintColor: BaseColor.grayColor,
        style: { borderTopWidth: 1, backgroundColor: '#FFF', borderTopColor: '#f7fafd' },
        labelStyle: {
          fontSize: 12,
          fontFamily: font,
        },
      }}>
      <BottomTab.Screen
        name={Screen.NEW_HOME}
        component={NewAppHome}
        options={{
          title: 'Khám phá',
          tabBarIcon: ({ color }) => {
            return <Icon color={color} name="compass" size={20} solid />;
          },
        }}
      />
      <BottomTab.Screen
        name={Screen.BOOKING_PAGE}
        component={BookingPage}
        options={{
          title: 'Đơn hàng',
          tabBarIcon: ({ color }) => {
            return <Icon color={color} name="shopping-bag"  size={20} solid />;
          },
        }}
      />
      <BottomTab.Screen
        name={Screen.SEARCH_PAGE}
        component={SearchScreenPage}
        options={{
          title: 'Tìm kiếm',
          tabBarIcon: ({ color }) => {
            return <Icon color={color} name="search" size={20} solid />;
          },
        }}
      />
      <BottomTab.Screen
        name={Screen.SUPPORT}
        component={SupportPage}
        options={{
          title: 'Hỗ trợ',
          tabBarIcon: ({ color }) => {
            return <Icon solid color={color} name="headset" size={20} />;
          },
        }}
      />
      <BottomTab.Screen
        name={Screen.PROFILE_PAGE}
        component={ProfilePage}
        options={{
          title: 'Tài khoản',
          tabBarIcon: ({ color }) => {
            return <Icon solid color={color} name="user-circle" size={20} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

