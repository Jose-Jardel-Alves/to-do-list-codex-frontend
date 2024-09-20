import React, { useState } from 'react'
import "./styles.css"

const EditToDo = ({setEditVisible, toDo, updateToDo}) => {

    const [newText, setNewText] = useState("")
    const [newCategory, setNewCategory] = useState("")


    const handleText = (e) =>{
        if(e.target.value.trim === ""){
            setNewText("")
        }
    }

    const handleCategory = (e) =>{
        if(e.target.value.trim === ""){
            setNewCategory("")
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        let text = toDo.text
        let category = toDo.category
        if (newText){
            text = newText
        }
        if (newCategory){
            category = newCategory
        }

        setEditVisible(false)
        updateToDo(toDo.id, text, category)

    };  
    return (
        <form className='editToDo' onSubmit={handleSubmit}>
            <h4>Edite a tarefa: </h4>
            <input type='text' placeholder='Digite o novo texto da tarefa' onChange={(e) => setNewText(e.target.value)} onBlur={handleText}/>
            <input type='text' placeholder='Digite a nova categoria da tarefa' onChange={(e) => setNewCategory(e.target.value)} onBlur={handleCategory}></input>
            <button onClick={handleSubmit}>Concluir</button>
        </form>
    )
}

export default EditToDo