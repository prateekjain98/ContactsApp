import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Login = () => {
    return (
        <View>
            <Text>Hi from Login</Text>
        </View>
    );
};
const Signup = () => {
    return (
        <View>
            <Text>Hi from Signup</Text>
        </View>
    );
};

const AuthNavigator = () => {
    const AuthStack = createStackNavigator()
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={Login}></AuthStack.Screen>
            <AuthStack.Screen name="Signup" component={Signup}></AuthStack.Screen>
        </AuthStack.Navigator>
    );
};

export default AuthNavigator;