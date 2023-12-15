import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import UIExamScreen from './src/screens/UIExamScreen';
import NativeModuleExamScreen from './src/screens/NativeModuleExamScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="UI EXAM">
        <Drawer.Screen name="UI EXAM" component={UIExamScreen} />
        <Drawer.Screen
          name="NATIVE MODULE EXAM"
          component={NativeModuleExamScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
