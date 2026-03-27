
const HeroBg = ({getCoin}) => {
  return (
    <div>
    <div className="w-11/12 md:max-w-fit bg-black  mx-auto rounded-4xl overflow-hidden mt-5 relative">
      <img src="../src/assets/bg-shadow.png" alt="" />
      <div className="absolute top-0 flex flex-col justify-center items-center w-full h-full">
        <img className="mt-4 md:mt-0 mb-2 md:mb-6 w-10 h-10  md:w-fit md:h-fit" src="../src/assets/banner-main.png" alt="" />
        <h1 className="text-white text-[12px] md:text-4xl font-bold mb-1 md:mb-4 ">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className="text-gray-500 text-[9px] md:text-2xl font-medium mb-1 md:mb-6">Beyond Boundaries Beyond Limits</p>
        <div className="border-2 border-[#E7FE29] rounded-lg md:rounded-2xl p-0.5  md:p-2 mb-4 md:mb-0">
            <button onClick={getCoin} className="bg-[#E7FE29]  md:py-3.5 md:px-5 rounded-lg md:rounded-xl font-medium cursor-pointer text-[9px] md:text-[16px] py-2 px-2.5 ">Claim Free Credit</button>
        </div>
      </div>
      </div>
      </div>
  )
}

export default HeroBg
