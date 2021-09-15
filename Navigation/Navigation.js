import * as React from "react";
import { View,Platform} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../Components/Search";
import FilmDetail from "../Components/FilmDetail";
import Favorites from "../Components/Favorites";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#ff4081" }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const Stack = createStackNavigator();

function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
  
  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }




 function MyStack() {
  return (
   
      <Stack.Navigator initialRouteName="Home" screenOptions={{}}>
        <Stack.Screen
          name="Home"
          component={Search}
          options={{
            title: "Rechercher",
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="FilmDetail"
          component={FilmDetail}
          options={{
            title: "FilmDetail",
                headerShown:false,
          }}
        />
        
      </Stack.Navigator>  
   
   
      
  
  );


}

const Tab=createBottomTabNavigator();

  export default function BottonTab() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Rechercher" component={MyStack}
          options={{
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="search1" size={24} color="black" />
                        ),
                    }}  />
          <Tab.Screen name="Favorites" component={Favorites} 
              options={{
                        tabBarIcon: ({ color }) => (
                            <AntDesign name="hearto" size={24} color="black" />
                        ),
                    }} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
