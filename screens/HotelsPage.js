import { View, Text, ScrollView } from 'react-native'
import React, { useContext, useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { Context } from '../context/Context'
import { BottomModal, SlideAnimation, ModalContent, ModalFooter, ModalButton, ModalTitle } from 'react-native-modals';
import { data } from "../Data/HotelData"
import { Pressable } from 'react-native'
import { Entypo } from '@expo/vector-icons';


const HotelsPage = () => {
  const navigation = useNavigation()
  // const [model,setModel] = useState(false)
  const { location } = useContext(Context)
  useLayoutEffect(()=>{
    navigation.setOptions({
      title:`Properties in ${location}`,
      headerRight : () => (<Entypo name="location" size={24} color="#FFc72C" onPress={()=>navigation.navigate("map",{location:location})} />)
    })
  },[])
  useEffect(()=>{
    // console.log(data.properties.image)
  })

  return (
    <ScrollView style={{ flex: 1, padding: 10 }} showsVerticalScrollIndicator={false}>
      {
        data.filter((val) => val.place === location).map((value) => {
          return (
            value.properties.map((datas) => {
              return (
                <Pressable onPress={()=>navigation.navigate("Single Hotel",{datas:datas})}>
                <View style={style.main}>

                  <View style={{ flex: 1, padding: 5, }}>
                    <Image style={{ height: "100%", width: "100%", borderRadius: 10 }} source={{uri:datas.image}}  />
                  </View>

                  <View style={style.content}>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                      <Text style={{ marginLeft: 7, fontSize: 20, fontWeight: "bold" }}>{datas.name}</Text>
                      
                    </View>

                    <View style={{ marginLeft: 7, gap: 5 }}>
                      <Text style={{ fontWeight: "400" }}>Available Rooms: <Text style={{ color: "red", fontWeight: "500" }}>{datas.rooms.length}</Text></Text>
                      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:5}}>
                        <View style={{ backgroundColor: "green", borderRadius: 50, width: 25, height: 25 }}><Text style={{ color: "white", fontSize: 10, alignSelf: "center", marginTop: 4 }}>{datas.rating}</Text></View>
                        <Text style={{ marginRight: 7, fontSize: 15, alignSelf: "center", color: "red" }}>₹{datas.newPrice}</Text>
                      </View>
                    </View>
                  </View>

                </View>
                </Pressable>
              )
            })
          )
        })
      }

    </ScrollView>

    
  )
}

const style = StyleSheet.create({
  main: {
    margin: 20,
    height: 150,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    flex:1
  },
  content: {
    flex: 1,
    justifyContent:"space-evenly"
  }
})
export default HotelsPage