import { useState } from "react";

const InputTodo = ({setTodos}) => {
  const [title, setTitle] = useState('');

  const handleChange = e => setTitle(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(title);
    setTitle('');
  }

  const addTodo = title => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
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