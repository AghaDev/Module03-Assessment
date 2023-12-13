import React from 'react'
import {useState, useEffect} from 'react';
import axios from 'axios';

const home = () => {
const [article, setArticle] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8105/api/findall")
    .then((response) => {
      setArticle(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [])



  return (
    article.map((article) =>{
      
      <div className='wrapper'>
      
      <div className='Data'>
        <div className='title'>
        {article.title}
        </div>
      </div>
      <div className='image'>

      </div>
    </div>
  })
  )
}

export default home