import { View, Text, Button } from 'react-native'
import React, { useContext, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import Header from '../components/Header';
import { ScrollView } from 'react-native';
import { Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { Context } from '../context/Context';
import { BottomModal, SlideAnimation, ModalContent, ModalFooter, ModalButton, ModalTitle } from 'react-native-modals';
import DatePicker from 'react-native-date-ranges';


const Home = () => {

  const navigation = useNavigation()
  const [model,setModel] = useState(false)
  const {adult,setAdult,location,child,setChild,rooms,setRooms,
    endDate,setEndDate,setStartDate} = useContext(Context)
    const[changeAdult,setChangeAdult] = useState(adult)
    const[changeChild,setChangeChild] = useState(child)
    const[changeRooms,setChangeRoom] = useState(rooms)
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:true,
      title:"BookMate",
      headerTitleStyle:{
        fontSize:20,
        fontWeight:"bold",
        color:"white"
      },
      headerStyle:{
        backgroundColor:"#003580",
        height:110,
        borderBottomColor:"transparent",
        shadowColor:"transparent"
      },
      headerRight : () => (
        <Ionicons name="notifications-outline" size={24} color="white" style={{marginRight:20}}/>
      )
    })
  },[])

  const Search =()=>{
    if(location === ""){
      return alert("Enter your location..")
    }else if(endDate === ""){
      return alert("Enter your dates")
    }else{
      navigation.navigate("Stay")
    }
  }

  customButton = (onConfirm) => (
    <Button
        onPress={onConfirm}
        style={{ container:{ width:'80%', marginHorizontal:'3%' }, text:{ fontSize: 20 },color:"yellow" }}
        
        title='Apply'
    />
)

  return (
    <View style={{}}>
      <Header/>

      <ScrollView style={{marginTop:20}} vertical>
        <View style={style.main}>
          <Pressable style={style.firstfield} onPress={()=>navigation.navigate("search screen")}>
            <AntDesign name="search1" size={20} color="black" style={style.icon} />
            <TextInput value={location} placeholder="Enter your Location" onFocus={()=>navigation.navigate("search screen")} />
          </Pressable>

          <Pressable style={style.field}>
            <AntDesign name="calendar" size={20} color="black" style={{alignSelf:"center"}} />
            <DatePicker
              style={ { width: 250, height: 30, borderRadius:0,borderWidth:0 } }
              customStyles = { {
                  placeholderText:{ fontSize:15,flexDirection:"row",alignItems:"center",marginRight:"auto" }   ,
                  headerStyle:{
                    backgroundColor:"#003580",
                  },
                  contentText:{
                    fontSize:15,
                    marginRight:"auto"
                  }
              } } 
              selectedBgColor="red"
              centerAlign 
              onConfirm={(start,end)=>{
              setStartDate(start)
              setEndDate(end)}}
              allowFontScaling = {false} 
              customButton = {customButton}
              placeholder={"Select Your Dates"}
              mode={'range'}
              markText=" "
            />
          </Pressable>

          <Pressable style={style.field} onPress={()=>setModel(!model)}>
            <Ionicons name="person-outline" size={20} color="black" />
            <Text >Adult <Text style={{color:"red", fontWeight:"bold"}}>{adult}</Text> Children <Text style={{color:"red", fontWeight:"bold"}}>{child}</Text> Rooms <Text style={{color:"red", fontWeight:"bold"}}>{rooms}</Text></Text>
          </Pressable>

          <Pressable style={style.button} onPress={Search}  >
            <Text style={{color:"white"}}>Search</Text>
          </Pressable>
        </View>

        <Text style={{marginLeft:20,fontSize:17,fontWeight:"500"}}>Travel more spend less</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Pressable style={{width:200,height:150,marginTop:15,backgroundColor:"#003580",borderRadius:20
          ,padding:20,marginLeft:20}}>
            <Text style={{fontSize:15,fontWeight:"bold",color:"white",marginTop:5}}>Genius</Text>
            <Text style={{fontSize:13,fontWeight:"400",color:"white",marginTop:3}}>You are at genius level, one at our loyality program.</Text>
          </Pressable>

          <Pressable style={{width:200,height:150,marginTop:15,borderRadius:20
          ,padding:20,marginLeft:20,borderColor:"#003580",borderWidth:2,backgroundColor:"#D3D3D3"}}>
            <Text style={{fontSize:15,fontWeight:"bold",color:"black",marginTop:5}}>10% discount</Text>
            <Text style={{fontSize:13,fontWeight:"400",color:"black",marginTop:3}}>Enjoy!! discount at participating at properties worldwide.</Text>
          </Pressable>

          <Pressable style={{width:200,height:150,marginTop:15,backgroundColor:"#D3D3D3",borderRadius:20
          ,padding:20,marginLeft:20,borderColor:"#003580",borderWidth:2}}>
            <Text style={{fontSize:15,fontWeight:"bold",color:"black",marginTop:5}}>15% discount</Text>
            <Text style={{fontSize:13,fontWeight:"400",color:"black",marginTop:3}}>Complete 5 stay to unlock new level.</Text>
          </Pressable>
        </ScrollView>
            <View style={{display:"flex",alignItems:"center",marginTop:30}}>
              <Text style={{fontSize:25,color:"#003580"}}>BookMate<Text>.</Text><Text style={{color:"#add8e6"}}>com</Text></Text>
            </View>
      </ScrollView>
                
      <BottomModal
          swipeThreshold={300}
            onBackdropPress={()=>setModel(!model)}
            visible={model}
            modalAnimation={new SlideAnimation({
            slideFrom: 'bottom',
            })}
            onHardwareBackPress={()=>setModel(!model)}
            onTouchOutside={()=>setModel(!model)}
            swipeDirection={["up","down"]}
            footer={<ModalFooter>
              <ModalButton onPress={()=>{setModel(!model)
              setAdult(changeAdult)
              setChild(changeChild)
              setRooms(changeRooms)}} text='Apply' style={{backgroundColor:"white"}}/>
            </ModalFooter>}
            modalTitle={<ModalTitle title='Select Guests and Rooms'/>}
          >
            <ModalContent>
              <View style={{display:"flex",gap:20,justifyContent:"space-around",height:150,marginTop:15}}>
                  <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginRight:20}}>
                      <Text>Adults</Text>
                      <View style={{display:"flex", flexDirection:"row",gap:15}}>
                        <Pressable onPress={()=>setChangeAdult(changeAdult-1)}><View style={{backgroundColor:"#003580",padding:7,width:25,alignItems:"center",borderRadius:5,display: changeAdult===1 ? "none" : null}}><Text style={{color:"#FFC72C"}}>-</Text></View></Pressable>
                          <View style={{alignSelf:"center"}}><Text>{changeAdult}</Text></View>
                        <Pressable onPress={()=>setChangeAdult(changeAdult+1)}><View style={{backgroundColor:"#003580",padding:7,width:25,alignItems:"center",borderRadius:5,display: changeAdult===10 ? "none" : null}}><Text style={{color:"#FFC72C"}}>+</Text></View></Pressable>
                        </View>
                  </View>

                  <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginRight:20}}>
                  <Text>Children</Text>
                      <View style={{display:"flex", flexDirection:"row",gap:15}}>
                        <Pressable onPress={()=>setChangeChild(changeChild-1)}><View style={{backgroundColor:"#003580",padding:7,width:25,alignItems:"center",borderRadius:5,display: changeChild===0 ? "none" : null}}><Text style={{color:"#FFC72C"}}>-</Text></View></Pressable>
                          <View style={{alignSelf:"center"}}><Text>{changeChild}</Text></View>
                        <Pressable onPress={()=>setChangeChild(changeChild+1)}><View style={{backgroundColor:"#003580",padding:7,width:25,alignItems:"center",borderRadius:5,display: changeChild===10 ? "none" : null}}><Text style={{color:"#FFC72C"}}>+</Text></View></Pressable>
                      </View>
                  </View>

                  <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginRight:20}}>
                  <Text>Rooms</Text>
                      <View style={{display:"flex", flexDirection:"row",gap:15}}>
                      <Pressable onPress={()=>setChangeRoom(changeRooms-1)}><View style={{backgroundColor:"#003580",padding:7,width:25,alignItems:"center",borderRadius:5,display: changeRooms===1 ? "none" : null}}><Text style={{color:"#FFC72C"}}>-</Text></View></Pressable>
                          <View style={{alignSelf:"center"}}><Text>{changeRooms}</Text></View> 
                          <Pressable onPress={()=>setChangeRoom(changeRooms+1)}><View style={{backgroundColor:"#003580",padding:7,width:25,alignItems:"center",borderRadius:5,display: changeRooms===10 ? "none" : null}}><Text style={{color:"#FFC72C"}}>+</Text></View></Pressable>
                      </View>
                  </View>
              </View>
            </ModalContent>
        </BottomModal>

    </View>
  )
}

const style = StyleSheet.create({
  main:{
    margin:20,
    borderColor:"#FFC72C",
    borderWidth:2,
    borderRadius:7,
  },
  firstfield:{
    flexDirection:"row",
    padding:10,
    gap:7,
    borderColor:"#FFc72C",
    borderWidth:2,
    borderTopLeftRadius:7,
    borderTopRightRadius:7
  },
  field:{
    flexDirection:"row",
    padding:10,
    gap:7,
    borderColor:"#FFc72C",
    borderWidth:2
  },
  icon:{
    display:"flex",
    alignSelf:"center"
  },
  button:{
    padding:10,
    gap:7,
    borderColor:"#FFc72C",
    borderWidth:2,
    alignItems:"center",
    backgroundColor:"#003580",
    borderBottomLeftRadius:7,
    borderBottomRightRadius:7
  }
})
export default Home