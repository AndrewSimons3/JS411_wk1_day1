import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isClicked: false,
      text: "",
      todos: []
    }
  }

  addTodoItem = () => {
    let todoText = this.state.text
    let updatedTodos = [...this.state.todos, todoText]
    this.setState({todos: updatedTodos, text: ""})
  }

  deleteTodoItem = function(index) {
    if(this.state) {
      let updatedTodos = this.state.todos.splice(index + 1)
      console.log(index)
      console.log(updatedTodos)
      this.setState({todos: updatedTodos})
      console.log(this)
    }
   
  }

  changedText = (e) => {
    console.log(e.target.value)
    this.setState({text: e.target.value})
  }

  render() {
    console.log(this.state.todos)
    console.log('***THIS IS STATE***', this.state.isClicked)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <input value={this.state.text} onChange={this.changedText} type="text"></input>
        <button onClick={this.addTodoItem}>{this.state.isClicked ? 'On' : 'Off'}</button>
        <div>
        {(this.state.todos.map((todo, index) => {
          return <div key={index}>
            <span>
            {todo}
              </span>
              <button onClick={this.deleteTodoItem.bind(this, index)}>x</button>
          </div>
        }))}
      </div>
      </header>
    </div>
  );
}
}

export default App;
