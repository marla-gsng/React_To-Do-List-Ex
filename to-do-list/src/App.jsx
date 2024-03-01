import { useState } from 'react'
import List from './List'
import './App.css'


function App() {
   const [todoItems, setTodoItems] = useState([
    { task: 'Learn React', status: 'open', id: '01' },
    { task: 'Build a project', status: 'open', id: '02' },
    { task: 'Deploy project', status: 'open', id: '03' },
    { task: 'Delete Project', status: 'open', id: '04' },
    { task: 'Create a new practice project', status: 'open', id: '05' },

  ]);

    const removeTodo = (id) => {
    const updatedTodoItems = todoItems.filter(todo => todo.id !== id);
    setTodoItems(updatedTodoItems);
  };

    
  return (
    <>
      <h1>My To Do List:</h1>
      <List todoItems={todoItems} removeTodo={removeTodo}/>

    </>
  )
}



export default App
