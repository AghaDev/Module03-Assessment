import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';

const Home = () => {
const [article, setArticle] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8107/api/findall")
    .then((response) => {
      setArticle(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])



  return (
    article.map((item) =>(
      
      <div className='wrapper'>
      
      <div className='Data'>
        <div className='title'>
        {item.title}
        </div>
      </div>
      <div className='image'>

      </div>
    </div>
    ))
  )
}

export default Home