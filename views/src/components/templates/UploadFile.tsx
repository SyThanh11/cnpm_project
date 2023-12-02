import React from 'react';
import { CloudUploadOutlined } from '@ant-design/icons';

// Import Worker
import { Worker } from '@react-pdf-viewer/core';
// Import the main Viewer component
import { Viewer } from '@react-pdf-viewer/core';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// drag drop file component
function DragDropFile() {
    // creating new plugin instance
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    // pdf file onChange state
    const [pdfFile, setPdfFile] = React.useState(null);

    // pdf file error state
    const [pdfError, setPdfError] = React.useState('');

    // drag state
    const [dragActive, setDragActive] = React.useState(false);
    // ref
    const inputRef = React.useRef(null);

    // handle drag events
    const handleDrag = function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
        setDragActive(true);
        } else if (e.type === "dragleave") {
        setDragActive(false);
        }
    };

    // triggers when file is dropped
    const handleDrop = function(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFile(e.dataTransfer.files);
        }
    };
    // handle file onChange event
    const allowedFiles = ['application/pdf'];
    const handleFile = (e) =>{
        let selectedFile = e.target.files[0];
        // console.log(selectedFile.type);
        if(selectedFile){
        if(selectedFile&&allowedFiles.includes(selectedFile.type)){
            let reader = new FileReader();
            reader.readAsDataURL(selectedFile);
            reader.onloadend=(e)=>{
            setPdfError('');
            setPdfFile(e.target.result);
            }
        }
        else{
            setPdfError('Not a valid pdf: Please select only PDF');
            setPdfFile('');
        }
        }
        else{
        console.log('please select a PDF');
        }
    }

    // triggers the input when the button is clicked
    const onButtonClick = () => {
        inputRef.current.click();
    };

    return (
        <div className='grid grid-cols-2'>
            <div className="left col-span-1 ml-[50px] py-10">
                <form className='flex items-center justify-center flex-col gap-10 border-2 border-dotted border-black px-40 py-30 rounded-[10px]' onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
                <CloudUploadOutlined className='text-30'/>
                <input ref={inputRef}  type="file" id="input-file-upload" style={{display : "none"}} multiple={true} onChange={handleFile} />
                <h1 className='font-bold text-20'>Kéo thả file vào đây</h1>
                <p>hoặc</p>
                <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
                    <div className='items-center'>
                        <div className='flex items-center justify-center'>
                            <button onClick={onButtonClick} className="bg-[#009EE2] text-white border-2 border-[#009EE2] hover:border-[#2e6780] hover:bg-[#2e6780] hover:text-white transition-all font-bold py-6 px-[60px] rounded">
                            Chọn File
                            </button>
                            {pdfError&&<p className='text-danger'>{pdfError}</p>}
                        </div>
                    </div> 
                </label>
                { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
                </form>
            </div>

        <div className="container right col-span-1 justify-center items-center">
        <h1 className="text-[#009EE2] text-center font-bold text-20 pb-20 pt-10">Xem trước File</h1>
        <div className="viewer" style={{ height: "500px"}}>
            {pdfFile&&(
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js">
                <Viewer fileUrl={pdfFile}
                plugins={[defaultLayoutPluginInstance]}></Viewer>
            </Worker>
            )}
            {!pdfFile&&<p className='text-center'>Chưa có file được chọn</p>}
        </div>
        </div>
        </div>
    );
};

export default DragDropFile