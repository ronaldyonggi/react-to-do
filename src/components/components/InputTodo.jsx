import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const InputTodo = ({setTodos}) => {
  const [title, setTitle] = useState('');

  const handleChange = e => setTitle(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    // Only add a new todo if the title is not empty
    if (title.trim()) {
      addTodo(title);
    } else alert('Cannot add blank todo!');

    setTitle('');
  }

  const addTodo = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }

    setTodos(prevState => prevState.concat(newTodo))
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text" 
      placeholder="Add a todo..."
      value={title}
      onChange={handleChange}
      />
      <input type="submit" />
    </form>
  )
}

export default InputTodo;