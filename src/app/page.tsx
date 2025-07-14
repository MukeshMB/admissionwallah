"use client";

import React, { useState } from 'react';
import { FaUnlockAlt } from "react-icons/fa";
import { ChevronRight, Users, BookOpen, Award, Phone, Mail, MapPin, Star, Menu, X, CheckCircle, ArrowRight } from 'lucide-react';
import FuturisticHeader from '@/components/Header';
import MarqueeTestimonials from '@/components/Testimonials';

const AdmissionWallah = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "Personal Counseling",
      description: "One-on-one guidance sessions with experienced counselors",
      stats: "5000+ Students Guided"
    },
    {
      icon: <BookOpen className="w-12 h-12 text-purple-600" />,
      title: "Course Selection",
      description: "Expert advice on choosing the right course for your career",
      stats: "200+ Courses Covered"
    },
    {
      icon: <Award className="w-12 h-12 text-green-600" />,
      title: "Top College Admissions",
      description: "Get admission in India's premier institutions",
      stats: "500+ Partner Colleges"
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-orange-600" />,
      title: "Application Support",
      description: "Complete assistance with application processes",
      stats: "95% Success Rate"
    }
  ];

  const examCategories = [
    {
      title: "MBBS",
      exams: [
        "Private Colleges",
        "Government Colleges"
      ],
      icon: "🏥",
      color: "bg-red-50 border-red-200"
    },
    {
      title: "Btech",
      exams: [
        "Private Colleges",
        "Government Colleges"
      ],
      icon: "🔧",
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "MBA",
      exams: [
        "Private Colleges",
        "Government Colleges"
      ],
      icon: "🏢",
      color: "bg-indigo-50 border-indigo-200"
    },
    {
      title: "B.Sc. Nursing",
      exams: [
        "Private Colleges",
        "Government Colleges"
      ],
      icon: "🩺",
      color: "bg-rose-50 border-rose-200"
    },
    {
      title: "BBA",
      exams: [
        "Private Colleges",
        "Government Colleges"
      ],
      icon: "📈",
      color: "bg-orange-50 border-orange-200"
    },
    {
      title: "BCA",
      exams: [
        "Private Colleges",
        "Government Colleges"
      ],
      icon: "💻",
      color: "bg-sky-50 border-sky-200"
    },
    {
      title: "B.Ed",
      exams: [
        "Private Colleges",
        "Government Colleges"
      ],
      icon: "📚",
      color: "bg-teal-50 border-teal-200"
    },
    {
      title: "PGDM",
      exams: [
        "Private Colleges",
        "Government Colleges"
      ],
      icon: "🎓",
      color: "bg-amber-50 border-amber-200"
    },
    {
      title: "B.Pharma / D.Pharma",
      exams: [
        "Private Colleges",
        "Government Colleges"
      ],
      icon: "💊",
      color: "bg-pink-50 border-pink-200"
    },
    {
      title: "MCA",
      exams: [
        "Private Colleges",
        "Government Colleges"
      ],
      icon: "🖥️",
      color: "bg-cyan-50 border-cyan-200"
    },
    {
      title: "Polytechnic",
      exams: [
        "Private Colleges",
        "Government Colleges"
      ],
      icon: "🔧",
      color: "bg-pink-100 border-pink-300"
    },
    {
      title: "B.Sc Agriculture",
      exams: [
        "Private Colleges",
        "Government Colleges"
      ],
      icon: "🌾",
      color: "bg-lime-50 border-lime-200"
    },
    {
      title: "M.Sc Agriculture",
      exams: [
        "Private Colleges",
        "Government Colleges"
      ],
      icon: "🌱",
      color: "bg-emerald-50 border-emerald-200"
    },
    {
      title: "M.Tech",
      exams: [
        "Private Colleges",
        "Government Colleges"
      ],
      icon: "⚙️",
      color: "bg-gray-50 border-gray-200"
    },
    {
      title: "Management",
      exams: [
        "Private Colleges",
        "Government Colleges"
      ],
      icon: "📊",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Hotel Management",
      exams: [
        "Private Colleges",
        "Government Colleges"
      ],
      icon: "🏨",
      color: "bg-fuchsia-50 border-fuchsia-200"
    },

    {
      title: "Law",
      exams: [
        "Private Colleges",
        "Government Colleges"
      ],
      icon: "⚖️",
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Arts & Design",
      exams: [
        "Private Colleges",
        "Government Colleges"
      ],
      icon: "🎨",
      color: "bg-pink-100 border-pink-300"
    },
    {
      title: "Coaching",
      exams: [
        "NEET",
        "JEE Main",
        "JEE Advanced",
        "12th Board",
      ],
      icon: "🏨",
      color: "bg-teal-50 border-teal-200"
    },
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <FuturisticHeader />

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  🎯 Your Dream College Awaits
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight flex items-center gap-4">
                  <span>
                    Get Your Dream College with{' '}
                    <span className="text-blue-600">Admission Wallah</span>
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                  Transform your dreams into reality with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                    expert admission guidance
                  </span>{" "}
                  and{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                    step-by-step counselling
                  </span>
                  . Get into{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                    India’s top colleges
                  </span>{" "}
                  with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                    personal support and smart strategies
                  </span>
                  .
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/918873204593?text=Hi%20Admission%20Wallah,%20I%20need%20guidance%20for%20college%20admission"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />

                </a>
                <a
                  href="https://wa.me/918873204593?text=Hi%20Admission%20Wallah,%20I%20need%20guidance%20for%20college%20admission"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>

            {/* Right Content - Counselor Image */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8 relative">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto flex items-center justify-center text-6xl">
                    👨‍🏫
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Expert Counselors</h3>
                    <p className="text-gray-600 mt-2">
                      "Where students learn with love and can grow with guidance"
                    </p>
                  </div>
                  <div className="flex justify-center space-x-4 text-sm text-gray-500">
                    <div className="text-center">
                      <div className="font-bold text-blue-600">10,000+</div>
                      <div>Students Guided</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-purple-600">500+</div>
                      <div>Top Colleges</div>
                    </div>
                    <div className="text-center">
                      <div className="font-bold text-green-600">95%</div>
                      <div>Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-400 rounded-full p-3 shadow-lg">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support to help you achieve your academic goals and secure admission in your dream college
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  {service.icon}
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  <div className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {service.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Categories Section */}
      <section id="colleges" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Counselling Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We prepare students for 500+ courses in 1000+ colleges across India. Find the one you are preparing for
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {examCategories.map((category, index) => (
              <div key={index} className={`${category.color} border-2 rounded-xl p-6 hover:shadow-lg transition-shadow`}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl">{category.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>
                <div className="space-y-2 mb-6">
                  {category.exams.map((exam, examIndex) => (
                    <div key={examIndex} className="inline-block bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 mr-2 mb-2">
                      {exam}
                    </div>
                  ))}
                </div>
                <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  Explore Category
                  <ChevronRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <MarqueeTestimonials />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              🚀 Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with our expert counselors and take the first step towards your{" "}
              <span className="text-blue-600 font-semibold">dream college</span>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
            {[
              {
                icon: <Phone className="w-8 h-8 text-blue-600 mb-4" />,
                title: "Call Us",
                value: "+91 6299390393",
                href: "tel:+916299390393"
              },
              {
                icon: <Mail className="w-8 h-8 text-blue-600 mb-4" />,
                title: "Email Us",
                value: "ankitpratapsingh0809@gmail.com",
                href: "mailto:ankitpratapsingh0809@gmail.com"
              },
              {
                icon: <MapPin className="w-8 h-8 text-blue-600 mb-4" />,
                title: "Visit Us",
                value: "Delhi & Patna, India",
                href: "https://www.google.com/maps/search/?api=1&query=Delhi,Mumbai,Bangalore"
              },
            ].map(({ icon, title, value, href }, i) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                key={i}
                className="bg-white border border-gray-200 rounded-2xl p-8 text-center transition-all hover:shadow-lg"
              >
                <div className="flex justify-center">{icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
                <p className="text-gray-600 text-base">{value}</p>
              </a>
            ))}
          </div>

          {/* Founder Info */}
          <div className="px-6 py-6 mt-12 max-w-2xl mx-auto">
            <div className="text-center space-y-4">
              {/* Founder */}
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">👨‍💼</span>
                <p className="text-gray-700 text-base sm:text-lg">
                  Founded by <span className="text-blue-700 font-semibold">Ankit Pratap Singh</span> <span className="text-gray-500">(NITian)</span>
                </p>
              </div>

              {/* Co-Founder */}
              <div className="flex items-center justify-center gap-3">
                <span className="text-2xl">👨‍💼</span>
                <p className="text-gray-700 text-base sm:text-lg">
                  Co-Founded by <span className="text-blue-700 font-semibold">Anand Raj</span> <span className="text-gray-500">(IITian)</span>
                </p>
              </div>
            </div>
          </div>



          <div className="text-center mt-10">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-md hover:bg-blue-700 transition-all duration-200">
              🎯 Book Free Consultation
            </button>
          </div>
        </div>

        {/* Soft blurred decorative circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl z-0 opacity-30"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-100 rounded-full blur-3xl z-0 opacity-30"></div>
      </section>


      {/* Floating Action Buttons */}
      <div
        className="fixed bottom-6 right-6 flex flex-col space-y-4"
        style={{ zIndex: 9999 }}
      >
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918873204593?text=Hi%20Admission%20Wallah,%20I%20need%20guidance%20for%20college%20admission"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 relative group flex items-center justify-center"
          style={{ width: '60px', height: '60px', backgroundColor: '#25D366' }}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-white"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
          </svg>
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
            Chat on WhatsApp
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-y-4 border-y-transparent"></div>
          </div>
        </a>

        {/* Phone Button */}
        <a
          href="tel:+916299390393"
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 relative group flex items-center justify-center"
          style={{ width: '60px', height: '60px' }}
        >
          <Phone className="w-6 h-6" />
          <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
            Call Now
            <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-y-4 border-y-transparent"></div>
          </div>
        </a>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand Info */}
            <div className="break-words">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 text-white tracking-tight">
                🎓 Admission Wallah
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your trusted partner in <span className="text-white font-medium">career counseling</span>,
                <span className="text-white font-medium"> exam prep</span>, and securing admission to India’s top colleges.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#home" className="hover:text-blue-400 transition block">🏠 Home</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition block">💼 Services</a></li>
                <li><a href="#colleges" className="hover:text-blue-400 transition block">🎓 Colleges</a></li>
                <li><a href="#testimonials" className="hover:text-blue-400 transition block">🌟 Success Stories</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-blue-400 transition block">🧭 Career Counseling</a></li>
                <li><a href="#" className="hover:text-blue-400 transition block">🏛️ College Selection</a></li>
                <li><a href="#" className="hover:text-blue-400 transition block">📝 Application Support</a></li>
                <li><a href="#" className="hover:text-blue-400 transition block">📚 Exam Preparation</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="break-words">
              <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li>
                  <a href='tel:+916299390393' className="flex items-center gap-2 hover:text-blue-400 break-all" target="_blank" rel="noopener noreferrer">
                    <span>📞</span> +91 6299390393
                  </a>
                </li>
                <li>
                  <a href='mailto:ankitpratapsingh0809@gmail.com' className="flex items-center gap-2 hover:text-blue-400 break-all" target="_blank" rel="noopener noreferrer">
                    <span>📧</span> ankitpratapsingh0809@gmail.com
                  </a>
                </li>
                <li>
                  <a href='https://www.google.com/maps/search/?api=1&query=Delhi,Mumbai,Bangalore' className="flex items-center gap-2 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
                    <span>📍</span> Delhi & Patna, India
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} <span className="text-white font-medium">Admission Wallah</span>. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default AdmissionWallah;