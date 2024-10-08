import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Course() {
   
    
    
    const [book, setBook] = useState([]);
    
    useEffect(() => {
      const getBook = async () => {
        try {
          const res = await axios.get("http://localhost:4001/book"); 
          console.log(res.data); // Corrected to log the response data
          setBook(res.data); // Corrected to set the state with the response data
        } catch (error) {
          console.log("Error fetching books:", error);
        }
      };
    
      getBook();
    }, []);
    


    return (
        <>
            <div className='max-w-screen-2xl  container mx-auto md:px-20 px-4'>
                <div className='mt-28 item-center justify-center text-center'>
                    <h1 className='text-2xl  md:text-4xl'> We're delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
                    <p className='mt-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit veniam molestiae corporis fugiat commodi. Neque cupiditate, blanditiis exercitationem accusantium quia earum quae optio libero, magnam eum doloremque reiciendis esse adipisci, nesciunt quos molestias quod culpa suscipit mollitia. Omnis officia nostrum, in dolorem atque nulla voluptates nemo mollitia sed expedita. Delectus.</p>
                     
                     <Link to='/'> <button  className='mt-6 bg-pink-500 text-white px-4 py2 rounded-md hover:bg-pink-700 duration-300'>Back</button></Link>
                </div>
                <div className='mt-12 grid grid grid-cols-1 md:grid-cols-4'>
                   {
                    book.map((item)=>(
                    <Cards item={item} key={item.id}/> ))}
                </div>
            </div>
        </>
    )
}

export default Course