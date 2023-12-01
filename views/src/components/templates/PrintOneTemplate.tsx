import { useNavigate } from 'react-router-dom'
import { PATH } from 'constant/config';

export const PrintOneTemplate = () => {
    const navigate = useNavigate();
  return (
    <div className="PrintOneTemplate grid grid-cols-2">
        <div className="left col-span-1 ml-[50px] py-10">
            <h1 className="text-[#009EE2] font-bold text-36 pb-20 pt-10">Đăng ký in giấy</h1>
            <div>
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Kích thước giấy</label>
                <div className='input-content flex items-center'>
                    <select className="border border-[#009EE2] text-sm rounded-lg block w-full p-2.5">
                        <option selected>Chọn kích thước giấy</option> 
                        <option value="A5">Giấy A5</option>
                        <option value="A4">Giấy A4</option>
                        <option value="A3">Giấy A3</option>
                    </select>
                </div>
            </div>
            <div className='mt-20'>
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Thể loại</label>
                <div className='input-content flex items-center'>
                    <select className="border border-[#009EE2] text-sm rounded-lg block w-full p-2.5">
                        <option selected>Chọn cách in</option> 
                        <option value="0">In trắng đen</option>
                        <option value="1">In màu</option>
                    </select>
                </div>
            </div>
            <div className='mt-20'>
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Số mặt</label>
                <div className='input-content flex items-center'>
                    <select className="border border-[#009EE2] text-sm rounded-lg block w-full p-2.5">
                        <option selected>Chọn in một mặt hay hai mặt</option> 
                        <option value="0">Một mặt</option>
                        <option value="1">Hai mặt</option>
                    </select>
                </div>
            </div>
            <div className='mt-20'>
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Số lượng</label>
                <div className='input-content flex items-center'>
                    <input type="text" className="border border-[#009EE2] text-sm rounded-lg block w-full p-2.5" placeholder="Số lượng bản in" />
                </div>
            </div>
            <div className="flex items-center mt-16 gap-4">
                <input type="radio" value="" name="default-radio" className="w-14 h-14 text-blue-600 bg-white border border-[#009EE2]"/>
                <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tôi đồng ý với các Điều khoản dịch vụ </label>
            </div>
            <div className='flex items-center justify-end py-20'>
                <button onClick={() => {navigate(PATH.printTwo)} } className="bg-[#009EE2] text-white border-2 border-[#009EE2] hover:border-[#2e6780] hover:bg-[#2e6780] hover:text-white transition-all font-bold py-6 px-34 rounded">
                    Tiếp theo
                </button>
            </div>
        </div>
    </div>
  )
}

export default PrintOneTemplate