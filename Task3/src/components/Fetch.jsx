import React, { useEffect, useState } from 'react'
import Cards from './Cards';

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://inshorts.vercel.app/news/top");
        const result = await response.json();
        setData(result.data.articles);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <Cards data={data} />
    </>
  )
}

export default FetchData