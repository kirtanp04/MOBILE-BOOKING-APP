import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const HotelDetails = ({datas}) => {
  return (
    <View style={style.main}>
      <Text style={style.text}>Id: <Text style={{...style.subtext,color:"red"}}>{datas.id}</Text></Text>
      <Text style={style.text}>Name: <Text style={{...style.subtext,color:"red"}}>{datas.name}</Text></Text>
      <Text style={style.text}>PropertyType: <Text style={{...style.subtext,color:"red"}}>{datas.type}</Text></Text>
      <Text style={style.text}>Address: <Text style={{...style.subtext,color:"grey",fontStyle:"italic"}}>{datas.address}</Text></Text>
      <Text style={style.text}>Rating: <Text style={{...style.subtext,color:"green",fontStyle:"italic"}}>{datas.rating}</Text></Text>

    </View>
  )
}
const style = StyleSheet.create({
    main:{
        flex:1,
        display:"flex",
        gap:10,
    },
    text:{
        fontWeight:"bold",
        fontSize:15
    },
    subtext:{
        fontWeight:400
    }
})

export default HotelDetails