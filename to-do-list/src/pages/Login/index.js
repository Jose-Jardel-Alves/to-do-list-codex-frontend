import "./styles.css";
import React, { useState } from "react";
import SignButton from "../../components/Login/SignButton";
import SignInput from "../../components/Login/SignInput";
import InvalidityMsg from "../../components/Login/InvalidityMsg";
import { validateEmail, validatePassword } from "../../utils/validation";
import api from "../../service";
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';


const Login = () => {

    const [email, setEmail ] = useState({ value: "", invalidity: "" });
    const [password, setPassword] = useState({ value: "", invalidity: "" })
    const navigate = useNavigate();

    const { setUser } = useAuth(); 

    const changeEmail = (e) => {
        const value = e.target.value;
    
        setEmail({ ...email, value });

    };
    
    const changePassword = (e) => {
    const value = e.target.value;
    
    setPassword({ ...password, value });
    };

    const validateForm = () => {
        const invalidityEmail = validateEmail(email.value);
        const invalidityPassword = validatePassword(password.value);
    
        setEmail({ ...email, invalidity: invalidityEmail });
        setPassword({ ...password, invalidity: invalidityPassword });
    
        return !invalidityEmail && !invalidityPassword ? true : false;
    };

    const submit = async () => {
        if (validateForm()) {
            try{
                const response = await api.post("/api/v1/login",
                    {
                        email: email.value, senha: password.value
                    }
                );
                await console.log(response.data.others)
                setUser(response.data.others);
                navigate(`/home/${response.data.others._id}`)
            }
            catch(error){
                console.log(error);
                window.alert("Erro ao logar");
            }
        }
    
    };  
    

    return (
        <div id="login">
            <div id="loginBox">
                <h2>Login</h2>
                <SignInput typeInput ="email" label= "Email: " handleChange={changeEmail}/>
                <InvalidityMsg msg={email.invalidity} />
                <SignInput typeInput ="password" label = "Senha: " handleChange={changePassword}/>
                <InvalidityMsg msg={password.invalidity} />
                <SignButton label ="ENTRAR" handleClicked={submit}/>            
                <a href="/signup">Cadastre-se</a>
            </div>
        </div>
    )
}

export default Login;