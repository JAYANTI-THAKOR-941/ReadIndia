import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import BooksManagement from './admin/BooksManagement'
import Books from './pages/Books';
import BookDetails from './pages/BookDetails'

const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/manage-books' element={<BooksManagement/>} />
        <Route path='/books' element={<Books/>} />
        <Route path='/book/:id' element={<BookDetails/>} />
      </Routes>
    </>
  )
}

export default App