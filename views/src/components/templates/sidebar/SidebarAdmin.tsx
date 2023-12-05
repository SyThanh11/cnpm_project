import { PATH } from 'constant/config'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

export const SidebarAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActiveSide0 = location.pathname === PATH.admin;
  const isActiveSide1 = location.pathname === PATH.adminConfig;
  const isActiveSide2 = location.pathname === PATH.adminViewFeedback;
  return (
    <div className="bg-[#cde5ff] h-[540px] flex flex-col justify-center items-center gap-20">
        <NavLink to={PATH.admin} className={isActiveSide0 ? "bg-[#009EE2] px-26 py-10 rounded-[10px]" : "px-26 py-10 rounded-[10px]"}  
        onClick={() => {navigate(PATH.admin)}}>
            <h3 className={isActiveSide0 ? "font-bold text-white" : "font-bold"}>Admin</h3>
        </NavLink>
        <NavLink to={PATH.adminConfig} className={isActiveSide1 ? "bg-[#009EE2] px-26 py-10 rounded-[10px]" : "px-26 py-10 rounded-[10px]"}  
        onClick={() => {navigate(PATH.adminConfig)}}>
            <h3 className={isActiveSide1 ? "font-bold text-white" : "font-bold"}>Cấu hình</h3>
        </NavLink>
        <NavLink to={PATH.adminViewFeedback} className={isActiveSide2 ? "bg-[#009EE2] px-26 py-10 rounded-[10px]" : "px-26 py-10 rounded-[10px]"}  
        onClick={() => {navigate(PATH.adminViewFeedback)}}>
            <h3 className={isActiveSide2 ? "font-bold text-white" : "font-bold"}>Xem phản hồi</h3>
        </NavLink>
    </div>
  )
}

export default SidebarAdmin