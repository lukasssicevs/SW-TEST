import React, { Component } from "react";

import "./ProgressBar.css";

export class ProgressBar extends Component {
  checkStep(stepNumber, currentStep, activeClass, passiveClass) {
    return stepNumber <= currentStep ? activeClass : passiveClass;
  }

  checkStepLine(stepNumber, currentStep, activeClass, passiveClass) {
    return stepNumber < currentStep ? activeClass : passiveClass;
  }

  checkMarginLine(stepLength, currentStep, activeClass, passiveClass) {
    return stepLength === currentStep ? activeClass : passiveClass;
  }

  renderStepSymbol(stepNumber, currentStep) {
    return currentStep < stepNumber ? stepNumber : <span>&#10003;</span>;
  }

  showSteps(stepMap, checkoutStep) {
    const stepLength = Object.keys(stepMap).length;
    const stepTitles = ["Shipping", "Review & Payments", "Details"];
    let steps = [];
    let stepNumber = 0;
    let currentStep = 1;

    console.log(checkoutStep);

    for (const [key] of Object.entries(stepMap)) {
      steps.push(key);
    }

    steps.forEach((step, index) => {
      if (step === checkoutStep) {
        currentStep = index + 1;
      }
    });

    console.log(currentStep);

    return (
      <div className="progress-bar">
        <div className="active-margin-step-line"></div>
        {steps.map((step) => {
          stepNumber++;
          if (stepNumber < stepLength) {
            return (
              <>
                <div className="step">
                  <div
                    className={this.checkStep(
                      stepNumber,
                      currentStep,
                      "active-step-number",
                      "passive-step-number"
                    )}
                  >
                    {this.renderStepSymbol(stepNumber, currentStep)}
                  </div>
                  <div
                    className={this.checkStep(
                      stepNumber,
                      currentStep,
                      "active-step-value",
                      "passive-step-value"
                    )}
                  >
                    <span className="step-title">
                      {stepTitles[stepNumber - 1]}
                    </span>
                  </div>
                </div>
                {stepNumber < stepLength - 1 && (
                  <div
                    className={this.checkStepLine(
                      stepNumber,
                      currentStep,
                      "active-middle-step-line",
                      "passive-middle-step-line"
                    )}
                  ></div>
                )}
              </>
            );
          }
        })}
        <div
          className={this.checkMarginLine(
            stepLength,
            currentStep,
            "active-margin-step-line",
            "passive-margin-step-line"
          )}
        ></div>
      </div>
    );
  }

  render() {
    const { checkoutStep, stepMap } = this.props;

    return this.showSteps(stepMap, checkoutStep);
  }
}

export default ProgressBar;
