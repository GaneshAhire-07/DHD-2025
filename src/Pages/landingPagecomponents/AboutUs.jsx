import React from "react";
import AboutUsImage from "../../assets/2-1256x718.jpg";

const AboutUs = () => {
  return (
 <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src={AboutUsImage}
              alt="About Us"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Right Text Content */}
          <div className="w-full md:w-1/2 md:pl-10">
            <div className="text-wrapper">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                <strong>About Us</strong>
              </h1>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                <strong>From Humble Beginnings to Industry Leadership</strong>
                <br /><br />
                DHD is a leading privately held real estate developer in India,
                recognized for its residential-led mixed-use developments.
                Founded by visionaries and powered by over 300 passionate
                professionals, we deliver high-quality projects that balance
                design, sustainability, and commercial value. With deep
                expertise, a customer-first approach, and active leadership, DHD
                continues to shape India's built environment with integrity and
                innovation. stakeholders.
              </p>
              <div className="mt-6">
                <a
                  href="https://mobiri.se"
                  className="px-6 py-2 border-2 border-green-600 text-green-600 font-medium rounded-lg hover:bg-green-600 hover:text-white transition duration-300"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
