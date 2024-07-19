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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.slice(0, 3).map((news) => (
            <div key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover mb-4"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{news.title}</h3>
                <p className="text-gray-700 mb-4">{news.description}</p>
                <Link to={`/news/${news.id}`} className="text-orange-500 hover:underline">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default News
