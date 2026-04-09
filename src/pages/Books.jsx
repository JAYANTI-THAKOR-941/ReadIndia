import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Books = () => {

  const [books,setBooks] = useState([]);

  const navigate = useNavigate();

  const fetchBooks = async()=>{
    try{
      const res = await axios.get('http://localhost:3000/books');
      setBooks(res.data);
    }
    catch(error){
      console.log('Faild to fetch books.')
    }
  }

  useEffect(()=>{
    fetchBooks();
  },[])

  return (
    <div className='books-container'>
        {
          books.length === 0 ? <h2>No Books Found.!!</h2> : books.map((b)=>(
              <div className="book-card" key={b.id}>
                <img src={b.image} alt="" />
                <h3>{b.name}</h3>
                <h3>{b.author}</h3>
                <h3>{b.price}</h3>
                <button onClick={()=>navigate(`/book/${b.id}`)}>View Details</button>
              </div>
          ))
        }
    </div>
  )
}

export default Books