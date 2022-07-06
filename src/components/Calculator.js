/* eslint-disable linebreak-style */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';

class Calculator extends React.Component {
  render() {
    return (
      <div className="calculator-container">
        <Results />
        <DigitsAndOperator />
      </div>
    );
  }
}

// Result Component

class Results extends React.Component {
  render() {
    return (
      <div className="results">
        <p>0</p>
      </div>
    );
  }
}

// Digits and Operators Box
class DigitsAndOperator extends React.Component {
  render() {
    return (
      <div className="digit-operator">
        <Digits />
        <Operators />
      </div>
    );
  }
}

// Digits Component

class Digits extends React.Component {
  render() {
    return (
      <div className="digits">
        <table className="tableDigit" cellSpacing={0}>
          <tr>
            <td>AC</td>
            <td>+/-</td>
            <td>%</td>
          </tr>
          <tr>
            <td>7</td>
            <td>8</td>
            <td>9</td>
          </tr>
          <tr>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td colSpan={2}>0</td>
            <td className="point">.</td>
          </tr>
        </table>
      </div>
    );
  }
}

// Operators

class Operators extends React.Component {
  render() {
    return (
      <div className="operators">
        <div className="eachSigns">
          <p className="signs">&divide;</p>
        </div>
        <div className="eachSigns">
          <p className="signs">&times;</p>
        </div>
        <div className="eachSigns">
          <p className="signs">-</p>
        </div>
        <div className="eachSigns">
          <p className="signs">+</p>
        </div>
        <div className="eachSigns">
          <p className="signs">=</p>
        </div>
      </div>
    );
  }
}

export default Calculator;
