import React, { useState, useEffect } from "react";
import api from "../../service"; 
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Menu from "../../components/Menu";
import "./styles.css";

const EditProfile = () => {
    const { userId } = useParams();
    const { user, setUser } = useAuth();
    
    
    useEffect(() => {
        if (user) {
            setName(user.name);
            setGender(user.gender);
            setIdade(user.idade);
        }
    }, [user]);
    
    const [name, setName] = useState(user?.name || ""); 
    const [gender, setGender] = useState(user?.gender || "");
    const [idade, setIdade] = useState(user?.idade || "");
    const [senha, setSenha] = useState("");
    const [novaSenha, setNovaSenha] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(name, gender, idade, senha, novaSenha);
            await api.put(`/api/v1/atualizaUser/${userId}`, {
                name: name,
                gender: gender,
                idade: idade,
                email: user.email, 
                senhaAtual: senha,
                novaSenha: novaSenha
            });
            setUser({
                name: name,
                gender: gender,
                idade: idade
            })

            window.alert("Perfil atualizado com sucesso!");
        } catch (error) {
            console.error(error);
            alert("Erro ao atualizar perfil.");
        }
    };

    return (
        <div>
            <Menu userId={userId}/>

            <div className="edit-profile">
                <h2>Editar Perfil</h2>
                <form onSubmit={handleSubmit}>
                        <label>Nome:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        <label>Gênero:</label>
                        <select value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="">Selecione</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                    <div>
                        <label>Idade:</label>
                        <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)}/>
                    </div>
                    <div>
                        <label>Senha atual:</label>
                        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    </div>
                    <div>
                        <label>Nova Senha:</label>
                        <input type="new-password" value={novaSenha} onChange={(e) => setNovaSenha(e.target.value)}/>
                    </div>
                    <button type="submit" onClick={handleSubmit}>Salvar</button>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
