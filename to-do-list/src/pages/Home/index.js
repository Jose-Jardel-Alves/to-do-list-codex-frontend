    import React, {useState} from "react";
    import ToDo from "../../components/Home/ToDo";
    import ToDoForm from "../../components/Home/ToDoForm";
    import "./styles.css"

    const Home = () => {
        const [toDos, setToDos] = useState([
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
            },
            {
                id: "3",
                text: "Fazer o projeto to do list",
                category: "Estudos",
                isCompleted: false
            },
        ]);

        const addToDo = (text, category) => {
            const newToDos = [
                ...toDos, 
                {
                    id: (toDos.length + 1).toString(),
                    text,
                    category,
                    isCompleted: false
                }
            ]
            setToDos(newToDos);
        }

        const removeToDo = (id) => {
            const newToDos = toDos.filter((toDo) => toDo.id !== id);
            setToDos(newToDos);
        }

        const completeToDo = (id) => {
            const newToDos = toDos.map((toDo) => {

                if (toDo.id !== id) {
                    return toDo 
                }
                else{
                    return {...toDo, isCompleted: !toDo.isCompleted }    
                }
            });
            setToDos(newToDos);   
        }

        const editToDo = (id, text, category) => {
            const newToDos = toDos.map((toDo) => {
                if(toDo.id === id){
                    return {
                        ...toDo, text: text, category: category
                    }
                }
                else return toDo
            });
            setToDos(newToDos);
        }

        return (
            <div className="home">
                <h1>Minhas tarefas</h1>
                <div className="todo-list">
                    {toDos.map((toDo) => {
                        return (
                            <ToDo key={toDo.id} toDo={toDo} completeToDo={completeToDo} removeToDo={removeToDo} editToDo={editToDo} />
                        )
                    })}
                </div>
                <ToDoForm addToDo={addToDo}/>
            </div>
        )
    }

    export default Home;