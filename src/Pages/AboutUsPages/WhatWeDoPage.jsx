import React from 'react';

const WhatWeDoPage = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800 py-12">
      <main className="max-w-4xl mx-auto px-4">
        <section className="bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What We Do
          </h1>
          <img 
            src="https://picsum.photos/seed/dhd-about-what/800/600" 
            alt="What We Do"
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <div className="text-gray-700 space-y-4">
            <p>
              We specialize in residential-led mixed-use developments characterized by bespoke design and exceptional quality, with a focus on enhancing the local environment.
            </p>
            <p>
              DHD operates across the entire asset lifecycle, prioritizing customer-centricity in all our endeavors. Our services encompass land assembly, land use and planning strategy, stakeholder engagement, sales and marketing, construction, customer care, and asset management.
            </p>
            <p>
              Our integrated approach emphasizes design and delivery as fundamental elements throughout the development lifecycle. We are committed to creating India's most aesthetically pleasing spaces for living, working, and leisure. Our expertise in navigating India's complex planning rules and regulations benefits both DHD and our partners.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WhatWeDoPage;
