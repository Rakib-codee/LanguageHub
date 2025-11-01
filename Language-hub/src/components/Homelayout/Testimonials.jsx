import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { StarIcon as SolidStar } from "@heroicons/react/24/solid";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error("Failed to load testimonials:", err));
  }, []);

  if (!testimonials.length)
    return <p className="text-center py-20 text-gray-500">Loading testimonials...</p>;

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-indigo-600 font-semibold mb-2">Testimonials</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          See how our platform has helped learners around the world achieve their language goals.
        </p>
      </div>

      {/* Carousel */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center  bg-[#eeedfe] rounded-3xl p-20 shadow-lg space-y-6 md:space-y-0 md:space-x-6">
              {/* Avatar */}
              <div className="shrink-0">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-indigo-600"
                />
              </div>

              {/* Testimonial Text */}
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  {/* Star rating */}
                  {[1, 2, 3, 4, 5].map((i) => (
                    <SolidStar
                      key={i}
                      className={`w-5 h-5 ${
                        i <= t.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-800 italic mb-4">"{t.feedback}"</p>
                <h3 className="text-lg font-bold text-indigo-600">{t.name}</h3>
                <p className="text-gray-500 text-sm">{t.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;
