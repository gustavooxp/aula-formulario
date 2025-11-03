import { Link } from 'react-router-dom';

export function Consult() {
    return (
        <div>
            <h1 className='text-3xl text-gray-800 mb-4'>Listar cadastros</h1>
            <form className='space-y-2'>
                <div className='flex flex-row aling-center gap-2'>
                    <div>
                        <input
                            placeholder='Pesquisar'
                            className='w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent'
                        />
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <Link className="border border-sky-500 p-2 text-white rounded-lg bg-sky-500 hover:bg-sky-700 hover:border-sky-700" to="/cadastrar">CADASTRAR</Link>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}   