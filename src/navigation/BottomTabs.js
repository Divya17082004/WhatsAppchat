  import React from "react";
  import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
  import { View, TouchableOpacity, Image } from "react-native";

  import EmptyScreen from "../screens/EmptyScreen";

  import Ionicons from "react-native-vector-icons/Ionicons";
  import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


  const Tab = createBottomTabNavigator();

  const BottomTabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,

          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 0,
            height: 90,
            paddingBottom: 20,
            paddingTop: 10,
          },

          tabBarShowLabel: true,

          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
            marginTop:5,
          },

          tabBarActiveTintColor: "#25D366",
          tabBarInactiveTintColor: "black",

 tabBarButton: (props) => (   
    <TouchableOpacity
      {...props}
      activeOpacity={1}
    />
  ),

        }}
      
      >
        {/* Chats */}

        <Tab.Screen
          name="Chats"
          component={EmptyScreen}
          options={{
            tabBarIcon: ({ focused }) => (
             <View
  
>

  <Image
      source={require("../assets/images/icons/message.webp")}  
      style={{
        width: 25,
        height: 25,
        tintColor: focused ? "#1daa61" : "black",  
      }}
    />
              </View>
            ),
          }}
        />

        {/* Updates */}

        <Tab.Screen
          name="Updates"
          component={EmptyScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <View>
                <Ionicons
                  name="sync-circle-outline"
                  size={24}
                  color={color}
                />

               

                
              </View>
            ),
          }}
        />


      
        {/* Communities */}

        <Tab.Screen
  name="Communities"
  component={EmptyScreen}
  options={{
    tabBarIcon: ({ focused }) => (  
      <Image
        source={require("../assets/images/icons/communities.webp")}
        style={{
          width: 22,
          height: 22,
          tintColor: focused ? "#1daa61" : "black",
          resizeMode: "contain",
        }}
      />
    ),
  }}
/>

        {/* Calls */}

        <Tab.Screen
          name="Calls"
          component={EmptyScreen}
          options={{
           tabBarIcon: ({ focused }) => (  
      <Image
        source={require("../assets/images/icons/call.webp")}
        style={{
          width: 22,
          height: 22,
          tintColor: focused ? "#1daa61" : "black",
          resizeMode: "contain",
          overflow: "hidden", 
        }}
      />
    ),
          }}
        />

      
      </Tab.Navigator>
    );
  };


  export default BottomTabs;