import { useState } from 'react'
import List from './List'

import './App.css'

function App() {
   const [todoItems, setTodoItems] = useState([
    { task: 'Learn React', status: 'open', id: '01' },
    { task: 'Build a project', status: 'open', id: '02' },
    { task: 'Deploy project', status: 'open', id: '03' }
  ]);

  return (
    <>
      <h1>My To Do List:</h1>
      <List todoItems={todoItems} />
    </>
  )
}

console.log(App);

export default App
