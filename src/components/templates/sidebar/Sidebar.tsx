import { PATH } from 'constant/config'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActiveSide1 = location.pathname === PATH.printOne;
  const isActiveSide2 = location.pathname === PATH.printTwo;

  const isActiveSideHistoryPrint = location.pathname === PATH.historyPrint;
  const isActiveSideHistoryBuy = location.pathname === PATH.historyBuy;

  if (isActiveSide1 || isActiveSide2)
  {
    return (
      <div className="bg-[#cde5ff] h-[540px] flex flex-col justify-center items-center gap-20">
          <NavLink to={PATH.printOne} className={isActiveSide1 ? "bg-[#009EE2] px-26 py-10 rounded-[10px]" : "px-26 py-10 rounded-[10px]"}  
          onClick={() => {navigate(PATH.printOne)}}>
              <h3 className={isActiveSide1 ? "font-bold text-white" : "font-bold"}>Bước 1</h3>
          </NavLink>
          <NavLink to={PATH.printTwo} className={isActiveSide2 ? "bg-[#009EE2] px-26 py-10 rounded-[10px]" : "px-26 py-10 rounded-[10px]"}  
          onClick={() => {navigate(PATH.printTwo)}}>
              <h3 className={isActiveSide2 ? "font-bold text-white" : "font-bold"}>Bước 2</h3>
          </NavLink>
      </div>
    )
  }
  else if (isActiveSideHistoryBuy || isActiveSideHistoryPrint)
  {
    return (
      <div className="bg-[#cde5ff] h-[540px] flex flex-col justify-center items-center gap-20">
        <NavLink to={PATH.historyPrint} className={isActiveSideHistoryPrint ? "bg-[#009EE2] px-26 py-10 rounded-[10px]" : "px-26 py-10 rounded-[10px]"}  
        onClick={() => {navigate(PATH.historyPrint)}}>
            <h3 className={isActiveSideHistoryPrint ? "font-bold text-white" : "font-bold"}>In ấn</h3>
        </NavLink>
        <NavLink to={PATH.historyBuy} className={isActiveSideHistoryBuy ? "bg-[#009EE2] px-26 py-10 rounded-[10px]" : "px-26 py-10 rounded-[10px]"}  
        onClick={() => {navigate(PATH.historyBuy)}}>
            <h3 className={isActiveSideHistoryBuy ? "font-bold text-white" : "font-bold"}>Mua giấy</h3>
        </NavLink>
        </div>
    )
  }
}

export default Sidebar