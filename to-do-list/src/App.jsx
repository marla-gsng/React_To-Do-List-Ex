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

  
    const toggleStatus = (id) => {
    const updatedTodoItems = todoItems.map(todo => {
      if (todo.id === id) {
        return { ...todo, status: todo.status === 'open' ? 'closed' : 'open' };
      }
      return todo;
    });
    setTodoItems(updatedTodoItems);
  };



  return (
    <>
      <h1>My To Do List:</h1>
      <div className="App">
        <List todoItems={todoItems}/>
     </div>
    </>
  )
}



export default App
