import React, {useState} from 'react';
import NewBoxForm from './NewBoxForm.jsx';
import Box from "./Box.jsx";

const BoxList = function() {
    const [boxes, setBoxes] = useState([]);

    const addBox = function(boxObj) {
        setBoxes(boxes => [...boxes, boxObj]);
    }

    const removeBox = function(id) {
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    return (
        <div>
            <NewBoxForm addBox={addBox}/>
            <div>
                {boxes.map(box => 
                    <Box 
                        id={box.id}
                        key={box.id}
                        backgroundColor={box.backgroundColor} 
                        width={box.width}
                        height={box.height}
                        handleRemove={removeBox}  
                    />
                )}
            </div>
        </div>
    )
}

export default BoxList;