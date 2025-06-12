import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Textform(props) {
    const [text, setText] = useState('enter custom input');
    const [findText , setFindText] = useState('');
    const [replaceText , setReplaceText] = useState('');

    const handleUpclick = () => {
        let convertedUpperCase = text.toUpperCase();
        setText(convertedUpperCase);
        props.showAlert("Converted to UpperCase", "success"); // showAlert is used from the app.js file to use thaat method to show
    }

    const handleDownclick = () => {
        let convertedLowerCase = text.toLowerCase();
        setText(convertedLowerCase);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleSplitclick = () => {
        let convertedSplitText = text.split(" ");
        setText(convertedSplitText.join("\n"));
        props.showAlert("Converted to Split TExt ", "success");
    }

     const handleReplaceclick = () => {
        const updatedText = text.replaceAll(findText ,replaceText);
        setText(updatedText);
        props.showAlert(" Sucessfully replace ", "success");
    }

    const handleClearclick = () => {
        const clearText = ("");
        setText(clearText);
        props.showAlert("Text Clear ", "success");
    }
    const handleCopyPasteclick =() =>{
        var text = document.getElementById("InputBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value)
        props.showAlert(" TEXT in CLIPBOARD", "success");
    }

    const countWords = (text) => {
        if (text.trim() === '') return 0;  // Handle empty or whitespace-only input
        return text.trim().split(/\s+/).length;
            };

const countCharacters = (text) => {
  return text.length;
};

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className='container my-3' style={{color:props.mode=== 'dark' ? 'white' :'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <input
                    type='text'
                    className="form-control my-2"
                    placeholder="Text To Find"
                    value={findText}
                    onChange={(e)=> setFindText(e.target.value)} 
                    style={{backgroundColor:props.mode==='dark' ? 'grey':'white', color:props.mode==='dark' ? 'white':'black' }}
                    />
                <input
                    type='text'
                    className= "form-control my-2"
                    placeholder= "Text to replace with"
                    value={replaceText}
                    onChange={(e)=> setReplaceText(e.target.value)}
                    style={{backgroundColor:props.mode==='dark' ? 'grey':'white', color:props.mode==='dark' ? 'white':'black' }}
                    />
                    <textarea 
                        className="form-control" 
                        value={text} 
                        onChange={handleOnChange} 
                        style={{backgroundColor:props.mode==='dark' ? 'grey':'white', color:props.mode==='dark' ? 'white':'black' }}
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
            <div className='container my-3'  style={{color:props.mode=== 'dark' ? 'white' :'black'}}>
                <h1>Text Summary</h1>
               <p>{countWords(text)} words and {countCharacters(text)} characters</p>
            </div>

            <div className='container my-3'  style={{color:props.mode=== 'dark' ? 'white' :'black'}}>
                <h2>Minutes taken to Read this paragraph</h2>
               <p> {0.008 * text.split(" ").length }minutes taken </p>
            </div>

            <div className='container my-3'  style={{color:props.mode=== 'dark' ? 'white' :'black'}}>
                <h3>PREVIEW of Text</h3>
               <p> {text} </p>
            </div>
        </>
    )
}

Textform.propTypes = {
    heading: PropTypes.string.isRequired
};