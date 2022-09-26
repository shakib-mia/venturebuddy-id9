import React from "react";
import App from "./../App";

const FAQ = () => {
  return (
    <div className="faq">
      <div className="d-flex title justify-content-center">
        Frequently Asked Questions
      </div>

      <div
        class="accordion accordion-flush col-md-6 mx-auto"
        id="accordionFlushExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              What are the investment terms?
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div className="d-flex align-items-center">
                <div className="hr"></div>
                <p className="mb-0">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid hic incidunt rem mollitia cupiditate praesentium
                  officia nobis libero facilis quos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              How does the Venturebuddy valuation tool work?
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div className="d-flex align-items-center">
                <div className="hr"></div>
                <p className="mb-0">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid hic incidunt rem mollitia cupiditate praesentium
                  officia nobis libero facilis quos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Is there a sample report or a free trial available?
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div className="d-flex align-items-center">
                <div className="hr"></div>
                <p className="mb-0">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid hic incidunt rem mollitia cupiditate praesentium
                  officia nobis libero facilis quos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingfour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapsefour"
              aria-expanded="false"
              aria-controls="flush-collapsefour"
            >
              What is the authenticity of the tool?
            </button>
          </h2>
          <div
            id="flush-collapsefour"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingfour"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div className="d-flex align-items-center">
                <div className="hr"></div>
                <p className="mb-0">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid hic incidunt rem mollitia cupiditate praesentium
                  officia nobis libero facilis quos.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingfive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapsefive"
              aria-expanded="false"
              aria-controls="flush-collapsefive"
            >
              How does Venturebuddy protect my data?
            </button>
          </h2>
          <div
            id="flush-collapsefive"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingfive"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div className="d-flex align-items-center">
                <div className="hr"></div>
                <p className="mb-0">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Aliquid hic incidunt rem mollitia cupiditate praesentium
                  officia nobis libero facilis quos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
