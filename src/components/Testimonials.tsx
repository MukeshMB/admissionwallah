import { Star } from "lucide-react";

export default function MarqueeTestimonials() {
    const testimonials = [
        {
            name: "Dr. Priya Sharma",
            course: "MBBS, AIIMS Delhi",
            text: "Admission Wallah's guidance was instrumental in my NEET preparation and admission process. Their counselors are truly amazing!",
            rating: 5,
            image: "👩‍⚕️",
            category: "MBBS",
            type: "Government College"
        },
        {
            name: "Rahul Gupta",
            course: "B.Tech CSE, IIT Bombay",
            text: "From JEE Main to JEE Advanced preparation, Admission Wallah provided comprehensive support. Their strategic approach helped me crack IIT!",
            rating: 5,
            image: "👨‍💻",
            category: "Btech",
            type: "Government College"
        },
        {
            name: "Ananya Desai",
            course: "MBA, IIM Bangalore",
            text: "The CAT preparation strategy and interview guidance from Admission Wallah was phenomenal. Now I'm pursuing my MBA from IIM Bangalore!",
            rating: 5,
            image: "👩‍💼",
            category: "MBA",
            type: "Government College"
        },
        {
            name: "Kavya Reddy",
            course: "B.Sc. Nursing, AIIMS Rishikesh",
            text: "Admission Wallah guided me through the nursing entrance exams and helped me secure admission in a prestigious government college!",
            rating: 5,
            image: "👩‍⚕️",
            category: "B.Sc. Nursing",
            type: "Government College"
        },
        {
            name: "Ishita Jain",
            course: "BBA, Delhi University",
            text: "From entrance exam preparation to college selection, Admission Wallah provided end-to-end support. Now I'm studying BBA at DU!",
            rating: 5,
            image: "👩‍🎓",
            category: "BBA",
            type: "Government College"
        },
        {
            name: "Deepika Sharma",
            course: "MCA, NIT Trichy",
            text: "From NIMCET preparation to college selection, Admission Wallah provided comprehensive support. Now I'm pursuing MCA from NIT!",
            rating: 5,
            image: "👩‍💻",
            category: "MCA",
            type: "Government College"
        },
        {
            name: "Arjun Mehta",
            course: "MBBS, Kasturba Medical College",
            text: "Thanks to their expert counseling, I got admission in one of the top private medical colleges. The guidance was exceptional!",
            rating: 5,
            image: "👨‍⚕️",
            category: "MBBS",
            type: "Private College"
        },
        {
            name: "Sneha Patel",
            course: "B.Tech IT, VIT Vellore",
            text: "The counseling team helped me choose the perfect private engineering college. Their industry insights were invaluable!",
            rating: 5,
            image: "👩‍💻",
            category: "Btech",
            type: "Private College"
        },
        {
            name: "Anjali Khanna",
            course: "LLB, Faculty of Law, DU",
            text: "Admission Wallah's legal education expertise helped me secure admission in Delhi University's law program. Excellent guidance!",
            rating: 5,
            image: "👩‍⚖️",
            category: "Law",
            type: "Government College"
        }
    ];

    // Create two identical arrays for seamless loop
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    type Testimonial = {
        name: string;
        course: string;
        text: string;
        rating: number;
        image: string;
        category: string;
        type: string;
    };

    const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mx-2 sm:mx-4 min-w-[280px] sm:min-w-[350px] lg:min-w-[420px] max-w-[280px] sm:max-w-[350px] lg:max-w-[420px] hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                <div className="text-2xl sm:text-3xl lg:text-4xl">{testimonial.image}</div>
                <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 text-sm sm:text-base lg:text-lg truncate">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">{testimonial.course}</p>
                    <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full mt-2">
                        {testimonial.type}
                    </span>
                </div>
            </div>
            <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 fill-current" />
                ))}
            </div>
            <p className="text-gray-600 italic text-xs sm:text-sm lg:text-base leading-relaxed line-clamp-3">"{testimonial.text}"</p>
        </div>
    );

    return (
        <section id="testimonials" className="pt-5 pb-10 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                        Success Stories
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                        Hear from our students who achieved their dreams with our guidance
                    </p>
                </div>

                {/* First Row - Left to Right */}
                <div className="relative mb-4 sm:mb-6 lg:mb-8">
                    <div className="flex animate-marquee hover:animation-pause">
                        {duplicatedTestimonials.map((testimonial, index) => (
                            <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
                        ))}
                    </div>
                </div>

                {/* Second Row - Right to Left */}
                <div className="relative">
                    <div className="flex animate-marquee-reverse hover:animation-pause">
                        {duplicatedTestimonials.reverse().map((testimonial, index) => (
                            <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee {
          animation: marquee 80s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 80s linear infinite;
        }

        @media (max-width: 640px) {
          .animate-marquee {
            animation: marquee 60s linear infinite;
          }
          .animate-marquee-reverse {
            animation: marquee-reverse 60s linear infinite;
          }
        }

        .hover\\:animation-pause:hover {
          animation-play-state: paused;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
        </section>
    );
}