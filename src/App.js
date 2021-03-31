import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentValue: "0",
      operator: false,
      decimal: false
    }
  }
  
  handleClick = (btnValue) => {
    let currentValue =  this.state.currentValue
    let operator  =  this.state.operator
    let decimal = this.state.decimal
    
    switch(true) {
        case btnValue === "0" ||
             btnValue === "1" ||
             btnValue === "2" ||
             btnValue === "3" ||
             btnValue === "4" ||
             btnValue === "5" ||
             btnValue === "6" ||
             btnValue === "7" ||
             btnValue === "8" ||
             btnValue === "9" :
        if (this.state.currentValue !== "0") {
          currentValue += btnValue;
          operator = false
        } else {
          currentValue = btnValue
        }
        break;
       
        case btnValue === "/" ||
             btnValue === "*" ||
             btnValue === "-" ||
             btnValue === "+" :
        if (!this.state.operator) {
          currentValue += btnValue;
          operator = true
          decimal = false
        } else {
          const newValue =  currentValue.slice(0, currentValue.length - 1)
          currentValue = newValue + btnValue
        }
        break;
        
        case btnValue === "AC":
        currentValue = "0"
        operator = false
        decimal = false
        break;
        
        case btnValue === "DEL":
        if (this.state.currentValue === "0") {
          operator = false
          decimal = false
          return
        }
        currentValue = currentValue.slice(0, currentValue.length - 1)
        operator = false
        if(this.state.currentValue === "") {
          currentValue = "0"
          operator = false
          decimal = false
        }
        break;
        
        case btnValue === "=":
        currentValue = Number(eval(currentValue))
        currentValue = currentValue.toString()
        break;
        
        case btnValue === ".":
        if(!this.state.decimal) {
          currentValue += btnValue
          decimal = true
        }
        
    }
    this.setState({decimal})
    this.setState({operator})
    this.setState({currentValue})
  }
  
  render() {
    return (
      <div id="calculator">
        <Screen id="display" currentValue={this.state.currentValue} />
        <Button id="clear" name="AC" handleClick={this.handleClick} />
        <Button id="delete" name="DEL" handleClick={this.handleClick} />
        <Button id="divide" name="/" handleClick={this.handleClick} />
        <Button id="seven" name="7" handleClick={this.handleClick} />
        <Button id="eight" name="8" handleClick={this.handleClick} />
        <Button id="nine" name="9" handleClick={this.handleClick} />
        <Button id="multiply" name="*" handleClick={this.handleClick} />
        <Button id="four" name="4" handleClick={this.handleClick} />
        <Button id="five" name="5" handleClick={this.handleClick} />
        <Button id="six" name="6" handleClick={this.handleClick} />
        <Button id="subtract" name="-" handleClick={this.handleClick} />
        <Button id="one" name="1" handleClick={this.handleClick} />
        <Button id="two" name="2" handleClick={this.handleClick} />
        <Button id="three" name="3" handleClick={this.handleClick} />
        <Button id="add" name="+" handleClick={this.handleClick} />
        <Button id="decimal" name="." handleClick={this.handleClick} />
        <Button id="zero" name="0" handleClick={this.handleClick} />
        <Button id="equals" name="=" handleClick={this.handleClick} />
      </div>
    )
  }
}

class Screen extends React.Component {
  render() {
    return (
      <div id={this.props.id}>
        {this.props.currentValue}
      </div>
    )
  }
}

class Button extends React.Component {
  
  runHandleClick = () => {this.props.handleClick(this.props.name)}
  
  render() {
    return (
      <button id={this.props.id} onClick={this.runHandleClick}>
        {this.props.name}
      </button>
    )
  }
}

export default App;
