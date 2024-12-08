'use client';
import { useState } from "react";


const UserPrefrenceForm = ({onSubmit}) => {

    const [prefrences , setPrefrences] = useState({
        size: '',
        style: '',
        colors: '',
    });

    const handleChange = (e) => {
        setPrefrences({...prefrences, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(prefrences);
    };


    return(
        <form onSubmit={handleSubmit} className="p-4">
            <label>
                Size:
                <input type="text" name="size" value={prefrences.size} onChange={handleChange} />
            </label>
            <label>
                Style:
                <input type="text" name="style" value={prefrences.style} onChange={handleChange} />
            </label>
            <label>
                Colors:
                <input type="text" name="colors" value={prefrences.colors} onChange={handleChange} />
            </label>
            <button type='submit'>Submit</button>
            
        </form>
    );
};

export default UserPrefrenceForm;