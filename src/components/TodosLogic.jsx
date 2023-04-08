import { useState } from "react";
import InputTodo from "./components/InputTodo";
import TodosList from './components/TodosList'

const todosData = [
  {
    id: 1,
    title: 'Setup development environment',
    completed: true,
  },
  {
    id: 2,
    title: 'Develop website and add content',
    completed: false,
  },
  {
    id: 3,
    title: 'Deploy to live server',
    completed: false,
  },
];

const TodosLogic = () => {
  const [todos, setTodos] = useState(todosData)

  return (
    <div>
      <InputTodo setTodos={setTodos} />
      <TodosList todosProps={todos} setTodos={setTodos} />
    </div>
  )
}

export default TodosLogic;