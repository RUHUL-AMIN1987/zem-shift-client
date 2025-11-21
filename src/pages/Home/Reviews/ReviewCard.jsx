// ReviewCard.jsx
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const ReviewCard = ({ reviewData }) => {
  const {
    userName = 'Anonymous User',
    user_photoURL = 'https://via.placeholder.com/80?text=User',
    ratings = 0,
    review = 'No review yet.',
  } = reviewData || {};

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(ratings);
    const hasHalfStar = ratings - fullStars >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="w-5 h-5 text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="w-5 h-5 text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="w-5 h-5 text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 min-h-[320px] flex flex-col justify-between hover:scale-105 transition-transform duration-300">
      <div>
        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <img
            src={user_photoURL}
            alt={userName}
            className="w-20 h-20 rounded-full object-cover ring-4 ring-blue-500 ring-offset-4"
            onError={(e) => (e.target.src = 'https://via.placeholder.com/80?text=:)')}
          />
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{userName}</h3>

        {/* Stars */}
        <div className="flex justify-center gap-1 mb-3">{renderStars()}</div>
        <p className="text-center text-sm text-gray-500">{ratings.toFixed(1)} / 5.0</p>
      </div>

      {/* Review Text */}
      <p className="text-gray-700 text-center italic mt-5 leading-relaxed">
        "{review}"
      </p>
    </div>
  );
};

export default ReviewCard;