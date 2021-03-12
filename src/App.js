
import './App.css';
import React from 'react';
import { evaluate } from 'mathjs'




class App extends React.Component {
  state = {
    myNumber: ["0"],
    key: [
      { value: "(", styling: "operator" },
      { value: ")", styling: "operator" },
      { value: "%", styling: "operator" },
      { value: "C", styling: "operator" },
      { value: "7", styling: "num" },
      { value: "8", styling: "num" },
      { value: "9", styling: "num" },
      { value: "÷", styling: "operator" },
      { value: "4", styling: "num" },
      { value: "5", styling: "num" },
      { value: "6", styling: "num" },
      { value: "x", styling: "operator" },
      { value: "1", styling: "num" },
      { value: "2", styling: "num" },
      { value: "3", styling: "num" },
      { value: "-", styling: "operator" },
      { value: "0", styling: "num" },
      { value: ".", styling: "num" },
      { value: "=", styling: "equals" },
      { value: "+", styling: "operator" },


    ],
  };

  handleInput = (val) => {
    if (val === "C") {
      this.setState({ myNumber: ["0"] });
    } else if (val === "=") {
      let expString = this.state.myNumber.join("");
      let output = evaluate(expString);
      this.setState({ myNumber: [output] });
    } else if (val === "x") {
      let anArray = [...this.state.myNumber, "*"];
      this.setState({ myNumber: anArray })
    } else if (val === "÷") {
      let anArray = [...this.state.myNumber, "/"];
      this.setState({ myNumber: anArray })
    } else {
      let anArray = [...this.state.myNumber, val];
      if (anArray[0] === "0") {
        anArray.shift()
      }
      this.setState({ myNumber: anArray })
    }
  };


  render() { 
    return (
      <div className="container">
        <div className="wrapper">
          <div className="screen">
            <h2>{this.state.myNumber}</h2>
          </div>
          <div className="buttons">
            {this.state.key.map((item) => {
              return (
              <ButtonKey
              number={item.value}
              styling={item.styling}
              clickFunction={this.handleInput}
              />
              );
            })}
          </div>
        </div>
        <h4>
          Made with 😖 & 🤔
        </h4>
      </div>
    )
  }
}

  const ButtonKey = (props) => {
    return (
      <button
        className={`btn ${props.styling}`}
        onClick={() => props.clickFunction(props.number)}
      >
        {props.number}
      </button>
    );

};



export default App;
