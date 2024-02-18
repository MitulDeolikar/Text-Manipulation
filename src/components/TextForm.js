import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        // console.log("Upper case was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case","success")
    }
    const handleLowClick = () => {
        // console.log("Upper case was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case","success")
    }
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }
    const handleCopyClick = () => {
        var text=document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges()
        props.showAlert("Copied to clipboard","success")
      };
    
    return (
        <>
            <div className="container" style={{color:props.mode==='dark'?'white':'#333'}}>
                <h3>{props.heading}</h3>
                <div class="mb-3">
                    {/* <label for="myBox" class="form-label">Example textarea</label> */}
                    <textarea class="form-control" value={text} id="myBox" rows="5" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#333':'white',color:props.mode==='dark'?'white':'#333'}}></textarea>

                </div>
                <button disabled={text.length===0} className="btn btn-outline-info mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-outline-info my-3" onClick={handleLowClick} >Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-outline-info mx-1" onClick={handleCopyClick}>Copy
                </button>
            </div>
            <div className="container my-3"  style={{color:props.mode==='dark'?'white':'#333'}}>
                <h4>Text Summary</h4>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length } words and {text.length} characters </p>
                <p>Average Reading time: {0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes</p>
                <h3>Preview</h3>
                <p>{text}</p>

            </div>
        </>
    )
}
