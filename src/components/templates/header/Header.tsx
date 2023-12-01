import { PATH } from 'constant/config';
import './style.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

export const Header = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState("Home");
  return (
    <header className='flex items-center'>
        <div className='grid grid-cols-4 container'>
          <div className="header-logo col-span-1 flex items-center hover:cursor-pointer" onClick={() => { navigate('/') }}>
              <img src="/img/logoBK.png" alt="logo" style={{
                  width: '80px',
                  height: '76.4px',
                  objectFit: 'cover'
              }}/>
              <h1 className="font-bold">SOFTWARE <br /> ENGINEERING</h1>
          </div>
          <div className="header-menu col-span-2">
              <ul className='flex items-center h-full gap-[40px] justify-center font-normal'>
                <li><a className={page === "Home" ? "active" : ""} onClick={() => {setPage("Home"); navigate(PATH.home)}}>Home</a></li>
                <li><a className={page === "About" ? "active" : ""} onClick={() => {setPage("About"); navigate(PATH.about)}}>About</a></li>
                <li><a className={page === "Contact" ? "active" : ""} onClick={() => {setPage("Contact"); navigate(PATH.home)}}>Contact</a></li>
                <li><a className={page === "Feedback" ? "active" : ""} onClick={() => {setPage("Feedback"); navigate(PATH.home)}}>Feedback</a></li>
              </ul>
          </div>
          <div className="header-action col-span-1 flex items-center gap-20 justify-end">
            <button onClick={() => { navigate(PATH.login) }} className="bg-white text-[#1B1BEF] border-2 border-[#1B1BEF] hover:bg-[#1B1BEF] hover:text-white transition-all font-medium py-4 px-20 rounded">
              Login
            </button>
            <button onClick={() => { navigate(PATH.signUp) }} className="bg-[#1B1BEF] text-white border-2 border-[#1B1BEF] hover:bg-white hover:text-[#1B1BEF] transition-all font-medium py-4 px-20 rounded">
              Sign up
            </button>
          </div>
        </div>
    </header>
  )
}

export default Header