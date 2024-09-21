import React, {useState} from 'react'
import "./styles.css"

const ToDoForm = ({addToDo}) => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title || !body)
            return 

        addToDo(title, body)
        setTitle("")
        setBody("")
    }


    return (
        <div className='todoform'>
            <h2>Adicione uma nova tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Digite o título da tarefa' value= {title} onChange={(e) => setTitle(e.target.value)}/>
                <input type='text' placeholder='Digite a tarefa' value={body} onChange={(e) => setBody(e.target.value)}/>
                <button type='submit'>Adicionar tarefa</button>
            </form>
        </div>
    )
}

export default ToDoForm;