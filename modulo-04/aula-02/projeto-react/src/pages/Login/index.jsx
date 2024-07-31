
import { useForm } from "react-hook-form";
import React from "react";
import { HeaderContainer, FormContainer } from "./styles";


export function LoginPage(){

    const {register, handleSubmit, reset} = useForm()

    async function handleLogin(data){
        
        console.log(data.email);
        console.log(data.password);

        reset()
    }
    
    return(
        <div>
            <HeaderContainer>

            </HeaderContainer>
            
            <FormContainer>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <input {...register('email')} type='text' placeholder='E-mail' required/>
                    <input {...register('password')} type='password' placeholder='Senha' required/>

                    <button type="submit">
                        Entrar
                    </button>
                </form>
            </FormContainer>
        </div>
    )
}