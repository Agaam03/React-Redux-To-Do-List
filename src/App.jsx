import FilterTodo from "./Components/FilterTodo"
import ListTodo from "./Components/ListTodo"
import InputTodo from "./Components/inputTodo"
import 'boxicons'

function App() {
  return (
    <>
    <section className="section">
      <h1>What's the plan for today ?</h1>
      <InputTodo/>
      <FilterTodo/> 
      <ListTodo/>
    </section>

    </>
  )
}

export default App
