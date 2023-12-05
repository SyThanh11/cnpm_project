import { useState } from 'react';

export const AdminPrinterTemplate = () => {

    return (
    <div className="PrintOneTemplate grid grid-cols-2">
        <div className="left col-span-1 ml-[50px] py-10">
            <h1 className="text-[#009EE2] font-bold text-36 pb-20 pt-10">Tùy chỉnh máy in</h1>

            <div className="flex items-center mb-4"></div>
            <div className="mt-20">
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Các máy in hoạt động</label>
                <div className="flex items-center mt-16">
                    <input type="checkbox" value="a2" name="printer" className="w-14 h-14 text-blue-600 bg-white border border-[#009EE2]"/>
                    <label className="ml-2 text-sm font-medium text-gray-900">Tòa A2</label>
                </div>
                <div className="flex items-center mt-16">
                    <input type="checkbox" value="a3" name="printer" className="w-14 h-14 text-blue-600 bg-white border border-[#009EE2]"/>
                    <label className="ml-2 text-sm font-medium text-gray-900">Tòa A3</label>
                </div>
                <div className="flex items-center mt-16">
                    <input type="checkbox" value="b1" name="printer" className="w-14 h-14 text-blue-600 bg-white border border-[#009EE2]"/>
                    <label className="ml-2 text-sm font-medium text-gray-900">Tòa B1</label>
                </div>
                <div className="flex items-center mt-16">
                    <input type="checkbox" value="b4" name="printer" className="w-14 h-14 text-blue-600 bg-white border border-[#009EE2]"/>
                    <label className="ml-2 text-sm font-medium text-gray-900">Tòa B4</label>
                </div>
                <div className="flex items-center mt-16">
                    <input type="checkbox" value="b8" name="printer" className="w-14 h-14 text-blue-600 bg-white border border-[#009EE2]"/>
                    <label className="ml-2 text-sm font-medium text-gray-900">Tòa B8</label>
                </div>
                <div className="flex items-center mt-16">
                    <input type="checkbox" value="c1" name="printer" className="w-14 h-14 text-blue-600 bg-white border border-[#009EE2]"/>
                    <label className="ml-2 text-sm font-medium text-gray-900">Tòa C1</label>
                </div>
                <div className="flex items-center mt-16">
                    <input type="checkbox" value="c2" name="printer" className="w-14 h-14 text-blue-600 bg-white border border-[#009EE2]"/>
                    <label className="ml-2 text-sm font-medium text-gray-900">Tòa C2</label>
                </div>
                <div className="flex items-center mt-16">
                    <input type="checkbox" value="c5" name="printer" className="w-14 h-14 text-blue-600 bg-white border border-[#009EE2]"/>
                    <label className="ml-2 text-sm font-medium text-gray-900">Tòa C5</label>
                </div>
            </div>

            <div className='flex items-center justify-end py-20'>
                <button className="bg-[#009EE2] text-white border-2 border-[#009EE2] hover:border-[#2e6780] hover:bg-[#2e6780] hover:text-white transition-all font-bold py-6 px-34 rounded">
                    Xác nhận
                </button>
            </div>
        </div>
    </div>
    )
}

export default AdminPrinterTemplate