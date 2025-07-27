import React from "react";
import RewardsTeam from "../../assets/RewardsTeam.jpg"; // ✅ Image import
import RewardsCity from "../../assets/RewardCity.jpg"; // ✅ Image import

const RewardsAndBenefits = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Rewards & Benefits</h1>

      <div className="bg-gray-50 p-6 rounded-xl shadow-md text-lg text-gray-700 space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">What We Offer</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Competitive Salary and Benefits including leave, pension, share
            plans, and life assurance.
          </li>
          <li>Flexible Working to support work-life balance.</li>
          <li>Wellbeing Programs such as 24/7 GP and employee assistance.</li>
          <li>Recognition and Rewards through Kier Stars and annual awards.</li>
          <li>
            Learning and Development with sponsorships and growth opportunities.
          </li>
          <li>Volunteering initiatives to contribute to your community.</li>
        </ul>
      </div>

      <img
        src={RewardsTeam}
        alt="DHD team collaborating"
        className="rounded-xl shadow-md"
      />

      <div className="bg-gray-50 p-6 rounded-xl shadow-md text-lg text-gray-700 space-y-3">
        <h2 className="text-2xl font-semibold text-gray-800">
          Who We Are Looking For
        </h2>
        <ul className="list-disc pl-5">
          <li>Collaborative and solutions-oriented individuals</li>
          <li>Adaptable and innovative thinkers</li>
          <li>Driven to achieve and make a positive impact</li>
        </ul>
      </div>

      <img
        src={RewardsCity}
        alt="City with DHD projects"
        className="rounded-xl shadow-md"
      />

      <div className="bg-gray-50 p-6 rounded-xl shadow-md text-lg text-gray-700">
        <h2 className="text-2xl font-semibold text-gray-800">
          Your Career, Your DHD
        </h2>
        <p>
          With over 2,000 career paths, DHD offers endless growth opportunities.
          Join us and make a positive impact while building a rewarding career.
        </p>
      </div>
    </div>
  );
};

export default RewardsAndBenefits;
