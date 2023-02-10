import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import Form from './components/Form';
import { useState } from 'react';

//Dummy data, som vi liksom skal hente inn data fra. Lager en array, med objekt. Videre mapper den ut på Main-content
const todoStart = [
  {
    id:0,
    title: "Lage middag",
    content: "dbahjdbjabbdsa dasbjdsadbhsja sdssss sehei svaies"
  }
]

function App() {
  //Lager states, med array syntaks! Også avslutter med = useState()
  const [todo, setTodo] = useState({title: "", content: ""})
  //Lager en state, som legger inn objekter i "todoStart" og med ... betyr å legge til. Betyr det samme som push. For nye nytt inn.  
  const [todos, setTodos] = useState([...todoStart])
  //Lager en state for id.en 
  const [id, setId] = useState(1)

  //Lager funksjon, for å legge til. 
  const addToDo = (event) => {
    const inputName = event.target.name
    const inputValue = event.target.value
    //Så skal vi sette de verdiene riktige. Som title, og value blir det som vi fyller inn med. prev er egetnavn- vi skal bare legge til.  
    setTodo((prev) => ({...prev, [inputName]: inputValue}))
  }

  //Lager funksjon for knappen. Istedenfor å legge til ny, plusser vi heller på 1. Så viser vi til title og id, og den skal være i rekkefølge. 
  const handleClick = () => {
    setId((prev) => prev + 1)
    setTodos((prev) => [
      {id, title: todo.title, content: todo.content}, ...prev
    ])
  }

  //funksjon for å fjerne to-dos. Bruker filter, for å velge hvem som skal fjernes. Filtrerer på id.en. 
  const removeToDos = (todoid) => {
    setTodos(todos.filter((item) => item.id !== todoid))
    console.log("Sjekk")

  }

  //Sende med dem som props, for skjema. Hva som skal sendes ut, blir under return. Skriver derfor dette inn i form. HandleClick og AddToDo, og todo.
  return (
    <>
    <Navbar username="henrietth"/>
    <section className='container'>
      <Form handleClick={handleClick} addToDo={addToDo} todo={todo}/>
    </section>
    <Todos todoStart={todos} removeToDos={removeToDos} />

    </>
  );
}

export default App;
