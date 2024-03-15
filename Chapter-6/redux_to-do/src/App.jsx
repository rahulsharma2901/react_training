import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';

function App() {
  const [todo, setTodo] = useState();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo))
  }

  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t))
  }


  return (
    <div className="App">
      <header className="App-header">
        <h2>To-Do List in React using Redux</h2>
        <form onSubmit={handleSubmit}>
          <input placeholder='Enter a todo' style={{
            width: 350,
            padding: 10,
            borderRadius: 20,
            border: "none",
            fontSize: 20,
          }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" style={{
            padding: 10,
            borderRadius: 20,
            fontSize: 15,
            marginLeft: 20,
          }}>GO</button>
        </form>
        <ul className='allTodo'>
          {
            todos && todos.map((t) => (
              <li key={t.id} className='singleTodo'>
                <span className='todoText'>{t.todo}</span>
                <button style={{
                  borderRadius: 20,
                  padding: 10,
                  border: '1px solid white',
                  color: 'white',
                  backgroundColor: 'red',
                }}
                onClick={() => removeHandler(t)}
                >DELETE</button>
              </li>
            ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
