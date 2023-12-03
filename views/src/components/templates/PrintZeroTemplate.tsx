import DragDropFile from './UploadFile';
import { useNavigate } from 'react-router-dom'
import { PATH } from 'constant/config';

export const PrintZeroTemplate = () => {
    const navigate = useNavigate();
    return (
    <div>
        <h1 className="ml-[50px] py-10 text-[#009EE2] font-bold text-36 pb-20 pt-10">Tải tài liệu</h1>
        <DragDropFile/>
        <div className='items-center justify-end px-20 py-20'>
            <button onClick={() => {navigate(PATH.printOne)} } className="bg-[#009EE2] text-white border-2 border-[#009EE2] hover:border-[#2e6780] hover:bg-[#2e6780] hover:text-white transition-all font-bold py-6 px-34 rounded">
                Tiếp theo
            </button>
        </div>
    </div>
    )
}

export default PrintZeroTemplate