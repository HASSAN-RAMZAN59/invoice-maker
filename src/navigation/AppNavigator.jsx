import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import SplashScreen from '../screens/SplashScreen';
import MainScreen from '../screens/MainScreen';
import ClientScreen from '../screens/ClientScreen';
import BusinessScreen from '../screens/BusinessScreen';
import SettingScreen from '../screens/SettingScreen';
import PlaceholderScreen from '../screens/PlaceholderScreen';

import ReceiptIcon from '../assets/main/receipt_long.svg';
import GroupIcon from '../assets/main/group.svg';
import WorkIcon from '../assets/main/work.svg';
import SettingsIcon from '../assets/main/settings.svg';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let Icon;
          if (route.name === 'Invoice') Icon = ReceiptIcon;
          else if (route.name === "Client's") Icon = GroupIcon;
          else if (route.name === 'Busniess') Icon = WorkIcon;
          else if (route.name === 'Setting') Icon = SettingsIcon;
          
          return <Icon width={24} height={24} fill={color} color={color} />;
        },
        tabBarActiveTintColor: '#027BF9',
        tabBarInactiveTintColor: '#B0B0B0',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#F0F0F0',
          height: 60,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      })}
    >
      <Tab.Screen name="Invoice" component={MainScreen} />
      <Tab.Screen name="Client's" component={ClientScreen} />
      <Tab.Screen name="Busniess" component={BusinessScreen} />
      <Tab.Screen name="Setting" component={SettingScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="MainApp" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
