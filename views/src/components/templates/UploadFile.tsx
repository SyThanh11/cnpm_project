import React from 'react';
import { CloudUploadOutlined } from '@ant-design/icons';

function handleFile(files) {
    alert("Number of files: " + files.length);
}

// drag drop file component
function DragDropFile() {
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

    // triggers when file is selected with click
    const handleChange = function(e) {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
        handleFile(e.target.files);
        }
    };

    // triggers the input when the button is clicked
    const onButtonClick = () => {
        inputRef.current.click();
    };

    return (
        <form className='flex items-center justify-center flex-col gap-10 border-2 border-dotted border-black px-40 py-30 rounded-[10px]' onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
            <CloudUploadOutlined className='text-30'/>
            <input ref={inputRef}  type="file" id="input-file-upload" style={{display : "none"}} multiple={true} onChange={handleChange} />
            <h1 className='font-bold text-20'>Drap and Drop here</h1>
            <p>or</p>
            <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : "" }>
                <div className='items-center'>
                    <div className='flex items-center justify-center'>
                        <button onClick={onButtonClick} className="bg-[#009EE2] text-white border-2 border-[#009EE2] hover:border-[#2e6780] hover:bg-[#2e6780] hover:text-white transition-all font-bold py-6 px-[60px] rounded">
                        Select File
                        </button>
                    </div>
                </div> 
            </label>
            { dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div> }
        </form>
    );
};

export default DragDropFile