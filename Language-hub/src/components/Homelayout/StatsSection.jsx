import React from "react";
import { Users, BookOpen, GraduationCap, CheckCircle } from "lucide-react";

const stats = [
  {
    icon: <Users className="w-8 h-8 text-white" />,
    number: "1,250+",
    label: "Active Students",
    bgColor: "bg-indigo-600",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-white" />,
    number: "60+",
    label: "Interactive Courses",
    bgColor: "bg-green-500",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-white" />,
    number: "3,210+",
    label: "Graduate Students",
    bgColor: "bg-yellow-500",
  },
  {
    icon: <CheckCircle className="w-8 h-8 text-white" />,
    number: "30+",
    label: "Certified Teachers",
    bgColor: "bg-pink-500",
  },
];

const StatsSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="flex flex-wrap justify-between gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white rounded-2xl shadow-lg p-4 flex-1 min-w-[220px] transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <div className={`w-14 h-14 flex items-center justify-center rounded-full ${stat.bgColor}`}>
              {stat.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
