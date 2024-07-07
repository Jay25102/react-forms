import React from 'react';

const Box = function({id, backgroundColor = "black", width = 100, height = 100, handleRemove}) {
    let styles = {
        backgroundColor,
        width: `${width}px`,
        height: `${height}px`,
    }

    const remove = function() {
        handleRemove(id);
    }

    return(
        <div>
            <div
                style={styles}
            ></div>
            <button onClick={remove}>Remove</button>
        </div>
        
    )
}

export default Box;