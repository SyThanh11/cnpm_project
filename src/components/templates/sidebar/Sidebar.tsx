import { PATH } from 'constant/config'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className="bg-[#cde5ff] h-[540px] flex flex-col justify-center items-center gap-20">
        <NavLink to={PATH.printOne} className="bg-[#009EE2] px-26 py-10 rounded-[10px]">
            <h3 className="font-bold text-white">Bước 1</h3>
        </NavLink>
        <div className="px-26 py-10 rounded-[10px]">
            <h3 className="font-bold">Bước 2</h3>
        </div>
        <div className="px-26 py-10 rounded-[10px]">
            <h3 className="font-bold">Bước 3</h3>
        </div>
    </div>
  )
}

export default Sidebar