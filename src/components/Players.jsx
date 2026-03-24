const Players = () => {
    const btnClick = (e)=>{
        const allBtns = document.querySelectorAll('.btn')
        for(let btn of allBtns ){
            btn.classList.remove('bg-[#E7FE29]')
            btn.classList.remove('font-bold')
            btn.classList.add('text-gray-600')
        }
       const selectedBtn = document.getElementById(e.target.id)
       selectedBtn.classList.add('bg-[#E7FE29]')
       selectedBtn.classList.add('font-bold') 
    }
  return (
    <div className="w-10/12 mx-auto mt-25">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Available Players</h1>
        <div className="allbutton border border-gray-300 rounded-2xl">
        <button id="btn-1" onClick={(e)=>{btnClick(e)}} className="btn font-bold bg-[#E7FE29] px-3.5 py-3 rounded-l-2xl cursor-pointer">Available</button>
        <button id="btn-2" onClick={(e)=>{btnClick(e)}} className="btn  text-gray-600 px-3.5 py-3 rounded-r-2xl cursor-pointer">Selected</button>
        </div>
      </div>
    </div>
  )
}

export default Players
