import { useState } from "react"
import SinglePlayer from "./SinglePlayer"
import Selected from "./Selected";
const Players = ({players, coin, setCoin, selectedPlayers, setSelectedPlayers}) => {
  const [heading, setHeading] = useState('Available Players')
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
        setHeading(`Selected Players ${selectedPlayers.length} / ${players.length} `)
       }
       const selectedBtn = document.getElementById(e.target.id)
       selectedBtn.classList.add('bg-[#E7FE29]')
       selectedBtn.classList.add('font-bold') 
    }
  return (
    <div className="w-10/12 mx-auto mt-25 mb-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-bold text-2xl">{heading}</h1>
        <div className="allbutton border border-gray-300 rounded-2xl">
        <button id="btn-1" onClick={(e)=>{btnClick(e)}} className="btn font-bold bg-[#E7FE29] px-3.5 py-3 rounded-l-2xl cursor-pointer">Available</button>
        <button id="btn-2" onClick={(e)=>{btnClick(e)}} className="btn  text-gray-600 px-3.5 py-3 rounded-r-2xl cursor-pointer">Selected ({selectedPlayers.length}) </button>
        </div>
      </div>
      {heading === 'Available Players' ?  <div className="grid grid-cols-3 gap-4">
    {
      players.map((player, idx)=> <SinglePlayer player={player} players={players} coin={coin} setCoin={setCoin}  id={idx} key={idx} name={player.name} image={player.image} price = {player.price} checkCoin={(e)=>checkCoin(e)} country={player.country} battingStyle={player.battingStyle} role = {player.role} ratings={player.rating} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} />)
    }</div> : <Selected selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} />
    }
    </div>
  )
}
export default Players
