import { useForm } from 'react-hook-form';
import React, {useState, UseEffect} from "react";

export function Form() {

    const [dados, setDados] = useState({mensagem:"..."});

    const { register,
        handleSubmit,
        formState: { errors },
        reset } = useForm({ mode: 'onBlur' });
      //Arrow Function
      const onSubmit = (data) => {
    
        fetch("http://localhost:8080")
        .then((response) => response.json())
        .then((data) => setDados(data))

        console.log(dados.mensagem);
    
      }
    return (
        <div>
            <h1 className='text-3xl text-900 mb-4'>Criando Formulários</h1>
            <form className='space-y-2'onSubmit={handleSubmit(onSubmit)} noValidate>
                <label className='block text-sm font-medium text-gray-700'>Nome </label>
                <input
                    placeholder='Digite seu nome'
                    {...register("nome", { required: "O nome é obrigatório" })}
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                {errors.nome && <p style={{ color: "red" }}>{errors.nome.message}</p>}
                <br />
                <label className='block text-sm font-medium text-gray-700'>Email </label>
                <input placeholder='Digite seu email' type='email'
                    {...register("email", { required: "O email é obrigatório", pattern: { value: /^[^\s@]+@[^\s]+\.[^\s]+$/, message: "Email inválido" } })}
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}<br />
                <label className='block text-sm font-medium text-gray-700'>Senha </label>
                <input placeholder='Digite sua senha' type='password'
                    {...register("senha", { required: "A senha é obrigatória", minLength: { value: 6, message: "A senha deve ter no mínimo 6 caracteres" } })}
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                /><br />
                {errors.senha && <p style={{ color: "red" }}>{errors.senha.message}</p>}
                <label className='block text-sm font-medium text-gray-700'>Telefone </label>
                <input placeholder='(XX)99999999' type='tel' //criar uma máscara, ajustar o placeholder
                    {...register("telefone", { required: "O telefone é obrigatório", pattern: { value: /^\(\d{2}\)\d{9}$/, message: "Telefone inválido" } })}
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                /><br />
                {errors.telefone && <p style={{ color: "red" }}>{errors.telefone.message}</p>}
                <label >Data de Nascimento </label>
                <input type='date'
                    {...register("dataNascimento", { required: "A data de nascimento é obrigatória" })}
                    className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                /><br />
                {errors.dataNascimento && <p style={{ color: "red" }}>{errors.dataNascimento.message}</p>}
                <div className='flex justify-center'>
                <button className="w-1/2 mt-2 p-3 text-white rounded-lg bg-sky-500 hover:bg-sky-700" type='submit'>Enviar</button>
                </div>
            </form>
        </div> 
            )
}