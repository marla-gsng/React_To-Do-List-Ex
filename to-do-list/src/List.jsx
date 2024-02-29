import './List.css'


const List = ({todoItems}) => {
      return (
     <div className="list">
      <h2>Todo List</h2>
      {todoItems.length === 0 ? (
        <p>No tasks today!</p>
      ) : (
        <ul>
          {todoItems.map(todo => (
            <li key={todo.id} className={todo.status}
            </li>
          
        </ul>
        )}
    </div>
  )
}

console.log(List);

export default List