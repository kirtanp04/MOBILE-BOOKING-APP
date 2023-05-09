import { View, Text, StyleSheet,ScrollView,Pressable,Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Booking = () => {
  const {userCheckoutRoom} = useContext(Context)
  const navigation = useNavigation()
  const [data,setDatas] = useState("")
 
  const Get = async()=>{
   const  value = await AsyncStorage.getItem('userBookedData')
  //  await AsyncStorage.clear('userBookedData')
  //  setDatas([...data,value])
  setDatas(value)
  console.log(data);
    
  }
  
  useEffect(()=>{
    Get()
  },[])
  return (
    <ScrollView style={{ flex: 1, padding: 10 }} showsVerticalScrollIndicator={false}>
      
      {
        userCheckoutRoom.length === 0 ? 
        <>
        <View style={{flex:1,justifyContent:"center",alignSelf:"center",marginTop:50,}}>
          <Text style={{fontSize:20,fontWeight:700}}> You haven't booked any room</Text>
        </View>
        </> : <>
        {
        
          userCheckoutRoom.map((datas) => {
          return (
            <Pressable>
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
      
    }
        </>
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

export default Booking