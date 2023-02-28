import React, { useState }  from 'react'


export default function App() {

  const [todoList, setTodoList] = useState([])
  const [newtask, setNewTask] = useState("")

  const handleChange = (event) => {
      setNewTask(event.target.value)
  }

  const addTask = () => {
      const task = {
        id:todoList.length === 0 ? 1 : todoList[todoList.length] + 1,
        taskName: newtask
      }
      setTodoList([...todoList, task])
  }

  const deleteTask = (id) => {
        // const newTodoList = todoList.filter((task) => {
        //     if(task.id === id){
        //       return false;
        //     }else {
        //       return true;
        //     }
        // })
        setTodoList(todoList.filter((task) => task.id !== id))
  }

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return <div>
                      <h3>{task.taskName}</h3> 
                      <button onClick={() => deleteTask(task.id)}> - </button>
                  </div>
        })}
      </div>
    </div>
  )
}


