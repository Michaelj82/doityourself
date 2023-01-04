import './App.css';
import React from 'react'
import {Component} from 'react'
import uniqid from "uniqid";
import Overview from './components/Overview';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      task: {
        text: '', 
        id: uniqid()},
      tasks: [],
    };
  }
  
  handleChange = (e) => {
    this.setState({
      task:{
        text:e.target.value,
      }
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {text: ''}
    });
  };


  render(){

    const {task, tasks} = this.state;


    return (
      //logic for website
  
      <div>
        <form onSubmit = {this.onSubmitTask}>
          <label htmlFor = 'taskInput'>Enter task</label>
          <input onChange = {this.handleChange} 
          value={task.text}
          type='text' 
          id='taskInput'/>
          <button type='submit'>Add Task</button>
        </form>
        <Overview tasks={tasks}/>
      </div>
    );
  }
  
}

export default App;
