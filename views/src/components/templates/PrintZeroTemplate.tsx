import DragDropFile from './UploadFile';
import { useNavigate } from 'react-router-dom'
import { PATH } from 'constant/config';

export const PrintZeroTemplate = () => {
    const navigate = useNavigate();
    return (
    <div className="PrintOneTemplate grid grid-cols-1">
        <div className="left col-span-1 ml-[50px] py-10">
            <DragDropFile/>
        </div>
        <div className="col-span-1 justify-center items-center">
            
        </div>
        <div className='items-center justify-end py-20'>
            <button onClick={() => {navigate(PATH.printOne)} } className="bg-[#009EE2] text-white border-2 border-[#009EE2] hover:border-[#2e6780] hover:bg-[#2e6780] hover:text-white transition-all font-bold py-6 px-34 rounded">
                Tiếp theo
            </button>
        </div>
    </div>
  )
}

export default PrintZeroTemplate