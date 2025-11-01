import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { Star, Users, Clock, Award } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Home = () => {
    const [popularSkills, setPopularSkills] = useState([]);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });

        // Fetch popular skills data
        const fetchPopularSkills = async () => {
            try {
                const response = await fetch('/details.json');
                const data = await response.json();
                // Get top 6 rated skills
                const popular = data
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 6);
                console.log('Popular skills loaded:', popular);
                console.log('First skill image URL:', popular[0]?.image);
                setPopularSkills(popular);
            } catch (error) {
                console.error('Error fetching popular skills:', error);
            }
        };

        fetchPopularSkills();
    }, []);

    const heroSlides = [
        {
            id: 1,
            title: "Master New Languages",
            subtitle: "Learn from expert instructors",
            description: "Join thousands of students learning languages with our interactive courses",
            image: "https://i.ibb.co/RGNkZstP/photo-1518082593638-b6e73b35d39a.jpg",
            buttonText: "Start Learning",
            buttonLink: "/signup"
        },
        {
            id: 2,
            title: "Interactive Learning",
            subtitle: "Practice with native speakers",
            description: "Get real-time feedback and improve your pronunciation",
            image: "https://i.ibb.co/RGNkZstP/photo-1518082593638-b6e73b35d39a.jpg",
            buttonText: "Explore Courses",
            buttonLink: "/category/English"
        },
        {
            id: 3,
            title: "Certified Instructors",
            subtitle: "Learn from the best",
            description: "Our instructors are certified and experienced language teachers",
            image: "https://i.ibb.co/RGNkZstP/photo-1518082593638-b6e73b35d39a.jpg",
            buttonText: "Meet Instructors",
            buttonLink: "/profile"
        }
    ];

    return (
        <div>
            {/* Hero Slider */}
            <section className="relative h-[70vh] overflow-hidden">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    loop={true}
                    className="h-full"
                >
                    {heroSlides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="relative h-full">
                                <div 
                                    className="absolute inset-0 bg-cover bg-center  bg-no-repeat"
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                >
                                    <div className="absolute inset-0 bg-[#e6e5ff] bg-opacity-40"></div>
                                </div>
                                <div className="relative z-10 h-full flex items-center">
                                    <div className="container mx-auto px-6">
                                        <div className="max-w-2xl text-black">
                                            <motion.h1 
                                                className="text-5xl md:text-6xl font-bold mb-4"
                                                data-aos="fade-up"
                                            >
                                                {slide.title}
                                            </motion.h1>
                                            <motion.p 
                                                className="text-xl md:text-2xl mb-2 text-black"
                                                data-aos="fade-up"
                                                data-aos-delay="200"
                                            >
                                                {slide.subtitle}
                                            </motion.p>
                                            <motion.p 
                                                className="text-lg mb-8 text-black"
                                                data-aos="fade-up"
                                                data-aos-delay="400"
                                            >
                                                {slide.description}
                                            </motion.p>
                                            <motion.a
                                                href={slide.buttonLink}
                                                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300"
                                                data-aos="fade-up"
                                                data-aos-delay="600"
                                            >
                                                {slide.buttonText}
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            {/* Popular Skills Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="text-center mb-12"
                        data-aos="fade-up"
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Popular Skills</h2>
                        <p className="text-xl text-gray-600">Most rated language courses by our students</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {popularSkills.map((skill, index) => (
                            <motion.div
                                key={skill.skillId}
                                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="relative h-48">
                                    <img
                                        src={skill.image}
                                        alt={skill.skillName}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            console.log('Image failed to load:', skill.image);
                                            e.target.src = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80";
                                        }}
                                    />
                                    <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                                        <div className="flex items-center space-x-1">
                                            <Star className="text-yellow-400" size={16} fill="currentColor" />
                                            <span className="text-sm font-semibold">{skill.rating}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{skill.skillName}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{skill.description}</p>
                                    
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                                            <div className="flex items-center space-x-1">
                                                <Users size={16} />
                                                <span>{skill.slotsAvailable} slots</span>
                                            </div>
                                            <div className="flex items-center space-x-1">
                                                <Clock size={16} />
                                                <span>Live Session</span>
                                            </div>
                                        </div>
                                        <div className="text-2xl font-bold text-blue-600">
                                            ${skill.price}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        size={16}
                                                        className={i < Math.floor(skill.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-sm text-gray-600">({skill.rating})</span>
                                        </div>
                                        <a
                                            href={`/category/${skill.category}`}
                                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                                        >
                                            View Details
                                        </a>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-500">
                                        <span className="font-medium">Instructor:</span> {skill.providerName}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Top Rated Providers Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="text-center mb-12"
                        data-aos="fade-up"
                    >
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Top Rated Providers</h2>
                        <p className="text-xl text-gray-600">Meet our expert language instructors</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "James Carter", rating: 4.9, students: 1200, language: "English" },
                            { name: "Li Wei", rating: 4.8, students: 980, language: "Chinese" },
                            { name: "Amélie Dupont", rating: 4.9, students: 850, language: "French" },
                            { name: "Yuki Sato", rating: 4.7, students: 750, language: "Japanese" }
                        ].map((provider, index) => (
                            <motion.div
                                key={provider.name}
                                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-white">
                                        {provider.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{provider.name}</h3>
                                <p className="text-blue-600 font-semibold mb-2">{provider.language} Instructor</p>
                                <div className="flex items-center justify-center space-x-2 mb-2">
                                    <Award className="text-yellow-500" size={16} />
                                    <span className="font-semibold">{provider.rating}</span>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={14}
                                                className={i < Math.floor(provider.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">{provider.students}+ students</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;