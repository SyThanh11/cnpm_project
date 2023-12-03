import { PATH } from 'constant/config'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActiveSide0 = location.pathname === PATH.printZero;
  const isActiveSide1 = location.pathname === PATH.printOne;
  const isActiveSide2 = location.pathname === PATH.printTwo;
  return (
    <div className="h-screen bg-[#cde5ff] h-[540px] flex flex-col items-center gap-20">
        <NavLink to={PATH.printZero} className={isActiveSide0 ? "bg-[#009EE2] mt-30 px-26 py-10 rounded-[10px]" : "px-26  mt-30 py-10 rounded-[10px]"}  
        onClick={() => {navigate(PATH.printZero)}}>
            <h3 className={isActiveSide0 ? "font-bold text-white" : "font-bold"}>Bước 1</h3>
        </NavLink>
        <NavLink to={PATH.printOne} className={isActiveSide1 ? "bg-[#009EE2] px-26 py-10 rounded-[10px]" : "px-26 py-10 rounded-[10px]"}  
        onClick={() => {navigate(PATH.printOne)}}>
            <h3 className={isActiveSide1 ? "font-bold text-white" : "font-bold"}>Bước 2</h3>
        </NavLink>
        <NavLink to={PATH.printTwo} className={isActiveSide2 ? "bg-[#009EE2] px-26 py-10 rounded-[10px]" : "px-26 py-10 rounded-[10px]"}  
        onClick={() => {navigate(PATH.printTwo)}}>
            <h3 className={isActiveSide2 ? "font-bold text-white" : "font-bold"}>Bước 3</h3>
        </NavLink>
    </div>
  )
}

export default Sidebar