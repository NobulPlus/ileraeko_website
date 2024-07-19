import React from 'react';
import { useParams } from 'react-router-dom';
import { newsItems } from './NewsAPI';

const NewsDetail = () => {
  const { newsId } = useParams();
  const news = newsItems.find(item => item.id === parseInt(newsId));

  if (!news) {
    return <div className="container mx-auto px-4 py-12 text-center">News not found</div>;
  }

  const paragraphs = news.mainPost.trim().split('\n').map((para, index) => (
    <p key={index} className="mb-4 leading-relaxed text-gray-800">{para}</p>
  ));

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img src={news.image} alt={news.title} className="w-full h-96 object-cover mb-8" />
        <div className="p-6">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">{news.title}</h2>
          <p className="text-gray-600 mb-8">{news.description}</p>
          <div className="text-gray-700 text-justify">{paragraphs}</div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
