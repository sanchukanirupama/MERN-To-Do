import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './components/Todo';



function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [isUpdating, setUpdating] = useState("");

  useEffect(()=>{
    axios.get("http://localhost:5000/get-todo")
    .then((res)=> {setTodo(res.data)})
    .catch((err) => console.log(err))
  })


  const add = () =>{
    if (text===""){
      alert("Please write a ToDo before submitting.."); 
    }else if (text !== "" && isUpdating ==="") {
      axios.post("http://localhost:5000/save-todo", {text})
      .then((res)=> {setText("")})
      .catch((err) => console.log(err))
    }else{
      axios.post("http://localhost:5000/update-todo", {_id: isUpdating,text})
      .then((res)=> {console.log(res.body)
        setText("")
        setUpdating("")
      })
      .catch((err) => console.log(err))

    }

  }

  const deleteToDo = (_id) => {
    axios.post("http://localhost:5000/delete-todo", {_id})
    .then((res)=> {console.log(res.body)})
    .catch((err) => console.log(err))

  }

  const updateToDo = (_id, text) => {
    setUpdating(_id);
    setText(text);
  }

  return (
    <div className='App'>
      <div className='container'>
        <h1>Place Your ToDo's Here....</h1>
        <div className='top'>
          <input type="text" required="required" placeholder='Write here before it forgets...' value={text} onChange={(e)=>setText(e.target.value)}></input>
          <button className='btn btn-outline-success' onClick={add}>{isUpdating?"update":"Add To-Do"}</button>
        </div>
        <ul className='list-group list-group-flush'>
          <li class="list-group-item">
          {todo.map(todo => <Todo 
          key={todo._id}
          text={todo.text}
          remove={()=>deleteToDo(todo._id)}
          update={()=>updateToDo(todo._id, todo.text)}/>)}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;