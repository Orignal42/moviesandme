import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../Components/Search';
import FilmDetail from '../Components/FilmDetail';

const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const Stack = createStackNavigator();

function MyStack() {
    return (
        <NavigationContainer>

            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{

                }}
            >
                <Stack.Screen
                    name="Home"
                    component={Search}
                    options={{
                        title: 'Rechercher',
                    }}
                />
                <Stack.Screen
                    name="FilmDetail"
                    component={FilmDetail}
                    options={{
                        title: 'FilmDetail',
                    }}
                />
                <Stack.Screen
                    name="Settings"
                    component={SecondRoute}
                    options={{
                        gestureEnabled: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
export default MyStack