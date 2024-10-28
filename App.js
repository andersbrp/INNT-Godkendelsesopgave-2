import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { BookingProvider } from './BookingContext';
import HotelsScreen from './Tabs/HotelsScreen';
import OrderScreen from './Tabs/OrderScreen';
import MapScreen from './Tabs/MapScreen';
import BookingsScreen from './Tabs/BookingsScreen';
import SettingsScreen from './Tabs/SettingsScreen';

const Tab = createBottomTabNavigator();

//App funktionen står for at vise skærmene, samt tillade brugeren at navigere rundt mellem de forskellige skærme.
export default function App() {
  return (
    <BookingProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Hotels"
            component={HotelsScreen}
            options={{
              tabBarLabel: 'Hotels',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="business-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{
              tabBarLabel: 'Map',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="map-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Bookings"
            component={BookingsScreen}
            options={{
              tabBarLabel: 'Bookings',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="bed-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Order"
            component={OrderScreen}
            options={{
              tabBarLabel: 'Order',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="cart-outline" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="settings-outline" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </BookingProvider>
  );
}