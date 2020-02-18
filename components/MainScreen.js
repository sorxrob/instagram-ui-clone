import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'native-base';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeTab from './AppTabNavigator/HomeTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      animationEnabled
      swipeEnabled
      tabBarOptions={{
        showLabel: false,
        showIcon: true,
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        style: {
          ...Platform.select({
            android: {
              backgroundColor: '#fff',
            },
          }),
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTab}
        options={{
          tabBarIcon: ({ color }) => <Icon name="ios-home" type="Ionicons" style={{ color }} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchTab}
        options={{
          tabBarIcon: ({ color }) => <Icon name="ios-search" type="Ionicons" style={{ color }} />,
        }}
      />
      <Tab.Screen
        name="AddMedia"
        component={AddMediaTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="ios-add-circle" type="Ionicons" style={{ color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Likes"
        component={LikesTab}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="heart-outline" type="MaterialCommunityIcons" style={{ color }} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileTab}
        options={{
          tabBarIcon: ({ color }) => <Icon name="person" type="Ionicons" style={{ color }} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainScreen;
