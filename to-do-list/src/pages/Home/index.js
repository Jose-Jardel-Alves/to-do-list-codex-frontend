    import React, {useState, useEffect} from "react";
    import ToDo from "../../components/Home/ToDo";
    import ToDoForm from "../../components/Home/ToDoForm";
    import { useParams } from "react-router-dom";
    import "./styles.css"
    import api from "../../service";
    import { useAuth } from '../../context/AuthContext';
import Menu from "../../components/Menu";


    const Home = () => {

        const { userId } = useParams();
        const {user} = useAuth()

        const [toDos, setToDos] = useState([ ]);
        
        useEffect(() => {
            loadToDos();
        }, [userId]);

        const loadToDos = async () => {
            try{
                const response = await api.get(`/api/v2/getUserToDo/${userId}`);
                if (response.data.list){
                    const newtoDos = response.data.list.map(todo => ({
                        id: todo._id, 
                        title: todo.title,
                        body: todo.body,
                        isCompleted: todo.checkbox 
                    }));
                    setToDos(newtoDos)
                }
            }
            catch(error){
                console.log(error)
                window.alert("Erro ao carregar as tarefas")
            }
        }

        const addToDo = async (title, body) => {

            try{
                await api.post("/api/v2/addTodo",
                    {
                        title: title,
                        body: body,
                        checkbox: false,
                        email: user.email
                    }
                )
                
                loadToDos();
            }
            catch(error){
                console.log(error)
                window.alert("Erro ao adicionar tarefa")
            }
        }

        const removeToDo = async (id) => {

            try{
                const response  = await api.delete(`/api/v2/delTodo/${id}`, {
                    headers: {
                        'email': user.email
                    }}
                )
                const newToDos = toDos.filter((toDo) => toDo.id !== id);
                setToDos(newToDos);
                loadToDos();
            }
            catch(error){
                console.log(error);
                console.log("Erro ao apagar tarefa")
            }
        }

        const completeToDo = async (id) => {
            const toDoToUpdate = toDos.find(toDo => toDo.id === id);
            try{
                await api.put(`/api/v2//atualizaTodo/${id}`, 
                    {
                        title: toDoToUpdate.title,
                        body: toDoToUpdate.body,
                        checkbox: !toDoToUpdate.isCompleted,
                        email: user.email
                    }
                )

                const newToDos = toDos.map((toDo) => {

                    if (toDo.id !== id) {
                        return toDo;
                    }
                    else{
                        return {...toDo, isCompleted: !toDo.isCompleted } ;
                    }
                });
                setToDos(newToDos);   
                loadToDos();

            }
            catch(error){
                console.log(error)
                window.alert("Erro ao completar uma tarefa")
            }
        };

        const updateToDo = async (id, title, body) => {
            const toDoToUpdate = toDos.find(toDo => toDo.id === id);

            try{
                await api.put(`/api/v2/atualizaTodo/${id}`, {
                    title: title,
                    body: body,
                    checkbox: toDoToUpdate.isCompleted,
                    email: user.email
                })
                const newToDos = toDos.map((toDo) => {
                    if(toDo.id === id){
                        return {
                            ...toDo, title: title, body: body
                        }
                    }
                    else return toDo
                });
                setToDos(newToDos);
                loadToDos();
            }
            catch(error){
                console.log(error)
                window.alert("Erro ao atualizar tarefa")
            }
        }

        return (
            <div>
            <Menu userId={userId}/>
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
        </div>
        )
    }

    export default Home;