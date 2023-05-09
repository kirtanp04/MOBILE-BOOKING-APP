import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Saved from '../screens/Saved';
import Booking from '../screens/Booking';
import Profile from '../screens/Profile';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const Bottom = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel:false}}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel:"Home",
        headerShown:false,
        tabBarIcon:({focused}) => focused ?  (<Entypo name="home" size={24} color="#003580" />):
         (<AntDesign name="home" size={24} color="black" />)
      }}/>
      <Tab.Screen name='Save' component={Saved}
        options={{
          headerStyle:{
          backgroundColor:"#003580",
          height:110
        },
        headerTitleStyle:{
          fontSize:20,
          fontWeight:"bold",
        },
        headerTintColor:"white",
        tabBarIcon:({focused}) => focused ?  (<AntDesign name="heart" size={24} color="#003580" />):
         (<AntDesign name="hearto" size={24} color="black" />)
      }}
      />
      <Tab.Screen name='Booking' component={Booking}
        options={{
        headerStyle:{
          backgroundColor:"#003580",
          height:110
        },
        headerTitleStyle:{
          fontSize:20,
          fontWeight:"bold",
        },
        headerTintColor:"white",
        tabBarIcon:({focused}) => focused ?  (<Ionicons name="notifications-sharp" size={24} color="#003580" />):
         (<Ionicons name="notifications-outline" size={24} color="black" />)
      }}
      />
      <Tab.Screen name='Profile' component={Profile}
        options={{
          headerStyle:{
          backgroundColor:"#003580",
          height:110
        },
        headerTitleStyle:{
          fontSize:20,
          fontWeight:"bold",
        },
        headerTintColor:"white",
        tabBarIcon:({focused}) => focused ?  (<Ionicons name="person" size={24} color="#003580" />):
         (<Ionicons name="person-outline" size={24} color="black" />)
      }}
      />
    </Tab.Navigator>
  )
}

export default Bottom