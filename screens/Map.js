import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { data } from '../Data/HotelData';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Map = ({ route }) => {
    const { location } = route.params
    const navigation = useNavigation()
    
    return (
        <View style={style.main}>
            {
                data.filter((val) => val.place === location).map((datas) => {
                    return (
                        <MapView
                            // onRegionChange = {(Region) => getCoordinates(Region)}
                            style={{ height: "100%", width: "100%" }}
                            initialRegion={{
                                latitude: datas.cityLat,
                                longitude: datas.cityLan,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,   
                            }}
                        >
                            {
                                datas.properties.map((vals) => {
                                    return (
                                        <Marker
                                            coordinate={{ latitude:vals.latitude, longitude:vals.longitude }}
                                            key={vals.id}
                                            title={vals.name}
                                        />
                                    )
                                })
                            }
                        </MapView>
                    )
                })
            }

            <Pressable style={style.back} onPress={()=>navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#FFc72C" />
            </Pressable>

        </View>
    )
}
const style = StyleSheet.create({
    main: {
        flex: 1
    },
    back:{
        backgroundColor:"#003580",
        height:50,
        width:50,
        position:"absolute",
        top:60,
        left:30,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
        borderColor:"#FFc72C",
        borderWidth:2
    }
})
export default Map