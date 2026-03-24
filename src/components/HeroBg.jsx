
const HeroBg = ({getCoin}) => {
  return (
    <div>
    <div className="max-w-fit bg-black  mx-auto rounded-4xl overflow-hidden mt-5 relative">
      <img src="../src/assets/bg-shadow.png" alt="" />
      <div className="absolute top-0 flex flex-col justify-center items-center w-full h-full">
        <img className="mb-6" src="../src/assets/banner-main.png" alt="" />
        <h1 className="text-white text-4xl font-bold mb-4 ">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className="text-gray-500 text-2xl font-medium mb-6">Beyond Boundaries Beyond Limits</p>
        <div className="border-2 border-[#E7FE29] rounded-2xl p-2">
            <button onClick={getCoin} className="bg-[#E7FE29] py-3.5 px-5 rounded-xl font-medium cursor-pointer">Claim Free Credit</button>
        </div>
      </div>
      </div>
      </div>
  )
}

export default HeroBg
