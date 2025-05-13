import React from 'react';
import { FaUsers, FaUniversity, FaRegHandshake } from 'react-icons/fa';
import clientBanner from '../assets/Clients.png';

const Clients = () => {
  return (
    <div>
      {/* Our Clients Section */}
      <section id='clients' className="text-center py-16 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-2">Our Clients</h2>
        <p className="text-sm sm:text-md text-gray-600 mb-6">
          We have been working with some Fortune 500+ clients
        </p>

        {/* Client Banner */}
        <div className="mb-10">
          <img
            src={clientBanner}
            alt="Our Clients"
            className="mx-auto w-full max-w-5xl object-contain px-2"
          />
        </div>
      </section>

      {/* Community Management Section */}
      <section className="text-center py-16 px-6 sm:px-8 md:px-16 lg:px-24 xl:px-36">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-2">
          Manage your entire community in a single system
        </h2>
        <p className="text-sm sm:text-md text-gray-600 mb-10">Who is Nexcent suitable for?</p>

        <div className="flex flex-col md:flex-row gap-6">
          {[
            {
              title: 'Membership Organisations',
              description:
                'Our membership management software provides full automation of membership renewals and payments',
              icon: <FaUsers className="text-green-600 text-5xl sm:text-6xl mb-4 mx-auto" />,
            },
            {
              title: 'National Associations',
              description:
                'Our membership management software provides full automation of membership renewals and payments',
              icon: <FaUniversity className="text-green-600 text-5xl sm:text-6xl mb-4 mx-auto" />,
            },
            {
              title: 'Clubs And Groups',
              description:
                'Our membership management software provides full automation of membership renewals and payments',
              icon: <FaRegHandshake className="text-green-600 text-5xl sm:text-6xl mb-4 mx-auto" />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center flex-1 min-h-[300px] sm:min-h-[350px] flex flex-col justify-between"
            >
              {item.icon}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm sm:text-md text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Clients;
