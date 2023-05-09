import { View, Text,ScrollView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Context } from '../context/Context'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'

const Saved = () => {
  const { saveData } = useContext(Context)

  return (
    <ScrollView style={style.main}>
      {
        saveData.length === 0 ? 
        <>
          <View style={{marginTop:50}}>
            <Text style={{justifyContent:"center",alignSelf:"center",fontSize:20,fontWeight:"bold"}}>Oops!! Your bucket is empty.</Text>
          </View>
        </>:
        <>
        {
        saveData.map((val) => {
          return (
            <View style={style.sub}>
              <Image style={style.img} source={{ uri: val.image}} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 20, marginLeft: 10, fontWeight: "bold" }}>{val.name}</Text>
                <Text style={{ fontSize: 15, marginLeft: 10, fontWeight: 700,marginTop:10 }}>Type : <Text style={{ fontSize: 15, marginLeft: 10, fontWeight:400,fontStyle:"italic",color:"red" }}>{val.type}</Text></Text>
                <Text style={{ fontSize: 15, marginLeft: 10, fontWeight: 700,marginTop:10 }}>Address :<Text style={{ fontSize: 11, marginLeft: 10, fontWeight:400,fontStyle:"italic",color:"grey"}}>{val.address}</Text></Text>
                <Text style={{ fontSize: 15, marginLeft: 10, fontWeight: 700,marginTop:10}}>Price : <Text style={{ fontSize: 15, marginLeft: 10, fontWeight:400,fontStyle:"italic",color:"red"}}>{val.newPrice}</Text></Text>
              </View>
            </View>
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
    flex: 1,
    margin: 10
  },
  sub: {
    
    margin: 20,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 15,
    display: "flex",
    flexDirection: "row",
    height: 200,
    padding: 5
  },
  img: {
    height: "100%",
    width: "100%",
    flex: 1,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15
  }
})

export default Saved