import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3 tc'>
                {'This App will detect faces in your picture. Give it a try.'}
            </p>
            <div className='w-50 center'>
                    <input className='f4 pa2 w-70' type='text' onChange={onInputChange}/>
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-red' onClick={onButtonSubmit}>Detect Face</button>
                
            </div>
        </div>
    );
}
export default ImageLinkForm;