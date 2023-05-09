import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import { useNavigation } from '@react-navigation/native'
// import Checkbox from 'expo-checkbox';

const RoomsDetail = ({ datas }) => {
    const { rooms, adult, child, selectedRooms, setSelectedRooms } = useContext(Context)
    const [isChecked, setChecked] = useState([]);
    const navigation = useNavigation()

    const StoreRoom = (ids)=>{
        const data = datas.filter((val)=>val.id === ids)
        setSelectedRooms([...selectedRooms,data])
        
    }
    

    return (
        <>
        <View style={style.main}>
            {
                datas.map((val) => {
                    return (
                        <View>
                            <Text style={style.number}>{val.id}</Text>
                            <Pressable onPress={()=>StoreRoom(val.id)}>
                            <View style={{...style.box,borderColor: isChecked === val.id? "#FFC72C" : "grey",backgroundColor: isChecked.ids === val.id ?"#003580":null}}></View>
                            </Pressable>
                        </View>
                    )
                })
            }


        </View>
            <Pressable style={style.btn} onPress={()=>navigation.navigate("Rooms",{rooms:datas})}>
                <Text style={{color:"#FFC72C"}}>Room Detail</Text>
            </Pressable>
        </>
    )
}
const style = StyleSheet.create({
    main: {
        flex: 1,
        display: "flex",
        gap: 10,
        flexDirection: "row"
    },
    checkbox: {
        margin: 8
    },
    number:{
        justifyContent:"center",
        alignSelf:"center"
    },
    box:{
        width:20,
        height:20,
        borderWidth:1,
        marginTop:5,
        justifyContent:"center",
        alignSelf:"center",
    },
    btn:{
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
        backgroundColor:"#003580",
        width:100,
        padding:10,
        borderRadius:15,
        borderColor:"#FFC72C",
        borderWidth:2
    }
})
export default RoomsDetail