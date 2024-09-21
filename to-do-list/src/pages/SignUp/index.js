import React, { useState } from "react";
import "./styles.css"

const SignUp = () => {

    const [handleForm, setHandleForm] = useState({
        name: "",
        gender: "",
        age: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const validForm = (e) => {

        e.preventDefault()

        if (!handleForm.name || !handleForm.gender || !handleForm.age || !handleForm.email || !handleForm.password || !handleForm.confirmPassword){
            return window.alert("Todos os campos precisam ser preenchidos");
        }
        if (handleForm.password !== handleForm.confirmPassword){
            return window.alert("As senhas não coincidem");
        }

        window.alert("AQUI VAI REDIRECIONAR PARA A HOME")
    }

    return (
        <div className="signup">
            <div className="signup-box">
                <h1>Cadastre-se</h1>
                <form className="signup-form">
                    <input placeholder="Digite o seu nome completo" value={handleForm.name} onChange={(e)=>setHandleForm({...handleForm, name:e.target.value})}/>
                    <select value={handleForm.gender} onChange={(e)=>setHandleForm({...handleForm, gender:e.target.value})}>
                        <option value="" disabled selected>Selecione</option>
                        <option>Masculino</option>
                        <option>Feminino</option>
                        <option>Outros</option>
                    </select>
                    <input type="number" placeholder="Digite a sua idade" value={handleForm.age} onChange={(e)=>setHandleForm({...handleForm, age:e.target.value})}></input>
                    <input type="email" placeholder="Digite o seu email" value={handleForm.email} onChange={(e)=>setHandleForm({...handleForm, email:e.target.value})}/>
                    <input type="password" placeholder="Digite a sua senha" value={handleForm.password} onChange={(e)=>setHandleForm({...handleForm, password:e.target.value})}/>
                    <input type="password"placeholder="Confirme a sua senha" value={handleForm.confirmPassword} onChange={(e)=>setHandleForm({...handleForm, confirmPassword:e.target.value})}/>
                    <button onClick={validForm}>Cadastre-se</button>
                    <a href="/">Já estou cadastrado(a). ENTRAR.</a>
                </form>
                
            </div>
        </div>
    )
}

export default SignUp;