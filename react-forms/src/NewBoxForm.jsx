import React, {useState} from 'react';
import Box from './Box';
import BoxList from './BoxList';
import { v4 as uuid } from 'uuid';

const NewBoxForm = function({addBox}) {
    const initialState = {
        backgroundColor: "",
        width: "",
        height: "",
    }
    const [formData, setFormData] = useState(initialState);

    const handleChange = function(e) {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = function(e) {
        e.preventDefault();
        addBox({
            id: uuid(), 
            backgroundColor: formData.backgroundColor, 
            width: formData.width, 
            height: formData.height
        });
        setFormData(initialState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="backgroundColor">Box Color: </label>
                <input 
                    id="backgroundColor"
                    name="backgroundColor"
                    type="text" 
                    placeholder="color"
                    onChange={handleChange}
                    value={formData.backgroundColor}
                ></input>
            </div>
            <div>
                <label htmlFor="width">Box Width: </label>
                <input 
                    id="width" 
                    name="width"
                    type="number"
                    min={1}
                    max={1000}
                    placeholder="width in pixels"
                    onChange={handleChange}
                    value={formData.width}
                ></input>
            </div>
            <div>
                <label htmlFor="height">Box Height: </label>
                <input 
                    id="height" 
                    name="height"
                    type="number"
                    min={1}
                    max={1000}
                    placeholder="height in pixels"
                    onChange={handleChange}
                    value={formData.height}
                ></input>
            </div>
            <button type="submit">Add</button>
        </form>
    )
}

export default NewBoxForm;