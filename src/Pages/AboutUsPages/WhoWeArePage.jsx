import React from 'react';
import InfoSection from '../../Pages/landing/InfoSection'; // Adjust path if needed

const WhoWeArePage = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        {/* You can copy the "Who We Are" content from your AboutUs.jsx file here */}
        <InfoSection
          title="Who We Are"
          imageSrc="https://picsum.photos/seed/dhd-about-who/800/600"
          alt="Who We Are"
          reverse={true}
        >
          <p>
            DHD is a leading privately owned mixed-use real estate developer in India, specializing in residential-led projects. We focus on "for sale" and "build to rent" residential schemes, incorporating mixed-use opportunities such as hotels, flexible workspaces, retail, and logistics.
          </p>
          <p>
            Our entrepreneurial approach and passion for transforming India drive us to seek value and maximize opportunities for our partners in unexpected places.
          </p>
        </InfoSection>

        {/* You can add more content to this page if you wish */}
      </main>
    </div>
  );
};

export default WhoWeArePage;