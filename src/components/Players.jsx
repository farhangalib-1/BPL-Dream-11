import { useState } from "react"
import SinglePlayer from "./SinglePlayer"
import { ToastContainer, toast } from 'react-toastify';
const Players = ({players, coin, setCoin}) => {
  const [heading, setHeading] = useState('Available Players')
  const [isSelect, setIsSelect] = useState(false)
  const btnClick = (e)=>{
        const allBtns = document.querySelectorAll('.btn')
        for(let btn of allBtns ){
            btn.classList.remove('bg-[#E7FE29]')
            btn.classList.remove('font-bold')
            btn.classList.add('text-gray-600')
        }
       if(e.target.id === 'btn-1'){
          setHeading('Available Players')
       }
       else{
        setHeading('Selected Players')
       }
       const selectedBtn = document.getElementById(e.target.id)
       selectedBtn.classList.add('bg-[#E7FE29]')
       selectedBtn.classList.add('font-bold') 
    }
  const warn = () => toast.error("You have no coins left.",{theme: 'colored' })
  const warn1 = ()=> toast.error("You need more coins to continue.",{theme: 'colored' })
  const success = () => toast.success("Player added successfully 🎉", {theme: "colored"});
    
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
        const remainingCoin = coin - selectPrice;
        setCoin(remainingCoin);
      }
  }
  
  return (
    <div className="w-10/12 mx-auto mt-25 mb-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-bold text-2xl">{heading}</h1>
        <div className="allbutton border border-gray-300 rounded-2xl">
        <button id="btn-1" onClick={(e)=>{btnClick(e)}} className="btn font-bold bg-[#E7FE29] px-3.5 py-3 rounded-l-2xl cursor-pointer">Available</button>
        <button id="btn-2" onClick={(e)=>{btnClick(e)}} className="btn  text-gray-600 px-3.5 py-3 rounded-r-2xl cursor-pointer">Selected</button>
        </div>
      </div>
      {heading === 'Available Players' ?  <div className="grid grid-cols-3 gap-4">
    {
      players.map((player, idx)=> <SinglePlayer id={idx} key={idx} name={player.name} image={player.image} price = {player.price} checkCoin={(e)=>checkCoin(e)} country={player.country} battingStyle={player.battingStyle} role = {player.role} ratings={player.rating} />)
    }</div>  : <div>Selected Player</div>
    }
    </div>
  )
}
export default Players
