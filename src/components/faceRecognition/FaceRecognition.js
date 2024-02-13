import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {

    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' alt='face for processing' src={ imageUrl } width='500px' height='auto' />
                    {
                        boxes.map((box, id) => (
                            <div key={id} className='boundingBox'style={{ top:box.topRow, left:box.leftCol, right:box.rightCol, bottom:box.bottomRow }}></div>
                        ))
                    }
            </div>
        </div>
    );
    
}

export default FaceRecognition;