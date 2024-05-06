import './App.css'
import AddTodo from './components/TaskInput'
import Todos from './components/TaskList'

function App() {

  return (
    <>
      {/* <h1>Todo with Redux Toolkit</h1> */}
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
