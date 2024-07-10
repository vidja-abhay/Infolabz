import React, { useEffect, useState } from 'react'
import Table from './Table';

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://inshortsapi.vercel.app/news?category=sports");
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <>
      <Table data={data} />
    </>
  )
}

export default FetchData