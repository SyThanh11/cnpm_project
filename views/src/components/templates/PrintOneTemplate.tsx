import { useNavigate } from 'react-router-dom'
import { PATH } from 'constant/config';

export const PrintOneTemplate = () => {
    const navigate = useNavigate();
    return (
    <div className="PrintOneTemplate grid grid-cols-2">
        <div className="left col-span-1 ml-[50px] py-10">
            <h1 className="text-[#009EE2] font-bold text-36 pb-20 pt-10">Đăng ký in giấy</h1>
            <div>
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Khổ giấy</label>
                <div className='input-content flex items-center'>
                    <select className="border border-[#009EE2] text-sm rounded-lg block w-full p-2.5">
                        <option value="A3">A3</option>
                        <option value="A4" selected>A4</option>
                        <option value="A5">A5</option>
                        <option value="A6">A6</option>
                        <option value="Letter">Letter</option>
                    </select>
                </div>
            </div>
            <div className='mt-20'>
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Số lượng</label>
                <div className='input-content flex items-center'>
                    <input type="number" className="border border-[#009EE2] text-sm rounded-lg block w-full p-2.5" placeholder="1" min="1"/>
                </div>
            </div>
            <div className="flex items-center mb-4">
            </div>
            <div className="mt-20">
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Số trang</label>
                <div className="flex items-center mt-16">
                    <input type="radio" value="all-page" name="page-number" className="w-14 h-14 text-blue-600 bg-white border border-[#009EE2]"/>
                    <label className="ml-2 text-sm font-medium text-gray-900">Toàn bộ trang</label>
                </div>
                <div className="flex items-center mt-16">
                    <input type="radio" value="custom-page" name="page-number" className="w-14 h-14 text-blue-600 bg-white border border-[#009EE2]"/>
                    <label className="ml-2 text-sm font-medium text-gray-900">Tùy chỉnh: </label><input type='text' className='ml-10 text-sm border border-[#009EE2] rounded-lg block' placeholder='e.g. 1-5, 8, 11-13'/>
                </div>
            </div>
            <div className='mt-20'>
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Số mặt</label>
                <div className='input-content flex items-center'>
                    <select className="border border-[#009EE2] text-sm rounded-lg block w-full p-2.5">
                        <option value="0" selected>In một mặt</option> 
                        <option value="1">In hai mặt</option>
                    </select>
                </div>
            </div>
            <div className="flex items-center mt-16 gap-4">
                <input type="checkbox" value="0" name="agree" className="w-14 h-14 text-blue-600 bg-white border border-[#009EE2]"/>
                <label className="ml-2 text-sm font-medium text-gray-900">Tôi đồng ý với các Điều khoản dịch vụ </label>
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