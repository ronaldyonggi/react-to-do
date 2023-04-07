import { useState } from "react";

const InputTodo = () => {
  const [title, setTitle] = useState('');

  const handleChange = e => setTitle(e.target.value);

  return (
    <form>
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