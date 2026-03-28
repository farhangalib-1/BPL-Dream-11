import { Trash2 } from "lucide-react"
const Selected = ({selectedPlayers, setSelectedPlayers, showAvailable}) => {
  const deleteData = (name) => {
  const filterData = selectedPlayers.filter(p => p.name !== name)
  setSelectedPlayers(filterData)
}
  return (
    <>
    {
      selectedPlayers.length === 0 ? 
      <div className="">
        <h1 className="text-center font-semibold text-gray-400 text-xl md:text-2xl">No player Selected Yet </h1>
        <p className="text-center text-gray-400">Go to available tab to select players</p>
      </div>: 
      <div>
      {
        selectedPlayers.map((el, idx)=>
          <div key={idx} className="border mb-4 rounded-2xl border-gray-200 p-6">
            <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
            <div>
            <img className="w-30 h-30 rounded-2xl" src={el.image} alt="" />
            </div>
            <div className="">
            <h1 className="text-2xl font-bold">{el.name}</h1>
            <h1>{el.battingStyle}</h1>
            </div>
            </div>
           <button onClick={()=>{deleteData(el.name)}} className="cursor-pointer"><Trash2 color="red" /></button> 
          </div>
          </div>
        )
      }
      <div className=" border w-fit p-1 rounded-2xl">
      <button onClick={showAvailable} className="bg-[#E7FE29] py-3.5 px-5 rounded-2xl font-bold cursor-pointer ">Add More Player</button>
    </div>
    </div>
    
    }
  
    </>
    

  )
}

export default Selected

