import React, {useState} from 'react'
import "./styles.css"

const ToDo = ({toDo, completeToDo, removeToDo, editToDo}) => {
  const [editVisible, setEditVisile] = useState(false)

  return (
    <div className="todo">
        <div className="content" style={{textDecoration: toDo.isCompleted ? "line-through" : ""}}>
            <p><b>Tarefa:</b> {toDo.text}</p>
            <p className="category">(<b>Categoria:</b> {toDo.category})</p>
        </div>
        <div className='buttons'>
            <button id='complete' onClick={() => completeToDo(toDo.id)}>Completar</button>
            <button id='delete' onClick={() => removeToDo(toDo.id)}>Excluir</button>
            <button id='edit' onClick={() => editToDo(toDo.id, toDo.text, toDo.category)}>Editar</button>
        </div>
    </div>
  )
  
}

export default ToDo;

