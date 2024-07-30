import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions} from 'react-native';
import HomeScreen from '../screens/home';
import WalletScreen from '../screens/wallet';
import CustomButton from '../components/navigation/customButton';
import {SCREEN_NAMES} from '../constants/names';
import TabBarIcon from '../components/navigation/tabIcon';

const Tab = createBottomTabNavigator();
const {height} = Dimensions.get('window');

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderTopWidth: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: height * 0.1,
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 10},
          shadowOpacity: 0.12,
          shadowRadius: 6.46,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarActiveTintColor: 'black',
        headerShown: false,
      }}>
      <Tab.Screen
        name={SCREEN_NAMES.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <TabBarIcon
              name={SCREEN_NAMES.HOME}
              color={color}
              size={size}
              focused={focused}
            />
          ),
          tabBarLabel: 'KEŞFET',
        }}
      />
      <Tab.Screen
        name="MiddleButton"
        component={HomeScreen}
        options={{
          tabBarButton: props => <CustomButton {...props} />,
        }}
      />
      <Tab.Screen
        name={SCREEN_NAMES.WALLET}
        component={WalletScreen}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <TabBarIcon
              name={SCREEN_NAMES.WALLET}
              color={color}
              size={size}
              focused={focused}
            />
          ),
          tabBarLabel: 'DAHA CÜZDAN',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
