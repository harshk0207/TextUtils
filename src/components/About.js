import React from "react";

export default function About(props) {
  
  return (
    <div className="container" style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item"  style={{ backgroundColor: props.mode === "light" ? "white" : "#2E2E2E", color: props.mode === "dark" ? "white" : "black" }} >
          <h2 className="accordion-header" id="headingOne" >
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-controls="collapseOne"
              aria-expanded="false"
              style={{ backgroundColor: props.mode === "light" ? "white" : "#36454F", color: props.mode === "dark" ? "white" : "black" }} 
            >
              <strong>Analyse your text.</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextUtils gives you a way to analyse your text quickly and efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item"  style={{ backgroundColor: props.mode === "light" ? "white" : "#2E2E2E", color: props.mode === "dark" ? "white" : "black" }} >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={{ backgroundColor: props.mode === "light" ? "white" : "#36454F", color: props.mode === "dark" ? "white" : "black" }}
            >
             <strong>Free to use.</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
                TextUtils is a fee character counter tool that provides instant character count and word count statistics for a given text.
                TextUtils report the number of words and characters. Thus it is suitable for writing text with word or character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item"  style={{ backgroundColor: props.mode === "light" ? "white" : "#2E2E2E", color: props.mode === "dark" ? "white" : "black" }} >
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={{ backgroundColor: props.mode === "light" ? "white" : "#36454F", color: props.mode === "dark" ? "white" : "black" }}
            >
              <strong>Browser compatible.</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
               This word counter software works in any web browsr such as Chrome, Firefox, Internet Explorer, Safari, Opera.
                It suits to counter characters in Facebook, blog, books, excel document, pdf document, essays etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
