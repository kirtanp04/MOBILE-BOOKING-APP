
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottom from './Bottom';
import Searchscreen from '../screens/Searchscreen';
import HotelsPage from '../screens/HotelsPage';
import SingleHotel from '../screens/SingleHotel';
import SingleImage from '../screens/SingleImage';
import RoomDetail from '../screens/RoomDetail';
import Map from '../screens/Map';
import Checkout from '../screens/Checkout';
import PropertyType from '../screens/PropertyType';


const Stacks = createNativeStackNavigator();


const Stack = () => {
  return (
    <Stacks.Navigator initialRouteName='BookMate.com'>
        <Stacks.Screen name='BookMate.com' component={Bottom} options={{headerShown:false}}/>
        <Stacks.Screen name="search screen" component={Searchscreen} options={{headerShown:false}}/>
        <Stacks.Screen name="Stay" component={HotelsPage} options={{
          title:"Stay",
        headerTitleStyle:{
        fontSize:20,
        fontWeight:"bold",
        color:"white",
      },
      headerStyle:{
        backgroundColor:"#003580",
        height:110,
        borderBottomColor:"transparent",
        shadowColor:"transparent"
      },
        }}/>
        <Stacks.Screen name='Single Hotel' component={SingleHotel}/>
        <Stacks.Screen name='image' component={SingleImage}/>
        <Stacks.Screen name='Rooms' component={RoomDetail} options={{
          headerTitleStyle:{
        fontSize:20,
        fontWeight:"bold",
        color:"white",
      },
      headerStyle:{
        backgroundColor:"#003580",
        height:110,
        borderBottomColor:"transparent",
        shadowColor:"transparent"
      },
        }}/>
        <Stacks.Screen name='map' component={Map} options={{
          headerShown:false
        }}/>
        <Stacks.Screen name='Checkout' component={Checkout} options={{
          headerTitleStyle:{
        fontSize:20,
        fontWeight:"bold",
        color:"white",
      },
      headerStyle:{
        backgroundColor:"#003580",
        height:110,
        borderBottomColor:"transparent",
        shadowColor:"transparent"
      },
        }}/>
        <Stacks.Screen name='Property' component={PropertyType}/>
    </Stacks.Navigator>
  )
}

export default Stack