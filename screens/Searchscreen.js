import { View, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Context } from '../context/Context';
import { ScrollView } from 'react-native';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { data } from '../Data/HotelData';
const Searchscreen = () => {
    const navigation = useNavigation()
    const {setLocation} = useContext(Context)
    const[value,setValue] = useState("")
    

    const Apply = ()=>{
        if(value === ""){
            return alert("Enter your location.")
        }else{
            setLocation(value)
            navigation.goBack()
        }
    }


  return (
    <SafeAreaView style={{flex:1}}>
        <View style={{flexDirection:"row",backgroundColor:"#D3D3D3",gap:10,padding:15,margin:15,borderRadius:20
        ,borderColor:"#FFc72C",borderWidth:2}}>
            <AntDesign name="search1" size={20} color="black" style={{alignSelf:"center"}} />
            <TextInput value={value} onChangeText={(text)=>setValue(text)} placeholder='Enter your location..'/>
        </View>
        <ScrollView>
            {
                data.filter((val)=>{
                    if(val.place.includes(value)){
                        return val
                    }
                }).map((data,id)=>{
                    return(
                        <Pressable onPress={()=>setValue(data.place)}>
                        <View key={id} style={{backgroundColor:"#D3D3D3",padding:15,margin:10,borderRadius:20}}>
                            <Text>{data.place}</Text>
                        </View>
                        </Pressable>
                    )
                })
            }
        </ScrollView>
        <Pressable style={{backgroundColor:"#003580",margin:10,padding:10,borderRadius:20,alignItems:"center",
        position:"absolute",bottom:20,flex:1,width:"50%",alignSelf:"center"}} onPress={Apply}>
            <Text style={{color:"white",fontWeight:"bold"}}>Apply</Text>
        </Pressable>
    </SafeAreaView>
  )
}

export default Searchscreen