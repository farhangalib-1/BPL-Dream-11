import { useEffect, useState } from "react"
import HeroBg from "./components/HeroBg"
import Navbar from "./components/Navbar"
import Players from "./components/Players"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const claimCoins = () =>  toast.success("Congrats! You claimed 1 crore coins 🎉", {theme: "colored"});
  const warning = () => toast.error("Free credit already claimed.",{theme: 'colored' })
  const warn = () => toast.error("You have no coins left.",{theme: 'colored' })
  const warn1 = ()=> toast.error("You need more coins to continue.",{theme: 'colored' })
  const success = () => toast.success("Player added successfully 🎉", {theme: "colored"});
  const [players, setPlayers] = useState ([])
  const [coin, setCoin] = useState(0)
  const [notify, setNotify] = useState(false)
  const [available, setAvailable] = useState(false)
  const showAvailable = () =>{
    setAvailable(true)
  }
  
  const getCoin = ()=>{
    if(!notify){
       claimCoins();
       setNotify(true)
    }
    else{
        warning();
    }
    setCoin(10000000);
  }
const playersData = async () =>{
    const resp = await axios.get("./player.json")
    setPlayers(resp.data)
}
useEffect(()=>{
  playersData()
    
}, [])
  return (
    <>
    <Navbar coin={coin} />
    <HeroBg getCoin ={getCoin} />
    <Players players={players} coin={coin} setCoin={setCoin} />
    <ToastContainer />
   
    </>
  )
}

export default App
