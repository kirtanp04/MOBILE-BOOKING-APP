import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { StyleSheet,ScrollView } from 'react-native'

const RoomDetail = ({ route }) => {
    const { rooms } = route.params
    return (
        <ScrollView style={style.main}>
            {
                rooms.map((val) => {
                    return (
                        <View style={style.sub}>
                            <View style={{ margin: 10, gap: 6 }}>
                                <Text style={style.text}>Room Id: <Text style={{ fontWeight: "500", color: "red" }}>{val.id}</Text></Text>
                                <Text style={style.text}>Room Type: <Text style={{ fontWeight: "500", color: "grey", fontStyle: "italic" }}>{val.name}</Text></Text>
                                <Text style={style.text}>Room Size: <Text style={{ fontWeight: "500", color: "grey", fontStyle: "italic" }}>{val.size}</Text></Text>
                                <Text style={style.text}>Refundable: <Text style={{ fontWeight: "500", color: val.refundable === "refundable"? "green" :"red", fontStyle: "italic" }}>{val.refundable}</Text></Text>
                                <Text style={style.text}>Payment: <Text style={{ fontWeight: "500", color: "grey", fontStyle: "italic" }}>{val.payment}</Text></Text>
                                <Text style={style.text}>Room Bed: <Text style={{ fontWeight: "500", color: "grey", fontStyle: "italic" }}>{val.bed}</Text></Text>
                            </View>
                        </View>
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
    sub: {
        width: "100%",
        borderColor: "grey",
        borderWidth: 2,
        borderRadius: 15,
        marginTop:10
    },
    text: {
        fontSize: 15,
        fontWeight: "bold"
    }
})

export default RoomDetail