import { useForm } from 'react-hook-form';

export function Home() {
    const { register,
        handleSubmit,
        formState: { errors },
        reset } = useForm({ mode: 'onBlur' });
      //Arrow Function
      const onSubmit = (data) => {
    
        alert("Formulário enviado: " + JSON.stringify(data));
        console.log("Dados enviados com sucesso", data)
        reset();
      }

    return(
        <div>
        <h1 className='text 3xl font-medium italic'>Seja bem-vindo. Faça login para iniciar</h1>
        
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
                <div className='flex justify-center'>
                <button className="w-1/2 mt-2 p-3 text-white rounded-lg bg-sky-500 hover:bg-sky-700" type='submit'>Enviar</button>
                </div>
        </div>
    )
}