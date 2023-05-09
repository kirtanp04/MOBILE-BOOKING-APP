import { createContext, useState } from "react";


const Context = createContext()

const ContextFunction = ({children})=>{
    const[location,setLocation] = useState("")
    const[adult,setAdult] = useState(1)
    const[child,setChild] = useState(0)
    const[rooms,setRooms] = useState(1)
    const[startDate,setStartDate] = useState("")
    const[endDate,setEndDate] = useState("")
    const[totalDay,setTotalDay] = useState("")
    const[userName,setUserName] = useState("")
    const[userEmail,setUserEmail] = useState("")
    const[userNumber,setUserNumber] = useState("")
    const[userAddress,setUserAddress] = useState("")
    const[selectedRooms,setSelectedRooms] = useState([])
    const[userCheckoutRoom,setUserCheckoutRoom] = useState([])
    const[saveData,setSaveData] = useState([])
    return(
        <Context.Provider value={{saveData,setSaveData,userCheckoutRoom,setUserCheckoutRoom,userName,setUserName,userEmail,setUserEmail,userNumber,setUserNumber,
        userAddress,setUserAddress,location,setLocation,adult,setAdult,
        child,setChild,rooms,setRooms,startDate,setStartDate,
        endDate,setEndDate,selectedRooms,setSelectedRooms,totalDay,setTotalDay}}>{children}</Context.Provider>
    )
}
export {Context, ContextFunction}