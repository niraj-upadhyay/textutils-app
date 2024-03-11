import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "Sucess");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "Sucess");
  };


  const handleclearClick = () => {
    let newText = ''
    setText(newText);
    props.showAlert(" Clear Text!", "Sucess");
  };
  
  const handlCopy = () =>{
    var textArea = document.getElementById("MyBox");
    textArea.select();
    navigator.clipboard.writeText(textArea.value)
    props.showAlert(" copyText!", "Sucess");
   
  }

  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Remove Extra spacees!", "Sucess");

  }


  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState(" ");

  return (
    <>
      <div className="container">
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="MyBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary" onClick={handleUpClick}>
  Convert to Uppercase
</button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 " onClick={handleLoClick}>
          Convert to Lowercase
        </button>

        
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleclearClick}>
          Clear Text
        </button>

          
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handlCopy}>
          Copy Text
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
          Remove Extra Space
        </button>



      </div>

      <div className="container">
        <h2>Your Text Summary </h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} word and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
