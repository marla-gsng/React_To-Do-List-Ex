


const List = ({todoItems}) => {
      return (
    <div className="list">
    
      <ul>
        {todoItems.map(todo => (
          <li key={todo.id}>
            {todo.task} - {todo.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

console.log(List);

export default List