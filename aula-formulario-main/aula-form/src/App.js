import React from 'react';
import { Form } from './Form';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Home } from './Home';
import { Consult } from './Consult';

function App() {
 
  return (

    <BrowserRouter>
    <Header/>
    <div className="flex items-center justify-center min-h-screen bg-sky-300">
      <div>
        <div className='bg-white/50 rounded-lg'> 
        <main className='p-4'>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/consultar' element={<Consult/>} />
            <Route path='/cadastrar' element={<Form/>} />
          </Routes>
        </main>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
