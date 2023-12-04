import useFormContext from '../../hooks/useFormContext';
export const PrintTwoTemplate = () => {
    const { data, handleChange } = useFormContext();
    const calculateEstimateTime = () => {
        // Thêm random vô
        if (data.twoLocation && data.twoDate && data.twoLocation) {
            document.getElementById('estimate-time').textContent = `Thứ hai (04/12/2023) - 8:00 AM - Tòa ${data.twoLocation} - Máy in HP-200`;
        }
    };
    const handleForm = (e) => {
        handleChange(e);
        calculateEstimateTime();
    };
    // document.getElementById('estimate-time').textContent = "0:0:0 1:0";
    return (
    <div className="PrintTwoTemplate grid grid-cols-2">
        <div className="left col-span-1 ml-[50px] py-10">
            <h1 className="text-[#009EE2] font-bold text-36 pb-20 pt-10">Đăng ký địa điểm in</h1>
            <div>
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Nơi in</label>
                <div className='input-content flex items-center'>
                    <select name='twoLocation' value={data.twoLocation} onChange={handleForm} className="border border-[#009EE2] text-sm rounded-lg block w-full p-2.5">
                        <option value="A2">Tòa A2</option>
                        <option value="A3">Tòa A3</option>
                        <option value="B1">Tòa B1</option>
                        <option value="B4">Tòa B4</option>
                        <option value="B8">Tòa B8</option>
                        <option value="C1">Tòa C1</option>
                        <option value="C2">Tòa C2</option>
                        <option value="C5">Tòa C5</option>
                    </select>
                </div>
            </div>
            <div className='mt-20'>
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Thời gian nhận</label>
                <div className='input-content flex items-center'>
                    <input id='date' type='date' name='twoDate' value={data.twoDate} onChange={handleForm} className="border border-[#009EE2] text-sm rounded-lg block w-full p-2.5">
                    </input>
                    <input id='time' type='time' name='twoTime' value={data.twoTime} onChange={handleForm} className="border border-[#009EE2] text-sm rounded-lg block w-full p-2.5">
                    </input>
                </div>
            </div>
            <div className="mt-20">
            <p className="block mb-2 text-sm font-medium text-[#009EE2]">Thời gian hoàn thành dự kiến:</p>
            <p id='estimate-time' className='text-rose-600'></p> 
            </div>
            <div className="flex items-center mt-16 gap-4">
                <input type="checkbox" value="True" checked={data.oneIsAgree} name="oneIsAgree" onChange={handleChange} className="w-14 h-14 text-blue-600 bg-white border border-[#009EE2]"/>
                <label className="ml-2 text-sm font-medium text-gray-900">Tôi đồng ý với các <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Điều khoản dịch vụ</a>.</label>
            </div>
        </div>
        {/* <div className="right col-span-1 flex justify-center items-center ">
            <img src="/img/DHBK_HCM-Catalogue-2015.jpg" alt="Location" className="h-[500px] w-[500px] py-50"></img>
        </div> */}
    </div>
    )
}

export default PrintTwoTemplate