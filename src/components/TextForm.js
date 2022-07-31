import React, { useState } from "react";

export default function TextForm(props) {
  const countWords=()=>{
     var str=text;
     if(str.length===0) return 0;
     str = str.replace(/\n/g, " ");
     str = str.replace(/(^\s*)|(\s*$)/gi,"");
     str = str.replace(/[ ]{2,}/gi," ");
     str = str.replace(/\n /,"\n");
     return str.split(' ').length;
  }
  const handleUpClick = () => {
    //  console.log("UpperCase"+text);
    var newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted to Upper Case", "success");
  };
  const handleLowClick = () => {
    //  console.log("LowerCase"+text);
    var newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to Lower Case", "success");
  };
  const handleReplace = () => {
    //  console.log("UpperCase"+text);
    let newText = text.replaceAll(find, replace);
    setText(newText);
    props.showAlert("Text Replaced", "success");
  };
  const handleClear = () => {
    var newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };
  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text Copied", "success");
  };
  const handleOnChangeText = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };
  const handleOnChangeFind = (event) => {
    //console.log("On Change");
    setFind(event.target.value);
  };
  const handleOnChangeReplace = (event) => {
    //console.log("On Change");
    setReplace(event.target.value);
  };
  const [text, setText] = useState("");
  const [find, setFind] = useState("");
  const [replace, setReplace] = useState("");

  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>
          <b>{props.heading}</b>
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          <button
            className="btn btn-primary my-3 float-right"
            onClick={handleCopy}
            disabled={text.length===0}
          >
            Copy Text
          </button>
        </h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChangeText}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#2E2E2E",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <div className="row gy-2 gx-3 align-items-center">
          <div className="col-auto">
            <button className="btn btn-primary my-3" onClick={handleUpClick}  disabled={text.length===0||text===text.toUpperCase()}>
              Convert to Uppercase
            </button>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary my-3" onClick={handleLowClick}  disabled={text.length===0||text===text.toLowerCase()}>
              Convert to Lowercase
            </button>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary my-3" onClick={handleClear}  disabled={text.length===0}>
              Clear Text
            </button>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary my-3" onClick={handleSpaces}  disabled={text.length===0}>
              Remove extra spaces
            </button>
          </div>
          &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;
          <div className="col-auto">
            <input
              className="form-control"
              id="repaceThis"
              value={find}
              onChange={handleOnChangeFind}
              placeholder="Find"
            />
          </div>
          <div className="col-auto">
            <input
              className="form-control"
              id="fromThis"
              value={replace}
              onChange={handleOnChangeReplace}
              placeholder="Replace"
            />
          </div>
          <div className="col-auto">
            <button className="btn btn-primary my-3" onClick={handleReplace}  disabled={text.length===0||replace.length===0||find.length===0}>
              REPLACE
            </button>
          </div>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {countWords()} words and {text.length} charchters.
        </p>
        <p>Approx {0.008 * text.split(" ").length} minutes to read.</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Write something above to preview here !!"}
        </p>
      </div>
    </>
  );
}
