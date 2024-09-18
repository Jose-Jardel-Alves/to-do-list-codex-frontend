import React, {useState} from "react";

const Home = () => {
    const [listaDeTarefas, setListaDeTaredas] = useState([
        {
            id: '1',
            text: "Minha primeira tarefa",
            category: "Pessoal",
            isCompleted: false
        },
        {
            id: "2",
            text: "Academia",
            category: "Pessoal",
            isCompleted: false
        }
    ]);

    return (
        <div className="home">
            <h1>Minhas tarefas</h1>
            <div className="todo-list">
                {listaDeTarefas.map((tarefa) => {
                    return (
                    <div className="todo">
                        <div className="content">
                            <p>Tarefa nº: {tarefa.id} - {tarefa.text}</p>
                            <p className="category">({tarefa.category})</p>
                        </div>
                    </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Home;