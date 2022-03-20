import React from 'react';
import {useForm} from "react-hook-form";

const LoginForm = (props) => {
        const {
            register,
            handleSubmit,
            setValue,} = useForm()
        const onSubmit = (data) => console.log(data)
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input {...register('login')} defaultValue={props.login}/>
            </div>

            <div>
                <input
                    {...register('password')} type={'password'} defaultValue={props.password}
                    placeholder={'password'}/>
            </div>

            <div>
                <input {...register('check')} type={'checkbox'}/> Запомнить
            </div>

            <div>
                <button>Войти</button>
            </div>

        </form>
    );
};

const Login = (props) => {
    return (
        <div>
            <h1> LOGIN </h1>
            <LoginForm/>
        </div>
    )
}

export default Login