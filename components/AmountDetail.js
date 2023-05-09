import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { Context } from '../context/Context'

const AmountDetail = ({ datas }) => {
    const { adult,child,startDate,totalDay,setTotalDay} = useContext(Context)
        const dateone = (startDate.startDate)
        const datetwo = startDate.endDate
        const firstDate = datetwo.split("/");
        const secondDate = dateone.split("/");
        const totalDays = secondDate[2] - firstDate[2]
        const days = Math.abs(totalDays)

        // const startingdata = startDate.startDate
        // const dArr = startingdata.split("/");  
        // const first =  dArr[2]+ "/" +dArr[1]+ "/" +dArr[0]
        // const firsts = new Date(first)

        // const endingdata = startDate.endDate
        // const dArr1 = endingdata.split("/");  
        // const second =  dArr1[2]+ "/" +dArr1[1]+ "/" +dArr1[0]
        // const seconds = new Date(second)

        // const firstmill = firsts.getTime()
        // const secondmill = seconds.getTime()
        // const diff = secondmill - firstmill
        // const daymill = 24 * 60 * 60 * 1000
        // const day = Math.round(diff / daymill)
        
        
    useEffect(()=>{
        setTotalDay(days)
    },[])

    return (
        <>
            <View style={style.main}>
                <View style={style.sub}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>Per Day / Person :</Text>
                    <Text style={{ fontWeight: "500", color: "red", fontSize: 15 }}>₹{datas.newPrice}</Text>
                </View>
                <View style={style.sub}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>Per Child :</Text>
                    <Text style={{ fontWeight: "500", color: "red", fontSize: 15 }}>₹{Math.floor(datas.newPrice / 2)}</Text>
                </View>
                <View style={style.amountdiv}>
                    <View style={{ margin: 10 }}>
                        <Text style={style.text}>Your Amount Details.</Text>
                        <View style={{display:"flex",justifyContent:"space-between",flexDirection:"row",marginLeft:10,marginRight:10}}>
                            <Text>Person :</Text>
                            <Text style={{color:"grey"}}>x{adult}</Text>
                        </View>
                        <View style={{display:"flex",justifyContent:"space-between",flexDirection:"row",marginLeft:10,marginRight:10}}>
                            <Text>Child :</Text>
                            <Text style={{color:"grey"}}>{child}</Text>
                        </View>
                        <View style={{display:"flex",justifyContent:"space-between",flexDirection:"row",marginLeft:10,marginRight:10}}>
                            <Text>Total Days :</Text>
                            <Text style={{color:"grey"}}>{totalDay}</Text>
                        </View>
                        <View style={{display:"flex",justifyContent:"space-between",flexDirection:"row",marginLeft:10,marginRight:10}}>
                            <Text style={{fontWeight:"bold"}}>Subtotal :</Text>
                            <Text style={{color:"red",fontWeight:"bold"}}>₹{(datas.newPrice * adult * totalDay) + ((datas.newPrice / 2) * (child))}</Text>
                        </View>

                    </View>
                </View>
            </View>

        </>
    )
}
const style = StyleSheet.create({
    main: {
        flex: 1
    },
    sub: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between", marginLeft: 10, marginRight: 10
    },
    amountdiv: {
        width: "100%",
        borderRadius: 10,
        marginTop: 10,
        borderColor: "grey",
        borderWidth: 1
    },
    text: {
        fontWeight: "bold",
        alignSelf: "center",
        fontStyle: "italic"
    }
})

export default AmountDetail