import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Checkout = ({ route }) => {
    const { data } = route.params
    const { userName, setUserName, userEmail, setUserEmail, userNumber, setUserNumber,
        userAddress, setUserAddress, userCheckoutRoom, setUserCheckoutRoom } = useContext(Context)
    const [show, setShow] = useState(false)
    const [num, setNum] = useState(6)
    const navigation = useNavigation()

    

    const Checkout = async() => {
        if (userName === "" && userEmail === "" && userNumber === "" && userAddress === "") {
            return alert("All details should not be empty")
        } else {
            setShow(true)
            
            setTimeout(()=>{
                navigation.navigate("Stay")
            },6000)
            await AsyncStorage.setItem("userBookedData",JSON.stringify(userCheckoutRoom))
        }
    }
    
    useEffect(()=>{
        setUserCheckoutRoom([...userCheckoutRoom, data])
        // setInterval(function(){
        //     setNum(num-1)
        // },1000)
    },[])

    return (
        <View style={style.main}>
            <View style={style.sub}>
                {
                    !show ?
                        <>
                            <View style={style.block}>
                                <Text style={style.name}>Name</Text>
                                <TextInput
                                    value={userName}
                                    onChangeText={(text) => setUserName(text)}
                                    style={style.input}
                                    placeholder="xyz.."
                                    selectionColor="blue"
                                    inputMode="search"
                                />
                            </View>

                            <View style={style.block}>
                                <Text style={style.name}>Email</Text>
                                <TextInput
                                    value={userEmail}
                                    onChangeText={(text) => setUserEmail(text)}
                                    style={style.input}
                                    placeholder="example@gmail.com"
                                    selectionColor="blue"
                                    inputMode="email"
                                />
                            </View>

                            <View style={style.block}>
                                <Text style={style.name}>Mobile number</Text>
                                <TextInput
                                    value={userNumber}
                                    onChangeText={(text) => setUserNumber(text)}
                                    style={style.input}
                                    placeholder="91+ 1234567890"
                                    selectionColor="blue"
                                    inputMode="numeric"
                                />
                            </View>

                            <View style={style.block}>
                                <Text style={style.name}>Address</Text>
                                <TextInput
                                    value={userAddress}
                                    onChangeText={(text) => setUserAddress(text)}
                                    style={style.input}
                                    placeholder="xyz.."
                                    selectionColor="blue"
                                    inputMode="search"
                                />
                            </View>

                            <Pressable style={style.btn} onPress={Checkout}>
                                <Text style={{ color: "#FFC72C", justifyContent: "center", alignItems: "center", alignSelf: "center" }}>Checkout</Text>
                            </Pressable>
                        </> :
                        <>
                            <View style={style.sub}>
                                <Text style={style.success}>Success</Text>
                                <Text style={style.texts}>Navigating to Home Screen</Text>
                                <Text style={{
                                    fontSize: 30, justifyContent: "center",
                                    alignSelf: "center", marginTop: 10, fontWeight: "bold"
                                }}>{num}s</Text>
                            </View>
                        </>
                }


            </View>
        </View>
    )
}
const style = StyleSheet.create({
    main: {
        flex: 1,
        margin: 15
    },
    sub: {
        margin: 10, flex: 1
    },
    block: {
        marginTop: 15
    },
    name: {
        fontWeight: "bold",
        fontSize: 20
    },
    input: {
        width: "100%",
        borderColor: "grey",
        borderWidth: 2,
        marginTop: 10,
        height: 50,
        borderRadius: 10,
        fontSize: 17,
        padding: 10
    },
    btn: {
        backgroundColor: "#003580",
        padding: 10,
        margin: 10,
        borderRadius: 20,
        borderColor: "#FFC72C",
        borderWidth: 2,
        marginTop: 20
    },
    success: {
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 20,
        fontSize: 40,
        color: "green"
    },
    texts: {
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 15,
        fontSize: 20
    }
})
export default Checkout 