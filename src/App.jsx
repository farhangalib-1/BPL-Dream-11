import { useEffect, useState } from "react"
import HeroBg from "./components/HeroBg"
import Navbar from "./components/Navbar"
import Players from "./components/Players"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import SinglePlayer from "./components/SinglePlayer"
function App() {
  const claimCoins = () =>  toast.success("Congrats! You claimed 1 crore coins 🎉", {theme: "colored"});
  const warning = () => toast.error("Free credit already claimed.",{theme: 'colored' })
  const warn = () => toast.error("You have no coins left.",{theme: 'colored' })
  const warn1 = ()=> toast.error("You need more coins to continue.",{theme: 'colored' })
  const success = () => toast.success("Player added successfully 🎉", {theme: "colored"});
  const [players, setPlayers] = useState ([])
  const [coin, setCoin] = useState(0)
  const [notify, setNotify] = useState(false)
  const[price, setPrice] = useState(0)
  const checkCoin = (e)=>{
      let selectPrice = 0
      const selectProductId = e.target.id
      const allPrice =  players.map(el=> el.price)
      
      selectPrice = allPrice[selectProductId]
      
      if(coin<=0){
          warn();
      }
      else if(coin<selectPrice){
        warn1();
      }
      else{
        success();
        const remainingCoin = coin - selectPrice
        setCoin(remainingCoin);
      }
      
     
      
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
    <Players />
    <ToastContainer />
    <div className="w-10/12 mx-auto grid grid-cols-3 gap-4">
    {
      players.map((player, idx)=> <SinglePlayer id={idx} key={idx} name={player.name} image={player.image} price = {player.price} checkCoin={(e)=>checkCoin(e)} />)
    }
    </div>
    
    </>
  )
}

export default App
