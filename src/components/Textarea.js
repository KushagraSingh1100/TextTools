import React, { useState } from "react";

export default function Textarea(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.alert("The text area has been converted to uppercase", "success");
  };

  const handleClear = () => {
    console.log("Clear The Text");
    let newText = "";
    setText(newText);
    props.alert("The text area has been cleared", "success");
  };

  const handleDownClick = () => {
    console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.alert("The text area has been converted to lower case", "success");
  };

  const handleOnChnage = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.alert("The text area has been copied", "success");
  };

  const [text, setText] = useState("Enter text here");

  return (
    <div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h1>Enter The Text You Want To Convert</h1>
        <textarea
          style={{
            backgroundColor: props.mode === "dark" ? "black" : "white",
            color: props.mode === "light" ? "black" : "white",
          }}
          className="form-control"
          value={text}
          onChange={handleOnChnage}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert To UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleDownClick}>
        Convert To LowerCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClear}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>
        Copy Text
      </button>
      <div
        className="container my-3"
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <h2>Text Summary</h2>
        <p>
          Your Text have {text === "" ? "0" : text.split(" ").length} words and{" "}
          {text.length} characters
        </p>
      </div>
    </div>
  );
}
