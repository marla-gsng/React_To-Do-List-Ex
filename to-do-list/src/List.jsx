


const List = ({todoItems}) => {
      return (
    <div className="list">
        <h2>On my list are:</h2>
         {todoItems.length === 0 ? (
        <p>No tasks today!</p>
      ) 
      : 
      (
      <ul>
        {todoItems.map(todo => (
          <li key={todo.id}>
            {todo.task} - {todo.status}
          </li>
        ))}
      </ul>
      )}
      </div>
  );
}

export default List