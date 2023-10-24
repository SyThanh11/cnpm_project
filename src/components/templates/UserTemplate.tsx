import { PATH } from 'constant/config';
import { useNavigate } from 'react-router-dom'

export const UserTemplate = () => {
  const navigate = useNavigate();
  return (
    <div className="UserTemplate">
        <div className="top h-[500px]">
            <div className="top w-full h-[300px] bg-cover bg-center bg-[url('/img/userImage.jpg')]">
                <div className="overlay w-full h-full bg-black opacity-70"></div>
            </div>
        </div>
        <div className="bottom absolute top-[51%] left-[33%]">
            <div className="flex items-center justify-center gap-50">
                <div onClick={() => { navigate(PATH.printOne) }} className="text-center bg-white border-2 border-[#1B1BEF] px-14 py-20 rounded-[10px] hover:-translate-y-10 transition-all hover:cursor-pointer">
                    <h2 className="font-bold">PRINT</h2>
                    <p>In tài liệu, sách, <br/> photo, ...</p>
                </div>
                <div className="text-center bg-white border-2 border-[#1B1BEF] px-14 py-20 rounded-[10px] hover:-translate-y-10 transition-all hover:cursor-pointer">
                    <h2 className="font-bold">HISTORY</h2>
                    <p>Xem lịch sử sử<br/>dụng máy in</p>
                </div>
                <div className="text-center bg-white border-2 border-[#1B1BEF] px-14 py-20 rounded-[10px] hover:-translate-y-10 transition-all hover:cursor-pointer">
                    <h2 className="font-bold">FEEDBACK</h2>
                    <p>Giúp chúng tôi<br/>hoàn thiện hơn </p>
                </div>
            </div>
            <h1 className="text-center text-[40px] font-bold pt-26 text-[#009EE2]">Trải nghiệm ngay nào</h1>
        </div>
    </div>
  )
}

export default UserTemplate