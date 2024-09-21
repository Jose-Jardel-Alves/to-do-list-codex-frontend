import React, { useState } from 'react'
import "./styles.css"

const EditToDo = ({setEditVisible, toDo, updateToDo}) => {

    const [newTitle, setNewTitle] = useState("")
    const [newBody, setNewBody] = useState("")


    const handleTitle = (e) =>{
        if(e.target.value.trim === ""){
            setNewTitle("")
        }
    }

    const handleBody = (e) =>{
        if(e.target.value.trim === ""){
            setNewBody("")
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        let title = toDo.title
        let body = toDo.body
        if (newTitle){
            title = newTitle
        }
        if (newBody){
            body = newBody
        }

        setEditVisible(false)
        updateToDo(toDo.id, title, body)

    };  
    return (
        <form className='editToDo' onSubmit={handleSubmit}>
            <h4>Edite a tarefa: </h4>
            <input type='text' placeholder='Edite o título da tarefa' onChange={(e) => setNewTitle(e.target.value)} onBlur={handleTitle}/>
            <input type='text' placeholder='Edite a tarefa' onChange={(e) => setNewBody(e.target.value)} onBlur={handleBody}></input>
            <button onClick={handleSubmit}>Concluir</button>
        </form>
    )
}

export default EditToDo