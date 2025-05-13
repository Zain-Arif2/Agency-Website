import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      position: "CEO, Company A",
      feedback:
        "Their strategy and execution led to a 200% increase in our customer engagement. Excellent communication and professionalism throughout.",
    },
    {
      name: "Jane Smith",
      position: "Founder, Company B",
      feedback:
        "From start to finish, the process was seamless. The team provided tailored solutions that exceeded our expectations.",
    },
    {
      name: "Emily Johnson",
      position: "Marketing Head, Company C",
      feedback:
        "The best agency we’ve worked with! They truly care about results and go above and beyond to deliver.",
    },
    {
      name: "Michael Lee",
      position: "CTO, Startup X",
      feedback:
        "Their technical expertise helped streamline our systems. Reliable, innovative, and results-driven team!",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <section id="testimonials" className="py-24 px-6 bg-gray-100 min-h-[500px]">
      <h2 className="text-4xl pt-[45px] font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="max-w-3xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <div className="bg-white p-8 rounded-xl shadow-lg text-center min-h-[300px] flex flex-col justify-center items-center">
                <p className="text-gray-700 text-lg mb-6">"{testimonial.feedback}"</p>
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-xl" />
                  ))}
                </div>
                <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
