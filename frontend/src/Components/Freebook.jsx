import React,{useState,useEffect} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import axios from 'axios';
import Cards from '../Components/Cards'
export default function Freebook() {


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      const [book, setBook] = useState([]);
    
      useEffect(() => {
        const getBook = async () => {
          try {
            const res = await axios.get("http://localhost:4001/book"); 
            console.log(res.data); // Corrected to log the response data
            setBook(res.data.filter((data)=> data.category==="Free")); // Corrected to set the state with the response data
          } catch (error) {
            console.log("Error fetching books:", error);
          }
        };
      
        getBook();
      }, []);


    


    return (
    <>
<div className='max-w-screen-2xl  container mx-auto md:px-20 px-4 '>
    <div>
    <h1 className='font-bold text-xl pb-2'>Free Offered Courses</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatum ex impedit error, repudiandae eveniet inventore consequatur vitae voluptates sunt corporis, voluptatem debitis harum dolor!</p>
    </div>
    <div>
    <div className="slider-container">
      <Slider {...settings}>
        {book.map((item)=>(
         <Cards item={item} key={item.id}/>   
        ))}
      </Slider>
    </div>
    </div>
</div>
    </>
  )
}
