import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Check } from "lucide-react";

const SubscriptionPlansSlider = () => {
  const [plans, setPlans] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null); // null মানে default কোন highlight নেই

  useEffect(() => {
    fetch("/plans.json")
      .then((res) => res.json())
      .then((data) => setPlans(data))
      .catch((err) => console.error("Failed to load plans:", err));
  }, []);

  if (!plans.length)
    return <p className="text-center py-20 text-gray-500">Loading plans...</p>;

  return (
    <div className="max-w-6xl mx-auto py-12">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={4} // 4 cards per view
        navigation
        pagination={{ clickable: true }}
        loop={false} // left-aligned, no looping by default
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        breakpoints={{
          640: { slidesPerView: 2 },
          320: { slidesPerView: 1 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {plans.map((plan, index) => (
          <SwiperSlide key={index}>
            <div
              className={`bg-white rounded-3xl p-8 transition-transform duration-500 ${
                index === activeIndex
                  ? "shadow-2xl scale-105"
                  : "shadow-md scale-100"
              }`}
            >
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <p className="text-lg mb-4">{plan.price}</p>
              <ul className="space-y-2 text-gray-700 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="bg-gray-200 text-gray-800 w-5 h-5 flex items-center justify-center rounded-full text-sm">
                      <Check></Check>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition">
                Register Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SubscriptionPlansSlider;
