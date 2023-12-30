import React from "react";

export default function About(props) {
  let mystyle = {
    color: props.mode === "light" ? "black" : "white",
    backgroundColor: props.mode === "light" ? "white" : "black",
  };
  return (
    <>
      <div class="accordion my-3" style={mystyle} id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              style={mystyle}
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              About This Site
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={mystyle}>
              <strong>This site is made for learning purpose.</strong> I made
              this site to learn React.JS. This site could also be helpful for
              text manipulation and could be used to perform serveral useful
              operations on text with ease.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              style={mystyle}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How I Made This Site
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={mystyle}>
              <strong>This site was made by using React.JS.</strong> I took help
              of youtube tutorial form CodeWithHarry to build this site and I
              gave my personal touches to it to enhance the user experience and
              the functionality of this site.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              style={mystyle}
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Contact Me
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={mystyle}>
              You can contact me through the following platforms:
              <br />
              <strong>Github: </strong>
              <a href="https://github.com/KushagraSingh1100" target="_main">
                KushagraSingh1100
              </a>
              <br />
              <strong>Instagram: </strong>
              <a
                href="https://www.instagram.com/kushagraasinghh/"
                target="_main"
              >
                kushagraasinghh
              </a>
              <br />
              <strong>E-mail: </strong> kushagrasingh1100@gmail.com
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
