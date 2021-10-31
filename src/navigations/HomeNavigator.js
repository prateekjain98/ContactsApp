import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Contacts = () => {
    return (
        <View>
            <Text>Hi from Contacts</Text>
        </View>
    );
};
const ContactDetails = () => {
    return (
        <View>
            <Text>Hi from Contact details</Text>
        </View>
    );
};
const CreateContact = () => {
    return (
        <View>
            <Text>Hi from Create Contact</Text>
        </View>
    );
};
const Settings = () => {
    return (
        <View>
            <Text>Hi from Settings</Text>
        </View>
    );
};

const HomeNavigator = () => {
    const HomeStack = createStackNavigator()
    return (
        <HomeStack.Navigator initialRouteName='Contacts'>
            <HomeStack.Screen name="Contacts" component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name="ContactDetails" component={ContactDetails}></HomeStack.Screen>
            <HomeStack.Screen name="CreateContact" component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name="Settings" component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    );
};

export default HomeNavigator;