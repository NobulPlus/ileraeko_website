// NewsSection.js
import React, { useState, useEffect } from 'react';
import { newsItems } from './NewsAPI';
import { Link } from 'react-router-dom';

const News = () => {
    const [latestNews, setLatestNews] = useState([]);

    useEffect(() => {
      // Fetch the latest news from the mock API
      const fetchLatestNews = () => {
        // Here we use the mock data, but you can replace this with a real API call
        setLatestNews(newsItems.slice(0, 3)); // Get the first 3 news items
      };
  
      fetchLatestNews();
    }, []);
  
    return (
      <div className="container px-4 pb-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.slice(0, 3).map((news) => (
            <div key={news.id} className="overflow-hidden bg-white rounded-lg shadow-lg">
              <img
                src={news.image}
                alt={news.title}
                className="object-cover w-full h-48 mb-4"
              />
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-gray-900">{news.title}</h3>
                <p className="mb-4 text-justify text-gray-700">{news.description}</p>
                <Link to={`/news/${news.id}`} className="text-orange-500 hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center py-4'>
          {/* <button className='px-4 py-2 font-bold bg-orange-500 rounded hover:text-white'><Link to='/blog'>See More News</Link></button> */}
          <Link to="/blog" className="inline-flex items-center px-6 py-3 font-semibold text-white transition transform bg-orange-600 rounded-md shadow-md hover:scale-105 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
            See More News
          </Link>
        </div>
      </div>
    );
  };

export default News
