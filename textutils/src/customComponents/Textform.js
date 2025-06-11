import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Textform(props) {
    const [text, setText] = useState('enter custom input');
    const [findText , setFindText] = useState('');
    const [replaceText , setReplaceText] = useState('');

    const handleUpclick = () => {
        let convertedUpperCase = text.toUpperCase();
        setText(convertedUpperCase);
    }

    const handleDownclick = () => {
        let convertedLowerCase = text.toLowerCase();
        setText(convertedLowerCase);
    }

    const handleSplitclick = () => {
        let convertedSplitText = text.split(" ");
        setText(convertedSplitText.join("\n"));
    }

     const handleReplaceclick = () => {
        const updatedText = text.replaceAll(findText ,replaceText);
        setText(updatedText);
    }

    const handleClearclick = () => {
        const clearText = ("");
        setText(clearText);
    }
    const handleCopyPasteclick =() =>{
        var text = document.getElementById("InputBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value)
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className='container my-3'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <input
                    type='text'
                    className="form-control my-2"
                    placeholder="Text To Find"
                    value={findText}
                    onChange={(e)=> setFindText(e.target.value)} 
                    />
                <input
                    type='text'
                    className= "form-control my-2"
                    placeholder= "Text to replace with"
                    value={replaceText}
                    onChange={(e)=> setReplaceText(e.target.value)}
                    />
                    <textarea 
                        className="form-control" 
                        value={text} 
                        onChange={handleOnChange} 
                        id="InputBox" 
                        rows="8"
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpclick}>
                    Convert to UpperCase
                </button>
                <button className="btn btn-primary mx-3" onClick={handleDownclick}>
                    Convert to LowerCase
                </button>
                <button className="btn btn-primary mx-3" onClick={handleSplitclick}>
                    Split Text
                </button>
                <button className="btn btn-primary mx-3" onClick={handleReplaceclick}>
                    Replace Text
                </button>
                 <button className="btn btn-primary mx-3" onClick={handleClearclick}>
                    Clear Text
                </button>
                <button className="btn btn-primary mx-3" onClick={handleCopyPasteclick}>
                    Copy Text
                </button>
                 
               
            </div>
            <div className='container my-3'>
                <h1>Text Summary</h1>
               <p> {text.split(" ").length} words and {text.length} chracters</p>
            </div>

            <div className='container my-3'>
                <h2>Minutes taken to Read this paragraph</h2>
               <p> {0.008 * text.split(" ").length }minutes taken </p>
            </div>

            <div className='container my-3'>
                <h3>PREVIEW of Text</h3>
               <p> {text} </p>
            </div>
        </>
    )
}

Textform.propTypes = {
    heading: PropTypes.string.isRequired
};