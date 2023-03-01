

export default function Task(props) {
    return (
            <div className="task" style={{textDecoration: props.completed ? "line-through" : "none"}}>
                <h3>{props.taskName}</h3> 
                <button onClick={() => props.completeTask(props.id)}> Done </button>
                <button onClick={() => props.deleteTask(props.id)}> - </button>
            </div>
    )
}