import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Category = () => {
    const categoryNews=useLoaderData();
  
    return (
        <div>
            categories-news:{categoryNews.length}
            {
               categoryNews.map(news=><NewsCard key={news._id} news={news}></NewsCard>) 
            }
        </div>
    );
};

export default Category;