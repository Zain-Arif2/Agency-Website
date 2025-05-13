import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  return (
    <div>
      {/* Blog Section */}
      <section className="text-center py-16 px-6 sm:px-[32px] md:px-[144px]">
        <h2 className="text-4xl font-semibold mb-4">Caring is the new marketing</h2>
        <p className="max-w-3xl mx-auto text-md text-gray-600 mb-10">
          The Nexcent blog is the best place to read about the latest membership insights, trends, and more. See who's joining the community, read about how our community is increasing their membership income, and learn about new strategies for success.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 max-w-6xl mx-auto">
          {[{
            title: "Creating Streamlined Safeguarding Processes with OneRen",
            excerpt: "Discover how OneRen has streamlined their safeguarding processes and ensured a safer community for all members. Learn about the steps they took and the tools they used to achieve success.",
            link: "#"
          },
          {
            title: "What are your safeguarding responsibilities and how can you manage them?",
            excerpt: "Safeguarding is a crucial part of running any membership organization. In this post, we dive into the responsibilities you must adhere to and how to effectively manage them with ease.",
            link: "#"
          },
          {
            title: "Revamping the Membership Model with Triathlon Australia",
            excerpt: "Triathlon Australia has revamped its membership model to engage more athletes and provide greater value. Find out how they have improved member retention and increased their membership base.",
            link: "#"
          }].map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300 w-full md:w-1/3"
            >
              <h3 className="text-lg font-semibold mb-3 text-left">{item.title}</h3>
              <p className="text-sm text-left text-gray-700 mb-4">{item.excerpt}</p>
              <a
                href={item.link}
                className="text-green-600 text-sm font-medium flex items-center gap-1 hover:underline"
              >
                Read more <FaArrowRight className="mt-[2px]" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-100 text-center py-20 px-6 sm:px-[32px] md:px-[144px]">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 sm:mb-12">
          Pellentesque suscipit fringilla libero eu.
        </h2>
        <button className="bg-[#4CAF4F] hover:bg-green-600 text-white px-6 py-3 rounded-full mt-4 transition-all flex items-center gap-2 mx-auto">
          Get a Demo <FaArrowRight />
        </button>
      </section>
    </div>
  );
};

export default Blog;
