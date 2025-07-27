import React from "react";
import {
  FaMoneyBillWave,
  FaBalanceScale,
  FaHeartbeat,
  FaTrophy,
  FaBook,
  FaHandsHelping,
} from "react-icons/fa";

// Import actual images
import ApprenticeshipImage from "../../assets/ApprenticeshipConstruction.jpg";
import DhdDegreeImage from "../../assets/DhdDegree.jpg";
import GraduatesImage from "../../assets/Graduate.jpeg";
import InternImage from "../../assets/Internships&Placement.jpg";
import RewardsTeam from "../../assets/RewardsTeam.jpg";
import RewardsCity from "../../assets/RewardCity.jpg";
import WorkingImage from "../../assets/WorkingExperienceConstruction.jpg";

const CareersWithUs = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Careers With Us
        </h1>
      </section>

      <section className="-mt-10 relative z-10 mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl text-center px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Join Our {""}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Mission
          </span>
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto mb-4">
          At DHD, we believe our people are our greatest asset. We offer a
          comprehensive range of career opportunities for talented individuals
          who are passionate about making a positive impact on the world.
          Whether you're a student taking your first steps, a graduate launching
          your career, or an experienced professional seeking new challenges,
          DHD provides a supportive, innovative, and rewarding environment where
          you can grow, learn, and thrive while contributing to sustainable
          infrastructure development.
        </p>
      </section>

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-8"></div>

        {/* Career Opportunities Grid */}
        <div className="space-y-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Your Career Journey Starts Here
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of career opportunities designed to
              nurture talent at every stage
            </p>
          </div>

          {/* Work Experience */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="md:flex">
              <div className="md:w-1/2 relative overflow-hidden">
                <img
                  src={WorkingImage}
                  alt="Students at site visit"
                  className="w-full h-80 md:h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="md:w-1/2 p-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Work Experience
                  </h2>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-blue-600">
                  Your Chance to Sample the World of Work
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Gain valuable insights into the built environment through our
                  comprehensive work experience programs. Perfect for students
                  looking to understand construction processes firsthand, our
                  programs offer real-world exposure to project management, site
                  operations, and industry best practices.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Site visits and hands-on learning
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Mentorship from industry experts
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Certificate of completion
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Apprenticeships */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="md:flex md:flex-row-reverse">
              <div className="md:w-1/2 relative overflow-hidden">
                <img
                  src={ApprenticeshipImage}
                  alt="Apprentice working with mentor"
                  className="w-full h-80 md:h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="md:w-1/2 p-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Apprenticeships
                  </h2>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-green-600">
                  Working and Learning in Parallel
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Combine practical training with academic study in our
                  comprehensive apprenticeship programs. Gain valuable skills
                  and recognized qualifications while earning a competitive
                  salary. Work alongside experienced mentors to develop
                  practical skills on real construction sites while building
                  your theoretical knowledge.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Competitive salary from day one
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Nationally recognized qualifications
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Clear progression pathways
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Graduates */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="md:flex">
              <div className="md:w-1/2 relative overflow-hidden">
                <img
                  src={GraduatesImage}
                  alt="Graduate engineer presenting project"
                  className="w-full h-80 md:h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="md:w-1/2 p-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Graduates
                  </h2>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-purple-600">
                  Launch Your Career with DHD
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Kickstart your career with our comprehensive graduate
                  programs, designed to provide you with the skills and
                  experience you need to succeed in the built environment.
                  Present your project ideas and collaborate with experienced
                  teams from day one while receiving structured support and
                  mentoring.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Structured 2-year development program
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Rotation across multiple departments
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Professional qualification support
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Internships & Placements */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="md:flex md:flex-row-reverse">
              <div className="md:w-1/2 relative overflow-hidden">
                <img
                  src={InternImage}
                  alt="Intern collaborating on design"
                  className="w-full h-80 md:h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="md:w-1/2 p-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    Internships & Placements
                  </h2>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-orange-600">
                  Gain Real-World Experience
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our internships and industrial placements offer hands-on
                  experience and valuable insights into the diverse world of
                  infrastructure, building, and development. Collaborate with
                  colleagues on design projects in modern office environments
                  while contributing to real projects.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    6-12 month placement programs
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Real project involvement
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Potential for permanent roles
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* DHD Degree */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="md:flex">
              <div className="md:w-1/2 relative overflow-hidden">
                <img
                  src={DhdDegreeImage}
                  alt="DHD degree student working"
                  className="w-full h-80 md:h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="md:w-1/2 p-10">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mr-4">
                    <svg
                      className="w-6 h-6 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    DHD Degree
                  </h2>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-indigo-600">
                  Earn While You Learn
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our DHD Degree Programme allows you to earn a recognized BSc
                  degree while gaining practical experience and earning a
                  competitive salary. Apply your academic knowledge in
                  real-world construction project settings while completing your
                  higher education qualification.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    BSc degree from accredited university
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    No student debt
                  </div>
                  <div className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    4 years of work experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Benefits Section */}
        <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose DHD?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to creating an environment where our people can
              thrive personally and professionally
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: (
                  <FaMoneyBillWave className="text-4xl mb-4 text-blue-600" />
                ),
                title: "Competitive Package",
                description:
                  "Comprehensive benefits including salary, pension, share plans, life assurance, and annual leave",
              },
              {
                icon: (
                  <FaBalanceScale className="text-4xl mb-4 text-blue-600" />
                ),
                title: "Work-Life Balance",
                description:
                  "Flexible working arrangements and remote work options to support your personal commitments",
              },
              {
                icon: <FaHeartbeat className="text-4xl mb-4 text-blue-600" />,
                title: "Health & Wellbeing",
                description:
                  "24/7 GP service, employee assistance program, and comprehensive wellness initiatives",
              },
              {
                icon: <FaTrophy className="text-4xl mb-4 text-blue-600" />,
                title: "Recognition & Rewards",
                description:
                  "Kier Stars scheme, annual employee awards, and performance-based incentives",
              },
              {
                icon: <FaBook className="text-4xl mb-4 text-blue-600" />,
                title: "Learning & Development",
                description:
                  "Professional memberships, training programs, and continuous learning opportunities",
              },
              {
                icon: (
                  <FaHandsHelping className="text-4xl mb-4 text-blue-600" />
                ),
                title: "Community Impact",
                description:
                  "Volunteering initiatives and opportunities to contribute to local communities",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {benefit.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Who We're Looking For - Enhanced */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Who We're Looking For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We seek passionate individuals who share our values and vision for
              sustainable development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Collaborative
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Solutions-oriented team players who thrive in diverse, inclusive
                environments and believe in the power of collective achievement.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Innovative
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Adaptable and creative thinkers who embrace change, seek
                continuous improvement, and drive technological advancement.
              </p>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                Motivated individuals who are passionate about making a positive
                impact and committed to excellence in everything they do.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Additional Qualities We Value
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Strong communication and interpersonal skills
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Commitment to sustainability and environmental
                    responsibility
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Problem-solving mindset and analytical thinking
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Leadership potential and willingness to mentor others
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Cultural awareness and respect for diversity
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">
                    Entrepreneurial spirit and business acumen
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Section - Enhanced */}
        <div className="bg-white rounded-2xl shadow-xl p-12 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              DHD Group: Partnering for Success
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed text-center max-w-5xl mx-auto mb-8">
            DHD Group actively seeks partnerships that align with our mission of
            delivering sustainable infrastructure and building solutions. We
            believe that collaboration is key to unlocking new opportunities,
            driving innovation, and creating shared value for our clients,
            communities, and stakeholders.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Strategic Alliances
              </h3>
              <p className="text-gray-600">
                Building long-term partnerships with industry leaders and
                innovators
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Innovation Hub
              </h3>
              <p className="text-gray-600">
                Collaborative research and development initiatives
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Global Network
              </h3>
              <p className="text-gray-600">
                International collaborations and knowledge sharing
              </p>
            </div>
          </div>
        </div>

        {/* Land Acquisition Section - Enhanced */}
        <div className="bg-gradient-to-br from-gray-100 to-blue-100 rounded-2xl shadow-xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Land Acquisition & Development: Prime Opportunities in Pune
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                DHD is a leading property developer committed to shaping the
                urban landscape of Pune. Our dedicated Land Acquisition and
                Management Department (LAMD) is actively seeking prime land
                parcels for a diverse range of residential, commercial, and
                mixed-use developments that contribute to sustainable urban
                growth.
              </p>

              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Flexible Acquisition Structures
              </h3>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                      />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Outright Purchase
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Ideal for landowners seeking a straightforward and efficient
                    sale. We offer competitive market prices with transparent
                    valuation processes and ensure seamless, quick transactions.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Joint Development
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Collaborative approach allowing landowners to participate
                    actively while leveraging DHD's expertise, resources, and
                    market knowledge to maximize the development potential.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                    Joint Ventures
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-center">
                    Strategic alliances combining strengths for mutually
                    beneficial partnerships, sharing risks and rewards while
                    fostering long-term value creation and sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .delay-2000 {
          animation-delay: 2s;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.2;
          }
        }

        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default CareersWithUs;
