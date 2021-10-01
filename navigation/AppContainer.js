import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/welcome";
import Welcome2 from "../screens/welcome2";
import Login from "../screens/login";
import SignUp from "../screens/signUp";
import Profile from "../screens/profile";
import Home from "../screens/home";
import ScanQR from "../screens/scanQr";
import { Text } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Scanner from "../screens/scanner";
import QRscanner from "../QRscanner";

const Stack = createStackNavigator();
function AppContainer({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="welcome2"
          component={Welcome2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            headerTitle: "Sign In",
            headerStatusBarHeight: 50,
            headerTitleAlign: "center",
              headerTitleStyle: { fontSize: 25, color:'white',marginBottom:10},
          headerStyle:{backgroundColor:'#FF2442',}
          }}
        />
        <Stack.Screen name="signUp" component={SignUp} 
          options={{
            headerTitle: "Register",
            headerStatusBarHeight: 50,
            headerTitleAlign: "center",
              headerTitleStyle: { fontSize: 25, color:'white',marginBottom:10},
          headerStyle:{backgroundColor:'#FF2442',}
          }}/>
        <Stack.Screen name="home" component={Home}
        options={{
          headerTitle: "THE TECH GUY",
          headerStatusBarHeight: 50,
          headerTitleAlign: "center",
          headerLeft:()=><Text></Text>,
          headerRight: () => <Ionicons style={{marginRight:30}}name="person-outline" size={24} color="white"/>,
            headerTitleStyle: { fontSize: 20, color:'white',marginBottom:10},
        headerStyle:{backgroundColor:'#FF2442',}
          }} />
        <Stack.Screen name="scanner" component={QRscanner}
        options={{ headerShown: false }}/>
        <Stack.Screen name="profile" component={Profile}
        />
        <Stack.Screen name="scanqr" component={ScanQR} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppContainer;
