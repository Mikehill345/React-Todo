import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './components/Todo.css'

const chores = [
  {
    name:'Learn React',
    id:123,
    completed:false
  },
  {
    name:'Walk dog',
    id:1234,
    completed:false
  },
  {
    name:'Eat Pizza',
    id:1235,
    completed:false
  },
]

class App extends React.Component {
  constructor(){
    super()
    this.state={
      chores
    }
  }

  addChore = (e, item) => {
    e.preventDefault()
    const newChore = {
      name:item,
      id:Date.now(),
      completed:false
    }
    this.setState({
      chores: [...this.state.chores, newChore]
    })
  }

  toggleItem = (id) => {
    console.log(id)
    this.setState({
      chores:this.state.chores.map((item) => {
        if (id === item.id){
          return{
            ...item,
            completed:!item.completed
          }
        }
        return item
      })
    })
  }


  clearCompleted = (e) => {
    e.preventDefault()
    this.setState({
      chores:this.state.chores.filter((item) => !item.completed)
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='body'>
      <div className='header'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem ={this.addChore} />
      </div>
      <div className='list'>
        <TodoList chores={this.state.chores}
        toggleItem={this.toggleItem}
        clearCompleted={this.clearCompleted}
        />
      </div>
      </div>
    );
  }
}

export default App;
