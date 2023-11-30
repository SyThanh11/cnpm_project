// import { useNavigate } from 'react-router-dom'
// import { PATH } from 'constant/config';
import { useState, useEffect } from 'react';

const HistoryPrintData = ({ header, data }) => {
    return (
      <div className="flex flex-col w-full">
          {header.map((headerData, rowIndex) => (
              <div className="block mb-2 text-sm font-medium text-[#FFFFFF]" 
                  key={rowIndex} style={{ display: 'flex', width: '100%', border: '1px solid #000', backgroundColor: '#00B9E2', textAlign: 'center', fontSize: '16px'}}>
            
              {headerData.map((cellData, cellIndex) => (
                  <div key={cellIndex} style={{ flex: 1, padding: '15px' }}>
                      {cellData}
                  </div>
              ))}
          </div>
          ))}
  
  
          {data.map((rowData, rowIndex) => (
              <div key={rowIndex} style={{ display: 'flex', width: '100%', border: '1px solid #ddd', textAlign: 'center' }}>
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

const PageNumbers = ({ numPages, onPageClick }) => {
  const [clickedPage, setClickedPage] = useState(1);
  const [hoveredPage, setHoveredPage] = useState(null);

  const pageNumbers = Array.from({ length: numPages }, (_, index) => index + 1);

  const handleMouseEnter = (pageNumber) => {
      setHoveredPage(pageNumber);
  };

  const handleMouseLeave = () => {
      setHoveredPage(null);
  };

  const handleClick = (pageNumber) => {
    setClickedPage(pageNumber);
    onPageClick(pageNumber);
  };

  const getPageNumberStyle = (pageNumber) => ({
    margin: '0 8px',
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: '#fff',
    color: clickedPage === pageNumber ? '#4200FF' : (hoveredPage === pageNumber ? '#4200FF' : '#000'),
    borderRadius: '5px',
    border: clickedPage === pageNumber ? '1px solid #4200FF' : (hoveredPage === pageNumber ? '1px solid #4200FF' : '1px solid #000'),
    width: '35px',
    height: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  });

  return (
    <div className="flex justify-end mt-20">
      {pageNumbers.map((pageNumber) => (
        <div
          key={pageNumber}
          style={getPageNumberStyle(pageNumber)}
          onClick={() => handleClick(pageNumber)}
          onMouseEnter={() => handleMouseEnter(pageNumber)}
          onMouseLeave={handleMouseLeave}
        >
          {pageNumber}
        </div>
      ))}
    </div>
  );
};


export const HistoryPrintTemplate = () => {
    // const navigate = useNavigate();
    const tableHeader = [['Số thứ tự', 'Ngày và giờ', 'Loại giấy', 'Tên máy in', 'Trạng thái']];
    const [tableData, setTableData] = useState([
      ['1', '28/11/2023 09:11 am', 'A3', '10', 'Hoàn thành'],
      ['2', '28/11/2023 09:11 am', 'A4', '10', 'Đang thực hiện'],
      ['3', '28/11/2023 09:11 am', 'A0', '10', 'Hoàn thành'],
  ]);
    const [currentPage, setCurrentPage] = useState(1);
    const numberOfPages = 5;

    const handlePageClick = (pageNumber) => {
      const newData = generateDataForPage(pageNumber);
      setTableData(newData);
      setCurrentPage(pageNumber);
  };
  const generateDataForPage = (pageNumber) => {
    return [
        [`${(pageNumber-1)*3 + 1}`, '28/11/2023 09:11 am', 'A3', `AH${pageNumber}`, 'Hoàn thành'],
        [`${(pageNumber-1)*3 + 2}`, '28/11/2023 09:11 am', 'A4', `AH${pageNumber}`, 'Đang thực hiện'],
        [`${(pageNumber-1)*3 + 3}`, '28/11/2023 09:11 am', 'A0', `AH${pageNumber}`, 'Hoàn thành'],
    ];
  };
  useEffect(() => {
    handlePageClick(1);
  }, []);

  return (
    <div className="HistoryPrintTemplate grid grid-cols-1">
        <div className="col-span-1 ml-[50px] mr-[50px] py-10">
            <h1 className="text-[#009EE2] font-bold text-36 pb-20 pt-10">Lịch sử in ấn</h1>
            <HistoryPrintData header={tableHeader} data={tableData} />
            <PageNumbers numPages={numberOfPages} onPageClick={handlePageClick} />
        </div>
    </div>
  )
}

export default HistoryPrintTemplate