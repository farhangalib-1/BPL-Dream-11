import { Trash2 } from "lucide-react"
const Selected = ({selectedPlayers, setSelectedPlayers}) => {
  const deleteData = (name) => {
  const filterData = selectedPlayers.filter(p => p.name !== name)
  setSelectedPlayers(filterData)
}
  return (
 
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
    </div>

  )
}

export default Selected

