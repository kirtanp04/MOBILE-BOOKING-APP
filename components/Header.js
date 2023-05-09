import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Header = () => {
  const navigation = useNavigation()
  return (
    <View style={style.main}>
      <Pressable style={style.icon} onPress={()=>navigation.navigate("Property",{
        type:"Hotel"
      })}>
        <FontAwesome name="bed" size={17} color="white" />
        <Text style={style.text}>Hotels</Text>
      </Pressable>

      <Pressable style={style.icons} onPress={()=>navigation.navigate("Property",{
        type:"Appartment"
      })}>
      <FontAwesome name="building" size={17} color="white" />
        <Text style={style.text}>Appartment</Text>
      </Pressable>

      <Pressable style={style.icons} onPress={()=>navigation.navigate("Property",{
        type:"Resort"
      })}>
      <MaterialIcons name="pool" size={17} color="white" />
        <Text style={style.text}>Resort</Text>
      </Pressable>

      <Pressable style={style.icons} onPress={()=>navigation.navigate("Property",{
        type:"Bunglow"
      })}>
      <Entypo name="home" size={17} color="white" />
        <Text style={style.text}>Bunglows</Text>
      </Pressable>
    </View>
  )
}
const style = StyleSheet.create({
    main:{
        backgroundColor:"#003580",
        height:65,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:25,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center",
        padding:10
    },
    icon:{
        display:"flex",
        flexDirection:"row",
        gap:8,
        borderColor:"#FFC72C",
        borderWidth:1,
        padding:8,
        borderRadius:15
    },
    text:{
        color:"white",
        fontSize:10,
        justifyContent:"center",
        alignSelf:"center"
    },
    icons:{
        display:"flex",
        flexDirection:"row",
        gap:8,
        padding:8,
        // borderRadius:15
    }
})
export default Header