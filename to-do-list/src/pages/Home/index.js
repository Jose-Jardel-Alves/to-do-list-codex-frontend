    import React, {useState} from "react";
    import ToDo from "../../components/Home/ToDo";
    import ToDoForm from "../../components/Home/ToDoForm";
    import "./styles.css"

    const Home = () => {
        const [toDos, setToDos] = useState([
            {
                id: '1',
                title: "Minha primeira tarefa",
                body: "Pessoal",
                isCompleted: false
            },
            {
                id: "2",
                title: "Academia",
                body: "Pessoal",
                isCompleted: false
            },
            {
                id: "3",
                title: "Fazer o projeto to do list",
                body: "Estudos",
                isCompleted: false
            },
        ]);
        

        const addToDo = (title, body) => {
            const newToDos = [
                ...toDos, 
                {
                    id: (toDos.length + 1).toString(),
                    title,
                    body,
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

        const updateToDo = (id, title, body) => {
            const newToDos = toDos.map((toDo) => {
                if(toDo.id === id){
                    return {
                        ...toDo, title: title, body: body
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
                            <ToDo key={toDo.id} toDo={toDo} completeToDo={completeToDo} removeToDo={removeToDo} updateToDo={updateToDo} />
                        )
                    })}
                </div>
                <ToDoForm addToDo={addToDo}/>
            </div>
        )
    }

    export default Home;