import { useEffect, useState } from "react"
import HeroBg from "./components/HeroBg"
import Navbar from "./components/Navbar"
import Players from "./components/Players"
import axios from "axios"
import Player from "./components/player"
import { ToastContainer, toast } from 'react-toastify';
function App() {
   const claimCoins = () =>  toast.success("Congrats! You claimed 6 crore coins 🎉", {theme: "colored"});
   const warning = () => toast.error("Free credit already claimed.",{theme: 'colored' })
  const [players, setPlayers] = useState ([])
  const [coin, setCoin] = useState(0)
  const [notify, setNotify] = useState(false)
  const getCoin = ()=>{
    if(!notify){
       claimCoins();
       setNotify(true)
    }
    else{
        warning()
    }
   
    setCoin(60000000)
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
    <Players />
    <Player />
    <ToastContainer />
    </>
  )
}

export default App
