import './List.css'


const List = ({todoItems, removeTodo}) => {
    const handleRemove =(id) => {
        removeTodo(id);
    }   
      return (
     <div className="list">
      <h2>Todo List</h2>
      {todoItems.length === 0 ? (
        <p>No tasks today!</p>
      ) : (
        <ul>
          {todoItems.map(todo => (
            <li key={todo.id} className={todo.status === 'open' ? 'open' : 'closed'}>
              <span className="task">{todo.task}</span>
              <input
                type="checkbox"
              />
               <button onClick={() => removeTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

console.log(List);

export default List