import { useNavigate } from 'react-router-dom'
import { PATH } from 'constant/config';

const HistoryPrintData = ({ header, data }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {header.map((headerData, rowIndex) => (
            <div className="block mb-2 text-sm font-medium text-[#FFFFFF]" 
                key={rowIndex} style={{ display: 'flex', width: '175%', border: '1px solid #000', backgroundColor: '#00B9E2', textAlign: 'center' }}>
          
            {headerData.map((cellData, cellIndex) => (
                <div key={cellIndex} style={{ flex: 1, padding: '15px' }}>
                    {cellData}
                </div>
            ))}
        </div>
        ))}


        {data.map((rowData, rowIndex) => (
            <div key={rowIndex} style={{ display: 'flex', width: '175%', border: '1px solid #ddd', textAlign: 'center' }}>
                {rowData.map((cellData, cellIndex) => (
                    <div key={cellIndex} style={{ flex: 1, padding: '15px' }}>
                        {cellData}
                    </div>
                ))}
            </div>
        ))}
    </div>
    );
};


export const HistoryPrintTemplate = () => {
    const navigate = useNavigate();
    const tableHeader = [['Số thứ tự', 'Ngày và giờ', 'Loại giấy', 'Tên máy in', 'Trạng thái']];
    const tableData = [
        ['1', '28/11/2023 09:11 am', 'A3', 'Máy in H1', 'Hoàn thành'],
        ['2', '28/11/2023 09:11 am', 'A4', 'Máy in A5', 'Đang thực hiện'],
        ['3', '28/11/2023 09:11 am', 'A0', 'Máy in H2', 'Hoàn thành'],
    ];
  return (
    <div className="HistoryPrintTemplate grid grid-cols-2">
        <div className="left col-span-1 ml-[50px] py-10">
            <h1 className="text-[#009EE2] font-bold text-36 pb-20 pt-10">Lịch sử in ấn</h1>
            <HistoryPrintData header={tableHeader} data={tableData} />
        </div>
    </div>
  )
}

export default HistoryPrintTemplate