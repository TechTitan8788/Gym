import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Titan Fitness
              <span className="hidden sm:block text-3xl mt-8">
                High-quality fitness equipment designed for strength, endurance,
                and performance. Achieve your fitness goals with durable and
                reliable workout gear{" "}
              </span>
            </h2>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              to="/"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Download now
            </Link>
            <h1 className="flex justify-center items-center mt-5">
              Our gym is dedicated to helping you achieve your fitness goals
              with ease. We provide top-quality equipment, expert trainers, and
              modern facilities  
            </h1>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img
            className="w-100"
            src="https://www.shutterstock.com/image-vector/gym-vector-logo-bodybuilder-bodybuilding-600w-2306711655.jpg"
            alt="image1"
          />
        </div>


<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  {/* Modern Gym Showcase Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Hero Image */}
    <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-2xl">
      <img 
        className="w-full h-96 object-cover transition-transform hover:scale-105"
        src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg" 
        alt="Modern gym interior"
        loading="eager"
      />
    </div>

    {/* Featured Classes */}
    <div className="space-y-6">
      <div className="rounded-xl overflow-hidden shadow-lg h-60">
        <img 
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg" 
          alt="Crossfit class"
        />
      </div>
      <div className="rounded-xl overflow-hidden shadow-lg h-60">
        <img 
          className="w-full h-full object-cover"
          src="https://images.pexels.com/photos/6550826/pexels-photo-6550826.jpeg" 
          alt="Personal training"
        />
      </div>
    </div>
  </div>

  {/* Equipment Gallery */}
  <h2 className="text-3xl font-bold mt-16 mb-8 text-center">Premium Equipment</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
    {[
      "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg",
      "https://images.pexels.com/photos/416747/pexels-photo-416747.jpeg",
      "https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg",
      "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
      "https://images.pexels.com/photos/221247/pexels-photo-221247.jpeg",
      "https://images.pexels.com/photos/17840/pexels-photo.jpg",
      "https://images.pexels.com/photos/3912473/pexels-photo-3912473.jpeg",
      "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg"
    ].map((src, index) => (
      <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
        <img 
          className="w-full h-48 sm:h-56 object-cover"
          src={src} 
          alt={`Gym equipment ${index+1}`}
          loading="lazy"
        />
      </div>
    ))}
  </div>

  {/* Training Programs */}
  <h2 className="text-3xl font-bold mt-16 mb-8 text-center">Training Programs</h2>
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
    {[
      {
        img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b",
        title: "Strength Training"
      },
      {
        img: "https://images.unsplash.com/photo-1571019614242-c5c5a73be60b",
        title: "Cardio Programs"
      },
      {
        img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5",
        title: "Combat Fitness"
      }
    ].map((program, index) => (
      <div key={index} className="relative group rounded-xl overflow-hidden h-64">
        <img 
          className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all"
          src={program.img} 
          alt={program.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
          <h3 className="text-white text-2xl font-bold">{program.title}</h3>
        </div>
      </div>
    ))}
  </div>
</div>



          <h1>Our gym is dedicated to helping you achieve your fitness goals</h1>
          <p className="text-gray-600 text-center">
            with ease. We provide top-quality equipment, expert trainers, and
            modern facilities to ensure you have everything you need for a
            successful workout. Whether you're aiming to lose weight, build
          </p>
        
      </aside>

      <div className="max-w-4xl mx-auto  rounded-xl  overflow-hidden ">
        <div className=" md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
            Why Choose Our Gym?
          </h2>
          <p className="text-center text-gray-600 text-lg md:text-xl leading-relaxed tracking-wide mb-8">
            A gym is a place where people exercise to stay fit and strong. It
            has equipment for weight training, cardio, and other fitness
            activities. People of all ages and fitness levels come to the gym.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-indigo-600 mb-4">
                <svg
                  className="w-10 h-10 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                Modern Equipment
              </h3>
              <p className="text-gray-600 text-center">
                Latest machines for weight and cardio training
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-indigo-600 mb-4">
                <svg
                  className="w-10 h-10 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                Expert Trainers
              </h3>
              <p className="text-gray-600 text-center">
                Certified professionals for personalized guidance
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-indigo-600 mb-4">
                <svg
                  className="w-10 h-10 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3">
                Progress Tracking
              </h3>
              <p className="text-gray-600 text-center">
                Monitor your fitness journey with our apps
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
