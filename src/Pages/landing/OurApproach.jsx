import React from "react";

// Online image URLs
const commitmentImage = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=400&fit=crop";
const localImpactImage = "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=400&fit=crop";
const modernMethodsImage = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=400&fit=crop";
const covidResponseImage = "https://images.unsplash.com/photo-1584744982491-665216d95f8b?w=800&h=400&fit=crop";
const careerEventsImage = "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=400&fit=crop";
const offsiteMethodsImage = "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=400&fit=crop";
const bimIntegrationImage = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop";
const bimTechnologyImage = "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop";
const bimCollaborationImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop";
const supplyChainImage = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=400&fit=crop";
const paymentPracticesImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop";
const sustainableWorldImage = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop";
const sustainabilityFrameworkImage = "https://images.unsplash.com/photo-1473172707857-f9e276582ab6?w=800&h=400&fit=crop";

const OurApproach = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Our Approach
        </h1>
      </section>

      <section className="-mt-10 relative z-10 mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl text-center px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Our
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            {" "}
            Approach!
          </span>
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto mb-4">
          Discover how DHD delivers excellence, innovation, and social value in every project.
        </p>
      </section>

      <section className="mx-auto max-w-4xl bg-white rounded-2xl shadow-xl text-left px-8 py-10 my-10">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#002147]">
          Commitment to Excellence
        </h3>
        <p className="text-slate-600 mb-4">
          DHD approaches each project with a consistent commitment to excellence, regardless of sector or client. We leverage our specialized expertise, extensive experience, and forward-thinking approach to deliver innovative and effective solutions. Central to our ethos is a dedication to generating social value, ensuring that our work benefits local communities.
        </p>
        <img
          src={commitmentImage}
          alt="Commitment to Excellence"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />

        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#002147]">
          Local Roots, National Impact
        </h3>
        <p className="text-slate-600 mb-4">
          We are a company with strong local roots and a national presence. In every community we serve, we aim to leave a positive legacy by contributing to the economic, social, and environmental well-being. This commitment to social responsibility is not a recent initiative; it has been a core value of DHD for decades and is integral to our operations and company culture.
        </p>
        <img
          src={localImpactImage}
          alt="Local Roots and National Impact"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />

        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#002147]">
          Modern Construction Methods
        </h3>
        <p className="text-slate-600 mb-4">
          DHD is at the forefront of adopting modern construction methods, including the use of precast components and digital construction tools such as Building Information Modeling (BIM). We actively cultivate long-term partnerships with our supply chain and engage in multiple frameworks to ensure timely, cost-effective, and high-quality project delivery, while maximizing our positive impact on the wider community.
        </p>
        <img
          src={modernMethodsImage}
          alt="Modern Construction Methods"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />

        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#002147]">
          Our COVID-19 Response
        </h3>
        <h4 className="text-lg md:text-xl font-medium mb-2 text-[#003366]">
          Delivering for Communities
        </h4>
        <p className="text-slate-600 mb-4">
          DHD is committed to serving communities worldwide, and our response to the COVID-19 pandemic exemplifies this commitment. We have remained steadfast in our mission to deliver critical infrastructure sustainably throughout this global challenge.
        </p>
        <img
          src={covidResponseImage}
          alt="COVID-19 Response"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <p className="text-slate-600 mb-4">
          Our support for communities extends beyond our core project delivery. DHD teams across the country have mobilized to provide essential assistance and resources where they are most needed. Our initiatives include:
        </p>
        <ul className="list-disc list-inside text-slate-600 mb-4 pl-5">
          <li>Establishing homeless shelters in various towns.</li>
          <li>Donating laptops to schools, with a particular focus on supporting education in the northwest.</li>
          <li>Providing daily hot meals to vulnerable families and elderly residents in Lowestoft.</li>
        </ul>
        <p className="text-slate-600 mb-4">
          Furthermore, we have conducted virtual career events with schools to engage the next generation of talent. These events showcase the diverse career opportunities within the built environment and inspire young people to contribute to the post-COVID economic recovery.
        </p>
        <p className="text-slate-600 italic mb-4">
          Our commitment to community engagement was recognized by the Headteacher of Hayle Academy in Cornwall, who stated: "During the three days of work experience, the students were able to expand their network, develop their skills, and gain an insight into working within construction. Thank you to DHD for facilitating this work experience!"
        </p>
        <img
          src={careerEventsImage}
          alt="Career Events"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />

        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#002147]">
          Offsite & Modern Methods
        </h3>
        <p className="text-slate-600 mb-4">
          DHD is embracing modern construction methods that are revolutionizing the industry. These methods deliver significant improvements, including a 40% increase in productivity and the virtual elimination of on-site waste.
        </p>
        <img
          src={offsiteMethodsImage}
          alt="Offsite Modern Methods"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <h4 className="text-lg md:text-xl font-medium mb-2 text-[#003366]">
          How Does It Work?
        </h4>
        <p className="text-slate-600 mb-4">
          Modern construction methods involve designing, planning, manufacturing, and pre-assembling building components offsite in a controlled factory setting. This approach encompasses everything from individual components like service risers and reinforced floors to complete modular building units.
        </p>
        <p className="text-slate-600 mb-4">
          DHD is increasingly integrating these methods across diverse sectors and locations. Our projects utilize thousands of precast components, as well as smaller elements such as bathroom pods, prison cells, and educational facilities.
        </p>
        <p className="text-slate-600 mb-4">
          The advantages of modern methods are numerous, encompassing enhanced quality, cost efficiency, increased productivity, improved health and safety, and reduced environmental impact.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#002147]">
          Building Information Modeling
        </h3>
        <p className="text-slate-600 mb-4">
          In response to the evolving built environment, DHD is proactively integrating Building Information Modeling (BIM) across a wide spectrum of projects.
        </p>
        <img
          src={bimIntegrationImage}
          alt="BIM Integration"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <p className="text-slate-600 mb-4">
          BIM fosters a collaborative working environment among stakeholders and enables the generation and utilization of high-quality information throughout the entire project lifecycle. This structured approach to information management unlocks efficiencies and enhances productivity for all involved. DHD provides comprehensive support to both our supply chain and internal staff, ensuring everyone possesses the necessary BIM skills and knowledge.
        </p>
        <p className="text-slate-600 mb-4">
          To further optimize the BIM process, we promote the use of advanced technology. This ensures data security, accessibility, and traceability throughout its lifecycle, exceeding current needs and extending value far into the future. Transitioning from paper-based methods also significantly enhances our sustainability efforts.
        </p>
        <img
          src={bimTechnologyImage}
          alt="BIM Technology"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <p className="text-slate-600 mb-4">
          DHD's BIM excellence is driven by a team of accomplished subject matter experts who provide guidance on BIM implementation and emerging technologies. Their extensive and diverse knowledge base enables us to navigate the complexities of digital transformation effectively.
        </p>
        <p className="text-slate-600 mb-4">
          Our team actively contributes to and supports the WORLD BIM Alliance and BIM Regions, fostering industry collaboration and advancement. We have also partnered with The B1M to produce The Future Construction Video Channel, a platform for sharing valuable case studies and forward-looking insights.
        </p>
        <img
          src={bimCollaborationImage}
          alt="BIM Collaboration"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <p className="text-slate-600 mb-4">
          DHD's commitment to BIM has been formally recognized through BSI Certification to BIM Level 2, in accordance with PAS 1192 2: 2013, BS 1192: 2007, and PAS 1192 4:2014. This certification encompasses our Asset Management, Design and Business Services, Buildings (excluding Facilities Management), and Infrastructure Projects.
        </p>
        <p className="text-slate-600 mb-4">
          We are committed to workforce development through apprenticeships, including a specialized Digital Construction Apprenticeship program. This program equips our employees with foundational BIM knowledge, preparing them for the digital demands of future projects.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#002147]">
          Supply Chain
        </h3>
        <p className="text-slate-600 mb-4">
          DHD collaborates with a diverse network of partners, ranging from SMEs and local enterprises to specialized technical providers.
        </p>
        <p className="text-slate-600 mb-4">
          Register Your Interest in Working with Us (Form) | How to Work with Us
        </p>
        <p className="text-slate-600 mb-4">
          We recognize the vital role our supply chain partners play in our success. We have cultivated a robust network of partners who share our commitment to best practices and industry-leading approaches. We welcome new businesses that meet our standards and offer the skills and innovation necessary to support our projects.
        </p>
        <p className="text-slate-600 mb-4">
          How to Work with Us (Form)
        </p>

        <h4 className="text-lg md:text-xl font-medium mb-2 text-[#003366]">
          Working Together
        </h4>
        <p className="text-slate-600 mb-4">
          DHD has earned a reputation for successfully delivering some of the world's largest, most complex, and most celebrated projects, in addition to numerous smaller-scale, yet equally important, local projects. This success is founded on the strength of our supply chain partnerships and a collaborative approach to project delivery.
        </p>
        <p className="text-slate-600 mb-4">
          We view our supply chain as an extension of DHD, integral to the successful execution of every project we undertake. We strive to build high-performing teams comprised of like-minded individuals who share our values, unwavering commitment to safety, dedication to quality, and drive for innovation.
        </p>
        <p className="text-slate-600 mb-4">
          DHD is proud to be featured in The Business Association's Best Practice Statement on partnerships between large firms and SMEs. We firmly believe that partnerships with local businesses are vital for project success and for generating tangible social value within communities.
        </p>

        <h4 className="text-lg md:text-xl font-medium mb-2 text-[#003366]">
          Finding the Right Fit
        </h4>
        <p className="text-slate-600 mb-4">
          While we seek to engage with the best in the industry, our selection criteria extends beyond size and established reputation. Over 80% of our supply chain consists of regional SMEs.
        </p>
        <p className="text-slate-600 mb-4">
          Our most successful and enduring relationships are with SMEs that combine in-depth local knowledge with specialized skills and a commitment to exceeding client expectations.
        </p>
        <img
          src={supplyChainImage}
          alt="Supply Chain Collaboration"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />

        <h4 className="text-lg md:text-xl font-medium mb-2 text-[#003366]">
          Paying Our Supply Chain
        </h4>
        <p className="text-slate-600 mb-4">
          DHD maintains open and transparent payment practices with all our supply chain partners.
        </p>
        <img
          src={paymentPracticesImage}
          alt="Payment Practices"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <p className="text-slate-600 mb-4">
          Find out more here
        </p>

        <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#002147]">
          Building for a Sustainable World
        </h3>
        <p className="text-slate-600 italic mb-4">
          "Green is a trend, sustainability is a mindset."
        </p>
        <img
          src={sustainableWorldImage}
          alt="Sustainable World"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <h4 className="text-lg md:text-xl font-medium mb-2 text-[#003366]">
          At the Core of Our Purpose
        </h4>
        <p className="text-slate-600 mb-4">
          Sustainability is at the heart of DHD's mission to deliver essential infrastructure. For over 90 years, we have served communities worldwide, and we recognize the increasing importance of sustainable practices in our operations.
        </p>
        <p className="text-slate-600 mb-4">
          Our sustainability framework, "Building for a Sustainable World," transcends short-lived trends and focuses on building upon our strong foundation of environmental protection and social value creation.
        </p>
        <p className="text-slate-600 mb-4">
          DHD views sustainability as a mindset that cultivates a resilient and purpose-driven business by safeguarding three vital pillars:
        </p>
        <ul className="list-disc list-inside text-slate-600 mb-4 pl-5">
          <li>A resilient environment</li>
          <li>A resilient community (workforce, suppliers, and customers)</li>
          <li>Resilient profits</li>
        </ul>
        <p className="text-slate-600 mb-4">
          To embed this mindset across our business, our sustainability framework prioritizes two core components: environmental sustainability and social sustainability.
        </p>
        <img
          src={sustainabilityFrameworkImage}
          alt="Sustainability Framework"
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />

        <h4 className="text-lg md:text-xl font-medium mb-2 text-[#003366]">
          Environmental Sustainability
        </h4>
        <p className="text-slate-600 mb-4">
          Our environmental sustainability initiatives address critical environmental challenges and aim to minimize our environmental footprint.
        </p>

        <h4 className="text-lg md:text-xl font-medium mb-2 text-[#003366]">
          Social Sustainability
        </h4>
        <p className="text-slate-600 mb-4">
          Social sustainability focuses on ensuring a healthy and productive workforce, a robust and ethical supplier base, and strong, long-lasting customer relationships.
        </p>
        <p className="text-slate-600 mb-4">
          All our environmental and social ambitions are detailed in the "Building for a Sustainable World" framework image to your left.
        </p>
      </section>
    </div>
  );
};

export default OurApproach;