import React from 'react';

class TodoItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: 'green'
    }
  }

  render() {
    console.log(this.props)
    let textColorStyle = {'color': this.state.status}
    return (
    <div>
      <span style={textColorStyle}>{this.props.todoText}</span>
      <button onClick={this.props.deleteTodoItem}>x</button>
    </div>)
  }
}

export default TodoItem;