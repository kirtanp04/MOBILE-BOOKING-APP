import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { services } from '../Data/HotelData'

const Service = () => {
  return (
    <View>
      <Text style={{fontWeight:"bold",fontSize:15}}>Services</Text>
      <View>
        <FlatList
            data={services}
            renderItem = {({item})=>{
                return(
                    <View style={style.service}>
                        <Text style={{color:"#003580"}}>{item.name}</Text>
                    </View>
                )
            }}
            numColumns={3}
            keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
    service:{
        backgroundColor:"#add8e6",
        margin:5,
        padding:5,
        borderRadius:10
    }
})

export default Service