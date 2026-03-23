const Navbar = () => {
  return (
    <div className="w-10/12 mx-auto flex justify-between items-center mt-4">
        <div className="left">
        <img src="../src/assets/logo.png" alt="" />
        </div>
        <div className="right flex gap-2 items-center">
            <ul className="flex gap-9 mr-10 text-gray-600 font-medium">
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
            </ul>
            <div className="end flex items-center gap-1 border border-gray-300 px-3 py-2 rounded-lg">
            <h1 className="flex items-center gap-1 font-bold"> <span>0 </span> coin</h1>
            <div className="coin">
            <img src="../src/assets/dollar 1.png" alt="" />
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
