import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
function SinglePlayer({players, name, image, price, id, country, battingStyle, role, ratings, coin, setCoin}) {
     const [isSelect, setIsSelect] = useState(false)
      const success = () => toast.success(`${name} added successfully 🎉`, {theme: "colored"});
       const warn = () => toast.error("You have no coins left.",{theme: 'colored' })
        const warn1 = ()=> toast.error("You need more coins to continue.",{theme: 'colored' })
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
        setIsSelect(true)
      }
  }
    return (
    <div>
       <div className='rounded-lg border-2 border-gray-300 overflow-hidden '>
        <img className='rounded-2xl mb-6 w-11/12 mx-auto mt-4 h-70' src={image} alt="" />
        <div className="topContent w-11/12 mx-auto flex items-center gap-4">
            <div className="image">
                <img src="./src/assets/user 1.png" alt="" />
            </div>
            <h1 className="font-bold text-2xl">{name}</h1>
        </div>
        <div className="middleContent border-b-2 border-gray-200 mt-4 w-11/12 mx-auto flex justify-between pb-4">
            <div className="leftcontent flex items-center gap-2 text-gray-500">
            <div className="image">
                <img src="./src/assets/report 1.png" alt="" />
            </div>
            <h1>{country}</h1>
            </div>
            <div className="rightContent bg-gray-100 px-3.5 py-2.25 rounded-lg">
                <h1>{role}</h1>
            </div>
        </div>
        <div className="endContent w-11/12 mx-auto space-y-3 mb-4">
            <div className="ratings">
                <h1 className="text-lg font-bold">Ratings ({ratings})</h1>
      
            </div>
            <div className="hand flex justify-between items-center">
                <h1 className="text-lg font-bold">{battingStyle}</h1>
                <h1 className="text-lg">{battingStyle}</h1>
            </div>
            <div className="price flex justify-between items-center">
                <h1 className="font-bold text-lg">Price: ${price}</h1>
                <div>
                <button  disabled={isSelect} id ={id} onClick={(e)=>{checkCoin(e)}} className="text-sm py-2.25 px-4 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-200 hover:font-semibold disabled:cursor-not-allowed disabled:bg-gray-200 ">{ isSelect ? 'Selected' : 'Choose Player'}</button>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SinglePlayer
