import React, {useState, useEffect} from 'react';

export function ListaUsuarios({sinal}){

    const [usuarios, setUsuarios] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsuarios = async () => {
            setIsLoading(true);
            setError(null);

            try{
                //Armazeno a resposta da requisiÃ§Ã£o na variÃ¡vel chamada response!!!
                const response  = await fetch('http://localhost:8080/api/v1/usuario')     
                //Se tiver a variavel response existir (se for ok)
                if(response.ok){
                    //Converto a resposta em um JSON
                    const data = await response.json();
                    setUsuarios(data);
                }else{
                    setError('Erro ao buscar usuários');
                }

            }catch(error){
                setError('Erro na conexão, o back está rodando?')
            }
            setIsLoading(false);
        }
        
        fetchUsuarios();

    }, [sinal])

    if(isLoading){
        return <p>Carregando usuários...</p>
    }

    if(error){
        return <p>{error}</p>
    }

    if(usuarios.length === 0){
        return <p>Nenhum usuário encontrado.</p>
    }

    return(
        <div className='mt-8'>
            <h2 className='text-2xl text-gray-800 mb-4'>UsuÃ¡rios cadastrados</h2>
            <ul className='space-y-3'>
                {usuarios.map(usuario => (
                    <li key={usuario.id} className='p-4 bg-white rounded shadow border-gray-300'>
                    <p className='font-bold text-lg text-sky-700'>{usuario.nome}</p>
                    <p className='font-bold text-lg text-sky-700'>{usuario.email}</p>
                    <p className='font-bold text-lg text-sky-700'>{usuario.telefone}</p>
                    </li>
                ))}
            </ul>
        </div>
    )

}