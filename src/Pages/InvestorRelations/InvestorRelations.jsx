import React from "react";
import usePageTitle from "../../hooks/usePageTitle";

const InvestorRelations = () => {
  usePageTitle("Investor Relations");
  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Investor Relations
        </h1>
      </section>

      {/* Transparency and Accessibility Section */}
      <section className="-mt-10 relative z-10 mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl px-6 py-12 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002147] mb-6 border-b-2 border-gray-200 pb-2">
          Transparency and Accessibility
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          DHD plc maintains transparent and accessible communication with its
          investors. Our registrar, Link AP Group, provides comprehensive
          investor relations services and support. For all inquiries related to
          shareholdings, dividends, or administrative matters, please visit the{" "}
          <a
            href="https://www.linkgroup.eu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#002147] hover:underline font-medium"
          >
            Link AP Group website
          </a>
          . Their dedicated investor relations team is available to assist you
          with a wide range of services, including:
        </p>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4">
          <li>
            <span className="font-semibold">Online Account Management:</span>{" "}
            Access your investment portfolio, update personal information, and
            manage your shareholdings online.
          </li>
          <li>
            <span className="font-semibold">Dividend Information:</span> Stay
            informed about dividend payments, important dates, and reinvestment
            options.
          </li>
          <li>
            <span className="font-semibold">Shareholder Communications:</span>{" "}
            Receive timely updates on company performance, annual reports, and
            shareholder meetings.
          </li>
          <li>
            <span className="font-semibold">General Inquiries:</span> Contact
            Link AP Group for assistance with any administrative or
            investor-related questions.
          </li>
        </ul>
      </section>

      {/* Construction Partnerships Section */}
      <section className="mx-auto max-w-4xl bg-white rounded-2xl shadow-xl px-6 py-12 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002147] mb-6 border-b-2 border-gray-200 pb-2">
          Construction Partnerships: Delivering Excellence Through Collaboration
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          DHD offers comprehensive construction partnership solutions tailored
          to the unique needs of each project. We believe in fostering
          collaborative relationships with our clients, ensuring transparency,
          trust, and shared success. Our key strengths include:
        </p>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4 mb-6">
          <li>
            <span className="font-semibold">
              Integrated Project Management:
            </span>{" "}
            We provide end-to-end project management services, from initial
            planning and design to construction, commissioning, and final
            handover.
          </li>
          <li>
            <span className="font-semibold">
              Optimized Scheduling and Resource Allocation:
            </span>{" "}
            Our experienced team meticulously plans and coordinates all project
            phases, ensuring efficient resource allocation and timely execution.
          </li>
          <li>
            <span className="font-semibold">
              Stringent Quality Control and Assurance:
            </span>{" "}
            We adhere to rigorous quality standards throughout the construction
            process, ensuring that every project meets the highest industry
            benchmarks.
          </li>
          <li>
            <span className="font-semibold">Proactive Risk Management:</span> We
            identify and mitigate potential risks throughout the project
            lifecycle, minimizing disruptions and ensuring smooth progress.
          </li>
          <li>
            <span className="font-semibold">
              Value Engineering and Cost Optimization:
            </span>{" "}
            We continuously seek opportunities to optimize design and
            construction methods, delivering cost-effective solutions without
            compromising quality or functionality.
          </li>
        </ul>
        <p className="text-slate-700 leading-relaxed mb-6">
          Partnering with DHD ensures a collaborative approach, meticulous
          execution, and a commitment to exceeding expectations.
        </p>
        {/* Image: Handshake */}
        <div className="text-center">
          <img
            src="https://placehold.co/600x300/E0E0E0/333333?text=Handshake+Symbolizing+Collaboration"
            alt="A handshake between two business partners, symbolizing collaboration and trust."
            className="w-full max-w-md mx-auto rounded-md shadow-lg"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/600x300/E0E0E0/333333?text=Image+Not+Available";
            }}
          />
          <p className="text-sm text-slate-500 mt-2">
            Image: A handshake between two business partners, symbolizing
            collaboration and trust.
          </p>
        </div>
      </section>

      {/* Strategic Alliances & Joint Ventures Section */}
      <section className="mx-auto max-w-4xl bg-white rounded-2xl shadow-xl px-6 py-12 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002147] mb-6 border-b-2 border-gray-200 pb-2">
          Strategic Alliances & Joint Ventures: Expanding Horizons Through
          Partnerships
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          DHD, with the strong backing of the Asia Pacific Group of Company (AP
          Group), actively seeks strategic alliances and joint ventures to
          expand our development portfolio and create new opportunities for
          growth. We believe that collaboration is key to unlocking innovative
          solutions and achieving shared success. Our partnership focus areas
          include:
        </p>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4">
          <li>
            <span className="font-semibold">Large-Scale Developments:</span>{" "}
            Partnering with established developers and investors to undertake
            ambitious projects that transform urban landscapes.
          </li>
          <li>
            <span className="font-semibold">Specialized Developments:</span>{" "}
            Collaborating with experts in specific sectors, such as senior
            living, hospitality, or sustainable development, to create
            innovative and market-leading projects.
          </li>
          <li>
            <span className="font-semibold">International Expansion:</span>{" "}
            Forging strategic alliances with international partners to extend
            our reach and expertise into new markets.
          </li>
        </ul>
      </section>

      {/* About the Asia Pacific Group Section */}
      <section className="mx-auto max-w-4xl bg-white rounded-2xl shadow-xl px-6 py-12 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002147] mb-6 border-b-2 border-gray-200 pb-2">
          About the Asia Pacific Group: A Legacy of Leadership and Innovation
        </h2>
        {/* Image: AP Group logo */}
        <div className="text-center mb-6">
          <img
            src="https://placehold.co/200x100/E0E0E0/333333?text=AP+Group+Logo"
            alt="AP Group logo"
            className="mx-auto rounded-md shadow-sm"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/200x100/E0E0E0/333333?text=Image+Not+Available";
            }}
          />
          <p className="text-sm text-slate-500 mt-2">Image: AP Group logo</p>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-4">
          Asia Pacific Group: Driving Economic Growth and Social Impact
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          The Asia Pacific Group of company (APGC) is a leading association of
          chief executive officers and executive management teams from major
          U.S. companies. We are dedicated to promoting responsible public
          policy and fostering a thriving U.S. economy that benefits businesses,
          communities, and individuals.
        </p>

        <h4 className="text-lg md:text-xl font-semibold text-[#002147] mb-3">
          Our Impact
        </h4>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4 mb-4">
          <li>
            <span className="font-semibold">Economic Leadership:</span> APGC
            member companies represent $7 trillion in annual revenues and employ
            nearly 1 million people, driving significant economic activity and
            job creation.
          </li>
          <li>
            <span className="font-semibold">Shareholder Value:</span> Our
            companies distribute over $222 billion in dividends to shareholders
            annually, generating strong returns on investment.
          </li>
          <li>
            <span className="font-semibold">
              Supporting Small and Medium-Sized Businesses:
            </span>{" "}
            APGC members facilitate over $495 billion in sales for small and
            medium-sized businesses each year, fostering entrepreneurship and
            economic growth across diverse sectors.
          </li>
          <li>
            <span className="font-semibold">Community Engagement:</span> APGC
            companies contribute more than $8 billion annually to charitable
            causes, demonstrating a strong commitment to social responsibility
            and community development.
          </li>
        </ul>

        <h4 className="text-lg md:text-xl font-semibold text-[#002147] mb-3">
          Our Expertise
        </h4>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4 mb-4">
          <li>
            <span className="font-semibold">Wealth Management:</span> APG has an
            international reputation for providing high-quality wealth
            management solutions, helping individuals and institutions achieve
            their financial goals.
          </li>
          <li>
            <span className="font-semibold">
              Collaboration and Best Practices:
            </span>{" "}
            We partner with businesses, industries, and communities to promote
            the sharing of best practices and collaborative working, fostering
            innovation and growth across the Asia Pacific region.
          </li>
          <li>
            <span className="font-semibold">Policy Advocacy:</span> APGC applies
            its expertise and experience to address major policy issues,
            advocating for policies that improve U.S. competitiveness,
            strengthen the economy, and create jobs.
          </li>
        </ul>

        <h4 className="text-lg md:text-xl font-semibold text-[#002147] mb-3">
          Our History
        </h4>
        <p className="text-slate-700 leading-relaxed">
          Established in 1999, APG has a long history of leadership and impact
          in the Asia Pacific region. We are committed to driving economic
          growth, promoting social progress, and creating a more prosperous
          future for all.
        </p>
      </section>
    </div>
  );
};

export default InvestorRelations;
