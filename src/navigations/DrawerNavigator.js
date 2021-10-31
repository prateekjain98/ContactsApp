import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';

const DrawerNavigator = () => {
    const AuthStack = createDrawerNavigator()
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Home" component={HomeNavigator}></AuthStack.Screen>
        </AuthStack.Navigator>
    );
};

export default DrawerNavigator;