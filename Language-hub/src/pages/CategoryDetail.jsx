import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import CourseCard from "../components/CourseCard";
import { motion } from "framer-motion";
import { User, Mail, Calendar, X } from "lucide-react";
import toast from "react-hot-toast";

const CategoryDetail = () => {
  const { name } = useParams();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await fetch('/details.json');
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        
        // Filter courses by category
        if (name) {
          // If specific category is selected, show only that category's courses
          const filteredCourses = data.filter(course => 
            course.category.toLowerCase() === name.toLowerCase()
          );
          setCourses(filteredCourses);
        } else {
          // If no category is selected, show only English courses by default
          const englishCourses = data.filter(course => 
            course.category.toLowerCase() === 'english'
          );
          setCourses(englishCourses);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [name]);

  const handleBookSession = (course) => {
    setSelectedCourse(course);
    setShowBookingForm(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.email) {
      toast.error('Please fill in all fields');
      return;
    }
    
    toast.success('Session booked successfully!');
    setBookingForm({ name: '', email: '' });
    setShowBookingForm(false);
    setSelectedCourse(null);
  };

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const closeBookingForm = () => {
    setShowBookingForm(false);
    setSelectedCourse(null);
    setBookingForm({ name: '', email: '' });
  };

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">Error Loading Courses</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-[#111f62] mb-4">
          {name ? `${name} Language Courses` : 'Choose Your Language'}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {name 
            ? `${courses.length} course${courses.length !== 1 ? 's' : ''} available` 
            : 'Select a language category to explore courses'
          }
        </p>
      </div>

      {courses.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">No Courses Found</h2>
          <p className="text-gray-500">
            No courses available for the selected category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard 
              key={course.skillId} 
              course={course} 
              onBookSession={handleBookSession}
            />
          ))}
        </div>
      )}

      {/* Booking Form Modal */}
      {showBookingForm && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Book Session</h3>
              <button
                onClick={closeBookingForm}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">{selectedCourse.skillName}</h4>
              <p className="text-sm text-gray-600 mb-2">Instructor: {selectedCourse.providerName}</p>
              <p className="text-lg font-bold text-blue-600">${selectedCourse.price}/Session</p>
            </div>

            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    name="name"
                    value={bookingForm.name}
                    onChange={handleBookingChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="email"
                    name="email"
                    value={bookingForm.email}
                    onChange={handleBookingChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={closeBookingForm}
                  className="flex-1 bg-gray-500 text-white py-3 rounded-lg font-medium hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <Calendar size={20} />
                  <span>Book Session</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CategoryDetail;
