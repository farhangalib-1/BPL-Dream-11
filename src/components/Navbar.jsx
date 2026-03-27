import Hamburger from 'hamburger-react'
import { useState } from 'react'
const Navbar = ({coin}) => {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="w-10/12 mx-auto flex justify-between items-center mt-4">
        <div className="left flex items-center">
        <div className="md:hidden relative">
        <Hamburger size={20} direction="left" toggled={isOpen} toggle={setOpen} />
          {isOpen && 
          <ul className='absolute z-50 top-15 bg-white p-3 rounded-2xl'>
                <li className='cursor-pointer hover:text-blue-600'>Home</li>
                <li className='cursor-pointer hover:text-blue-600'>Fixture</li>
                <li className='cursor-pointer hover:text-blue-600'>Teams</li>
                <li className='cursor-pointer hover:text-blue-600'>Schedules</li>
            </ul>}
        </div>
        <img src="../src/assets/logo.png" alt="" />
        </div>
        <div className="right flex gap-2 items-center">
          
          <div className="hidden md:block">
            <ul className="flex gap-9 mr-10 text-gray-600 font-medium shadow-2xl">
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
            </ul>
            </div>
            <div className="end flex items-center gap-1 border border-gray-300 px-3 py-2 rounded-lg">
            <h1 className="flex items-center gap-1 font-bold"> <span> {coin} </span> coin</h1>
            <div className="coin">
            <img src="../src/assets/dollar 1.png" alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
