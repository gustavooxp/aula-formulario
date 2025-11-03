import {Link} from 'react-router-dom';

export function Header() {
    return (
        <header>
            <nav className='bg-white pg-2 flex gap-4'>

                <Link to="/">INÍCIO</Link>
                <Link to="/consultar">CONSULTAR</Link>
            </nav>
        </header>
    )
}