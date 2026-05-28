import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "./src/navigation/BottomTabs";

import ContactsScreen from "./src/screens/ContactsScreen";

import ChatScreen from "./src/screens/ChatScreen";
const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false, }} >

        <Stack.Screen name="BottomTabs"  component={BottomTabs}  />

        <Stack.Screen name="Contacts" component={ContactsScreen} />

        <Stack.Screen name="chat" component={ChatScreen} />
        

      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default App;