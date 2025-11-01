import React from "react";

const CourseCard = ({ course, onBookSession }) => {
  // Simple stars render
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(
          <span key={i} className="text-yellow-400">★</span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">★</span>
        );
      }
    }
    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative h-48">
        <img
          src={course.image}
          alt={course.skillName}
          className="w-full h-full object-cover"
          onError={(e) => {
            console.log('Image failed to load:', course.image);
            e.target.src = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
          }}
        />
        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-white rounded-full p-2 shadow-md">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">
                {course.category.charAt(0)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Price */}
        <div className="mb-3">
          <span className="text-2xl font-bold text-blue-600">
            ${course.price}
          </span>
          <span className="text-gray-500 ml-1">/Session</span>
        </div>

        {/* Course Title */}
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {course.skillName}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">
          {course.description}
        </p>

        {/* Course Statistics */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span>🎥</span>
            <span>Live Session</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>👥</span>
            <span>{course.slotsAvailable} Slots</span>
          </div>
        </div>

        {/* Rating and Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">{course.rating}</span>
            {renderStars(course.rating)}
          </div>
          <div className="flex space-x-2">
            <button 
              onClick={() => onBookSession && onBookSession(course)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm"
            >
              View Details
            </button>
          </div>
        </div>

        {/* Provider Info */}
        <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
          <span className="font-medium">Instructor:</span> {course.providerName}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
