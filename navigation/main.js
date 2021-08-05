import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Screen } from '../constants';
import { AntDesign, EvilIcons,Ionicons } from '@expo/vector-icons';
import {
  HomePage, 
  Chat,
  Profile,
  Search,
  InformationStory,
  LoggedOut,
  Login,
  Resgister,
  Conversation,
  ProfileFriend
} from '../modules'
import { NewPage } from '../modules/new/pages';
import { LinearGradient } from 'expo-linear-gradient';


const MainStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function Main() {
  return (
    <MainStack.Navigator
      headerMode="none"
      initialRouteName="BottomTabNavigator">
      <MainStack.Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
      />

      <MainStack.Screen
        name={Screen.INFORMATIONSTOTY}
        component={InformationStory}
      />

      <MainStack.Screen
        name={Screen.LOGGED_OUT}
        component={LoggedOut}
      />

      <MainStack.Screen
        name={Screen.LOGIN}
        component={Login}
      />

      <MainStack.Screen
        name={Screen.REGISTER}
        component={Resgister}
      />

      <MainStack.Screen
        name={Screen.CONVERSATION}
        component={Conversation}
      />

      <MainStack.Screen
        name={Screen.PROFILE_FRIEND}
        component={ProfileFriend}
      />
    </MainStack.Navigator>
  );
};

const NewTabNativation = ({children, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <LinearGradient
      colors={['#FF00D6', '#FF4D00']}
      style={{
        width: 70,
        height: 40,
        borderRadius: 20, 
      }}
    >
      {children}
    </LinearGradient>
  </TouchableOpacity>
)

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      headerMode="none" 
      screenOptions={{
        headerShown: false
      }}
     tabBarOptions={{
        showIcon: true,
        showLabel: false,
        activeTintColor: '#000',
        inactiveTintColor: '#666',
      }}
      initialRouteName={Screen.HOME_PAGE}
     >
      <BottomTab.Screen
        name={Screen.HOME_PAGE}
        component={HomePage}
        options={{
          tabBarIcon: ({ color }) => {
            return <AntDesign name="home" size={20} color={color} />;
          },
        }}
      />

      <BottomTab.Screen
        name={Screen.SEARCH}
        component={Search}
        options={{
          tabBarIcon: ({ color }) => {
            return <EvilIcons name="search" size={28} color={color} />;
          },
        }}
      />

      <BottomTab.Screen
        name={Screen.NEWPAGE}
        component={NewPage}
        options={{
          tabBarIcon: ({ focused,color }) => (
            <Ionicons  name="add-outline" size={24} color='#fff' />
          ),
          tabBarButton: props => (
            <NewTabNativation {...props}/>
          )
        }}
      /> 

      <BottomTab.Screen
        name={Screen.CHAT}
        component={Chat}
        options={{
          tabBarIcon: ({ color }) => {
            return <Ionicons name="chatbubble-outline" size={20} color={color} />;
          },
        }}
      />
      <BottomTab.Screen
        name={Screen.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => {
            return <AntDesign name="user" size={20} color={color} />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
}

