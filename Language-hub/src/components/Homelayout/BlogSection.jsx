import React from "react";

const blogs = [
  {
    title: "Spending Time Online: 8 Most Asked Questions About The IELTS Exam",
    date: "July 2, 2021",
    excerpt:
      "Get answers to the most common IELTS questions and learn strategies to boost your score.",
    image: "https://i.ibb.co/hvVj70J/photo-1620653514733-f510d2b478f4.jpg",
  },
  {
    title: "How To Set Yourself Up For Success In A New Career",
    date: "June 29, 2021",
    excerpt:
      "Discover practical steps to prepare for a successful career transition and achieve your goals.",
    image: "https://i.ibb.co/rfkLG9sr/photo-1638537690617-ebc561143de0.jpg",
  },
  {
    title: "Why Are You Thinking About Learning Better English?",
    date: "June 29, 2021",
    excerpt:
      "Explore why improving your English can open doors and enhance your personal and professional life.",
    image: "https://i.ibb.co/nM9QbH6n/photo-1620653260946-c989dadf461b.jpg",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Our Blog</h2>
        <p className="text-center text-gray-600 mb-12">
          Latest Blog & Articles. Explore tips, advice, and insights to help you
          master English and succeed in your learning journey.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <span className="text-gray-400 text-sm mb-4 block">{blog.date}</span>
                <p className="text-gray-700">{blog.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
