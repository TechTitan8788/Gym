import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className=">
            <img
              src="https://xplorgym.co.uk/wp-content/uploads/2023/10/commercial-gym-equipment-list.jpg"
              alt="image"
          
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
            Welcome to [Titan Fitness] - Where Fitness Meets Innovation
            </h2>
            <p className="mt-6 text-gray-600">
            Our gym is designed to help you achieve your fitness goals easily. We offer top-quality equipment and certified trainers to guide you. Whether you're looking to lose weight, build muscle, or increase stamina, we’ve got the right programs for you.Achieve your fitness goals with our top-quality equipment, expert trainers, and modern facilities
            </p>
            <p className="mt-4 text-gray-600">
            .Our modern facilities create a comfortable environment for everyone. Join us and start your journey to a healthier, stronger you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
