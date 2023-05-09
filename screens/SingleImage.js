import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native'
import { Pressable } from 'react-native';

const SingleImage = ({route}) => {
    const{image} = route.params
    const navigation = useNavigation()
    useLayoutEffect(()=>{
        navigation.setOptions({

            headerShown:false,
        })
    },[])
  return (
    <View style={{flex:1}}>
      <Image source={{uri:image}} style={{width:"100%",height:"100%"}}/>

        
      {/* <Pressable style={{flex:1}} onPress={()=>navigation.goBack()}> */}
      <View style={{flex:1,position:"absolute",backgroundColor:"#003580",padding:10,top:50,justifyContent:"center",
      alignItems:"center",marginLeft:30,borderRadius:50,borderColor:"#FFC72C",borderWidth:2}}>
        <Ionicons name="arrow-back" size={24} color="#FFC72C" onPress={()=>navigation.goBack()} />
      </View>
      {/* </Pressable> */}
    </View>
  )
}

export default SingleImage