import { View, Text, ScrollView, Image, Pressable } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { data } from '../Data/HotelData'
import { StyleSheet } from 'react-native'

const PropertyType = ({ route }) => {
    const { type } = route.params
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
            title: type + "s",
            headerTitleStyle: {
                fontSize: 20,
                fontWeight: "bold",
                color: "white"
            },
            headerStyle: {
                backgroundColor: "#003580",
                height: 110,
                borderBottomColor: "transparent",
                shadowColor: "transparent"
            },
        })
    }, [])


    return (
        <ScrollView style={style.main} showsVerticalScrollIndicator={false}>
            {
                data.map((vals) => {
                    return (
                        <>
                            <View style={{ justifyContent: "center", alignSelf: "center", marginTop: 15 }}>
                                <Text style={{ fontSize: 20, fontWeight: "bold" }}>{vals.place}</Text>
                            </View>
                            {
                                vals.properties.filter((val) => val.type === type).map((val) => {
                                    return (
                                        <>
                                            {
                                                val.length === 0 ?
                                                    <>
                                                        <View>
                                                            <Text>No Data</Text>
                                                        </View>
                                                    </> : <>
                                                        <Pressable style={style.mains} onPress={() => alert("This is to show available datas, you cannot navigate")}>

                                                            <View style={{ flex: 1, padding: 5, }}>
                                                                <Image style={{ height: "100%", width: "100%", borderRadius: 10 }} source={{ uri: val.image }} />
                                                            </View>

                                                            <View style={style.content}>
                                                                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", }}>
                                                                    <Text style={{ marginLeft: 7, fontSize: 20, fontWeight: "bold" }}>{val.name}</Text>

                                                                </View>

                                                                <View style={{ marginLeft: 7, gap: 5 }}>
                                                                    <Text style={{ fontWeight: "400" }}>Available Rooms: <Text style={{ color: "red", fontWeight: "500" }}>{val.rooms.length}</Text></Text>
                                                                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
                                                                        <View style={{ backgroundColor: "green", borderRadius: 50, width: 25, height: 25 }}><Text style={{ color: "white", fontSize: 10, alignSelf: "center", marginTop: 4 }}>{val.rating}</Text></View>
                                                                        <Text style={{ marginRight: 7, fontSize: 15, alignSelf: "center", color: "red" }}>₹{val.newPrice}</Text>
                                                                    </View>
                                                                </View>
                                                            </View>

                                                        </Pressable>
                                                    </>
                                            }
                                        </>
                                    )
                                })
                            }
                        </>
                    )
                })
            }
        </ScrollView>
    )
}
const style = StyleSheet.create({
    main: {
        flex: 1,
        margin: 10
    },
    mains: {
        margin: 20,
        height: 150,
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: 15,
        display: "flex",
        flexDirection: "row",
        flex: 1
    },
    content: {
        flex: 1,
        justifyContent: "space-evenly"
    }
})
export default PropertyType