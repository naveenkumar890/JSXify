import React, { useState } from 'react'


export default function Formtext(props) {
    
    const [text, setText] = useState("Enter the text here");
    const [copied, setCopied] = useState(false);
    const handleUpClick = () => {

        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }
    const htmlToJsx = () => {
          let newText=text.replace(/class=/g, 'className=').replace(/for=/g, 'htmlFor=');
          setText(newText)
    }
    const handleClearText = () => {
        let newText='';
        setText(newText)
  }
    const handleCopyText = () => {
        navigator.clipboard
      .writeText(text)
      .then(() => setCopied(true))
      .catch((err) => console.error("failed to copy the text: " + err));
    };
    const handleOnClick = (event) => {
     setText(event.target.value)
    }
    
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="container">
                    <div className="mb-3">
                        <textarea className="form-control" value={text} onChange={handleOnClick} id="my-box" rows="8"></textarea>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>UpperCase</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={htmlToJsx}>html to jsx</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyText}> {copied ? "Copied" : "Copy to Clipboard"}</button>
                <button className="btn btn-primary mx-1" onClick={handleClearText}>clear</button>
            </div>
            <div className="container">
                <p> words{text.split(" ").length} and charecters{text.length}</p>
            </div>
        </>
    )
}
