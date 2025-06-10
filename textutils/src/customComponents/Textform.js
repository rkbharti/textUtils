import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Textform(props) {
    const [text, setText] = useState('enter custom input');

    const handleUpclick = () => {
        let convertedUpperCase = text.toUpperCase();
        setText(convertedUpperCase);
    }

    const handleDownclick = () => {
        let convertedLowerCase = text.toLowerCase();
        setText(convertedLowerCase);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className='container my-3'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea 
                        className="form-control" 
                        value={text} 
                        onChange={handleOnChange} 
                        id="InputBox" 
                        rows="8"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpclick}>
                    Convert to UpperCase
                </button>
                <button className="btn btn-primary mx-2" onClick={handleDownclick}>
                    Convert to LowerCase
                </button>
            </div>
            <div className='container my-5'>
                <h1>Text Summary</h1>
                <p> {text.split(" ").length} and {text.length}</p>
                <p> {0.008 * text.split(" ").length }Minutes</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

Textform.propTypes = {
    heading: PropTypes.string.isRequired
};