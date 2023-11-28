import { useNavigate } from 'react-router-dom'
import { PATH } from 'constant/config';
import { useState } from 'react';

const HistoryBuyData = ({ header, data }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          {header.map((headerData, rowIndex) => (
              <div className="block mb-2 text-sm font-medium text-[#FFFFFF]" 
                  key={rowIndex} style={{ display: 'flex', width: '100%', border: '1px solid #000', backgroundColor: '#00B9E2', textAlign: 'center' }}>
            
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
  const [clickedPage, setClickedPage] = useState(null);
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
    <div style={{ display: 'flex', justifyContent: 'right', marginTop: '20px' }}>
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


const Content = ({ currentPage }) => (
    <div>
        <p>Content for Page {currentPage}</p>
        {/* Replace this with your own logic to fetch and display content */}
    </div>
);

export const HistoryBuyTemplate = () => {
    const navigate = useNavigate();
    const tableHeader = [['Số thứ tự', 'Ngày và giờ', 'Loại giấy', 'Số lượng', 'Trạng thái']];
    const tableData = [
        ['1', '28/11/2023 09:11 am', 'A3', '10', 'Hoàn thành'],
        ['2', '28/11/2023 09:11 am', 'A4', '10', 'Đang thực hiện'],
        ['3', '28/11/2023 09:11 am', 'A0', '10', 'Hoàn thành'],
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const numberOfPages = 5;

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
  return (
    <div className="HistoryPrintTemplate grid grid-cols-1">
        <div className="col-span-1 ml-[50px] mr-[50px] py-10">
            <h1 className="text-[#009EE2] font-bold text-36 pb-20 pt-10">Lịch sử mua giấy</h1>
            <HistoryBuyData header={tableHeader} data={tableData} />
            <PageNumbers numPages={numberOfPages} onPageClick={handlePageClick} />
            <Content currentPage={currentPage} />
        </div>
    </div>
  )
}

export default HistoryBuyTemplate