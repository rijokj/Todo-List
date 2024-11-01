import { useState } from "react"
import "./input.css"

const TodoList = ()=>{

    const [inputField, setInputField]=useState("")

    const [item ,setItem] = useState([])

    const handleChange = (event)=>{
        setInputField(event.target.value)
    }

    const addToList = ()=>{
        if(inputField){
            setItem([...item , {text:inputField, isCompleted:false}])
            setInputField("")
        }
    }

    const removeFromList = (index)=>{
        const newItem = item.filter((_,id)=> id !== index)
        setItem(newItem)
    }
    const toggleCompletion = (index) => {
      setItem(
        item.map((value, i) =>
          i === index ? { ...value, isCompleted: !value.isCompleted } : value
        )
      )
    }
    
    return (
      <div className="todo-container">
        <h1>To-Do List</h1>

        <div>
          <input
            className="input-container"
            type="text"
            onChange={handleChange}
            placeholder="Enter a Task"
            value={inputField}
          />
          <button className="btn" onClick={addToList}>
            Add
          </button>
        </div>
        <div className="todo-list">
          {item.map((value, index) => {
            return (
              <div
                key={index}
                style={{ display: 'flex', alignItems: 'center' }}
                className="todo-item"
              >
                <input
                  type="checkbox"
                  checked={value.isCompleted}
                  onChange={() => toggleCompletion(index)}
                />
                <h2
                  style={{
                    textDecoration: value.isCompleted ? 'line-through' : 'none',
                    margin: '0 10px',
                    color: value.isCompleted ? 'red' : 'black',
                  }}
                  
                >
                  {value.text}
                </h2>
                <button onClick={() => removeFromList(index)}>x</button>
              </div>
            )
          })}
        </div>
      </div>
    )
}

export default TodoList;