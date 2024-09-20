import React, {useState} from 'react'
import "./styles.css"

const ToDoForm = ({addToDo}) => {

    const [value, setValue] = useState("");
    const [category, setCategory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!value || !category)
            return 

        addToDo(value, category)
        setValue("")
        setCategory("")
    }


    return (
        <div className='todoform'>
            <h2>Adicione uma nova tarefa</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Digite o título da tarefa' value= {value} onChange={(e) => setValue(e.target.value)}/>
                <input type='text' placeholder='Digite a categoria da tarefa' value={category} onChange={(e) => setCategory(e.target.value)}/>
                <button type='submit'>Adicionar tarefa</button>
            </form>
        </div>
    )
}

export default ToDoForm;