import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { PATH } from 'constant/config';
// import axios from "axios";
// import Cookies from "universal-cookie";

// const cookies = new Cookies();
// const property = cookies.get("PROPERTIES");

export const PrintTwoTemplate = () => {
    // const [properties, setProperties] = useState({
    //     file: '',
    //     size: '',
    //     pages: '',
    //     copies: '',
    //     sided: '',
    //     printer: '',
    //     time: ''
    // });

    // setProperties(property);

    // const handleInputChange = (fieldName, value) => {
    //     setProperties((prevData) => ({
    //         ...prevData,
    //         [fieldName]: value,
    //     }));
    // };

    const handleSubmit = (e) => {
        // e.preventDefault();
        // cookies.set("PROPERTIES", properties, {path: "/"}); 
        navigate(PATH.user);  
    };

    const navigate = useNavigate();
    
    return (
    <div className="PrintTwoTemplate grid grid-cols-2">
        <div className="left col-span-1 ml-[50px] py-10">
            <h1 className="text-[#009EE2] font-bold text-36 pb-20 pt-10">Đăng ký địa điểm in</h1>
            <div>
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Máy in</label>
                <div className='input-content flex items-center'>
                    <select className="border border-[#009EE2] text-sm rounded-lg block w-full p-2.5">
                        <option selected>Chọn máy in</option>
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
                <label className="block mb-2 text-sm font-medium text-[#009EE2]">Thời gian</label>
                <div className='input-content flex items-center'>
                    <select className="border border-[#009EE2] text-sm rounded-lg block w-full p-2.5">
                        <option selected>Chọn thời gian</option> 
                        <option value="0">Tiết 1</option>
                        <option value="1">Tiết 2</option>
                        <option value="2">Tiết 3</option>
                        <option value="3">Tiết 4</option>
                        <option value="4">Tiết 5</option>
                        <option value="5">Tiết 6</option>
                        <option value="6">Tiết 7</option>
                        <option value="7">Tiết 8</option>
                        <option value="8">Tiết 9</option>
                        <option value="9">Tiết 10</option>
                        <option value="10">Tiết 11</option>
                        <option value="11">Tiết 12</option>
                        <option value="12">Tiết 13</option>
                        <option value="13">Tiết 14</option>
                        <option value="14">Tiết 15</option>
                    </select>
                </div>
            </div>
            <div className='flex items-center justify-end py-20'>
                <button onClick={(e) => handleSubmit(e)} className="bg-[#009EE2] text-white border-2 border-[#009EE2] hover:border-[#2e6780] hover:bg-[#2e6780] hover:text-white transition-all font-bold py-6 px-34 rounded">
                    Hoàn thành
                </button>
            </div>
        </div>
        <div className="right col-span-1 flex justify-center items-center ">
            <img src="/img/DHBK_HCM-Catalogue-2015.jpg" alt="Location" className="h-[500px] w-[500px] py-50"></img>
        </div>
    </div>
    )
}

export default PrintTwoTemplate