import React, {useState} from 'react'
import "./styles.css"
import EditToDo from '../EditToDo'

const ToDo = ({toDo, completeToDo, removeToDo, updateToDo}) => {
  const [editVisible, setEditVisible] = useState(false)

  const handleEditToDo = () => {
    setEditVisible(!editVisible);
  }

  return (
    <div className="todo">
        <div className="content" style={{textDecoration: toDo.isCompleted ? "line-through" : ""}}>
            <p><b>Tarefa:</b> {toDo.text}</p>
            <p className="category">(<b>Categoria:</b> {toDo.category})</p>
            {editVisible && <EditToDo setEditVisible = {setEditVisible} toDo={toDo} updateToDo={updateToDo}/>}
        </div>
        {!editVisible &&
        <div className='buttons'>
            <button id='complete' onClick={() => completeToDo(toDo.id)}>Completar</button>
            <button id='delete' onClick={() => removeToDo(toDo.id)}>Excluir</button>
            <button id='edit' onClick={handleEditToDo}>Editar</button>
        </div>
        } 
    </div>
  )
  
}

export default ToDo;

