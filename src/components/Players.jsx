import { useState } from "react"
import SinglePlayer from "./SinglePlayer"
import Selected from "./Selected";
const Players = ({players, coin, setCoin, selectedPlayers, setSelectedPlayers}) => {
  const [activeTab, setActiveTab] = useState('available')
  const showAvailable = () => {
  setHeading('Available Players')
}
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
        setHeading(`Selected Players`)
       }
       const selectedBtn = document.getElementById(e.target.id)
       selectedBtn.classList.add('bg-[#E7FE29]')
       selectedBtn.classList.add('font-bold') 
    }
  return (
    <div className="w-10/12 mx-auto mt-25 mb-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="font-bold text-lg md:text-2xl">{activeTab === 'available' ? 'Available Players' : 'Selected Players'}</h1>
        <div className="allbutton border border-gray-300 rounded-2xl">
        <button onClick={() => setActiveTab('available')}
  className={`md:px-3.5 md:py-3 px-2 py-1.5 rounded-l-2xl cursor-pointer text-[12px] md:text-[16px] 
  ${activeTab === 'available' ? 'bg-[#E7FE29] font-bold' : 'text-gray-600'}`}>Available</button>
        <button  onClick={() => setActiveTab('selected')}
  className={`md:px-3.5 md:py-3 px-2 py-1.5 rounded-r-2xl cursor-pointer text-[12px] md:text-[16px] 
  ${activeTab === 'selected' ? 'bg-[#E7FE29] font-bold' : 'text-gray-600'}`}>Selected ({selectedPlayers.length}) </button>
        </div>
      </div>
      {activeTab === 'available'?  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {
      players.map((player, idx)=> <SinglePlayer player={player} players={players} coin={coin} setCoin={setCoin}  id={idx} key={idx} name={player.name} image={player.image} price = {player.price} checkCoin={(e)=>checkCoin(e)} country={player.country} battingStyle={player.battingStyle} role = {player.role} ratings={player.rating} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} />)
    }</div> : <Selected selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} showAvailable={() => setActiveTab('available')} />
    }
    </div>
  )
}
export default Players
