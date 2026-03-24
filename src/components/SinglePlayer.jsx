function SinglePlayer({name, image, price, checkCoin, id}) {
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
            <h1>Bangladesh</h1>
            </div>
            <div className="rightContent bg-gray-100 px-3.5 py-2.25 rounded-lg">
                <h1>All-rounder</h1>
            </div>
        </div>
        <div className="endContent w-11/12 mx-auto space-y-3 mb-4">
            <div className="ratings">
                <h1 className="text-xl font-bold">Ratings</h1>
            </div>
            <div className="hand flex justify-between items-center">
                <h1 className="text-lg font-bold">Left-Hand-Bat</h1>
                <h1 className="text-lg">Left-Hand-Bat</h1>
            </div>
            <div className="price flex justify-between items-center">
                <h1 className="font-bold text-lg">Price: ${price}</h1>
                <button id ={id} onClick={checkCoin} className="text-sm py-2.25 px-4 rounded-lg border border-gray-300 cursor-pointer hover:bg-gray-200 hover:font-semibold">Choose Player</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SinglePlayer
