import { View, Text } from 'react-native'
import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import { Pressable } from 'react-native'
import HotelDetails from '../components/HotelDetails'
import RoomsDetail from '../components/RoomsDetail'
import AmountDetail from '../components/AmountDetail'
import Service from '../components/Service'
import { AntDesign } from '@expo/vector-icons';
import { Context } from '../context/Context'

const SingleHotel = ({route}) => {
    const {datas} = route.params
    const[save,setSave] = useState(false)
    const navigation = useNavigation()
    const{saveData,setSaveData} = useContext(Context)
    useLayoutEffect(()=>{
        navigation.setOptions({
            title: datas.name,
            headerTitleStyle:{
                fontSize:20,
                fontWeight:"bold",
                color:"white",
              },
              headerStyle:{
                backgroundColor:"#003580",
                height:110,
                borderBottomColor:"transparent",
                shadowColor:"transparent"
              },
        })
    },[])

    const Savedata = (name)=>{
        setSave(true)
       const data = saveData.find((val)=>val.name === name)
        if(data){
            alert("Already Saved")
        }else{
            return setSaveData([...saveData,datas])
        }
    }
    const Remove = (name)=>{
        setSave(false)
        const remove = saveData.filter((val)=>val.name !== name)
        setSaveData(remove)
    }

  return (
    <ScrollView style={style.main} showsVerticalScrollIndicator={false}>
        <View style={{position:"absolute",flex:1,top:10,zIndex:11,left:20}}>
        {
            !save? <><AntDesign name="hearto" size={24} color="red" onPress={()=>Savedata(datas.name)} /></>:
            <><AntDesign name="heart" size={24} color="red" onPress={()=>Remove(datas.name)} /></>
        }
            
            
        </View>
        <Image style={style.image} source={{uri:datas.image}}/>
        <ScrollView style={style.pic} horizontal>
            
            {
                datas.photos.map((val)=>{
                   return( 
                    <Pressable onPress={()=>navigation.navigate("image",{image:val.image})}>
                        <Image style={style.images} source={{uri:val.image}}/>
                    </Pressable>
                   )
                })
                
            }
            
        </ScrollView>
        
        <View style={{borderColor:"grey",borderWidth:1,marginTop:20,borderRadius:15,padding:10}}>
            <HotelDetails datas={datas}/>
        </View>

        <View style={{borderColor:"grey",borderWidth:1,marginTop:20,borderRadius:15,padding:10}}>
            <Service/>
        </View>

        <View style={{borderColor:"grey",borderWidth:1,marginTop:20,borderRadius:15,padding:10}}>
            <RoomsDetail datas={datas.rooms}/>
        </View>
        <View style={{borderColor:"grey",borderWidth:1,marginTop:20,borderRadius:15,padding:10,marginBottom:20}}>
            <AmountDetail datas={datas}/>
        </View>

        <Pressable style={style.btn} onPress={()=>navigation.navigate("Checkout",{data:datas})}>
            <Text style={{color:"#FFC72C",justifyContent:"center",alignItems:"center",alignSelf:"center"}}>Proceed</Text>
        </Pressable>

    </ScrollView>
  )
}
const style = StyleSheet.create({
    main:{
        flex:1,
        margin:10,
        
    },
    image:{
        height:300,
        width:"100%",
        
    },
    images:{
        width:70,
        height:70,
        marginLeft:20
    },
    pic:{
        marginTop:10,
        display:"flex",
        marginLeft:-10
    },
    btn:{
        backgroundColor:"#003580",
        padding:10,
        margin:10,
        borderRadius:20,
        borderColor:"#FFC72C",
        borderWidth:2
    }

})
export default SingleHotel