// src/pages/OurRiskDepartment.jsx
import React from "react";
import InfoSection from "./InfoSection";
// Sample images - replace with your actual image paths
const images = {
  riskDepartment: "https://picsum.photos/seed/dhd-risk-department/800/600",
  covidRisk: "https://picsum.photos/seed/dhd-covid-risk/800/600",
};

const OurRiskDepartment = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Our Risk Department
        </h1>
      </section>

      {/* Intro Section */}
      <section className="-mt-10 relative z-10 mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl text-center px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Navigating Challenges with{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Robust Risk Management
          </span>
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto">
          DHD's comprehensive risk management framework ensures the resilience
          and sustainability of our operations.
        </p>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <InfoSection
          title="Supervisory Board Charter: Charter of the Risk Committee"
          imageSrc={images.riskDepartment}
          alt="Our Risk Department"
        >
          <p>
            This Charter has been drawn up in accordance with Act 2013 and with
            company article of the articles of association of DHD. This Charter
            is:
          </p>
          <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
            <li>
              Complementary to the provisions related to the Supervisory Board
              and the Supervisory Board members as contained in applicable
              legislation, regulations and the Articles of Association.
            </li>
            <li>
              Complementary to the rules concerning the relationship between the
              Management Board and the Supervisory Board.
            </li>
            <li>
              Inconsistent with mandatory laws and regulations or the Articles
              of Association.
            </li>
          </ul>
          <p className="mt-4">
            The verb “supervise” where used in the Charter includes the
            following meanings: oversee, monitor, constructively challenge,
            scrutinize and discuss. Subject to applicable laws and regulations,
            the Supervisory Board may occasionally decide at its sole discretion
            not to comply with this Charter. This Charter is posted on the
            Company's website.
          </p>
        </InfoSection>

        {/* Responsibilities of the Risk Committee */}
        <section className="bg-white shadow-lg rounded-xl mb-12 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6 text-center">
            Responsibilities of the Risk Committee
          </h2>
          <p className="text-slate-600 mb-6">
            The Risk Committee shall assist the Supervisory Board with the
            performance of its duties in relation to overseeing (i) the setting
            and monitoring of the Company’s risk appetite and risk strategy for
            all types of risk including but not limited to financial and
            non-financial risk, (ii) the effectiveness of the internal risk
            management and control systems and (iii) other related risk
            management topics. The Risk Committee shall prepare the discussions
            within and decisions of the Supervisory Board on such matters.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Timely before the relevant Supervisory Board meeting is to be held,
            the Risk Committee shall:
          </h3>
          <ul className="list-disc list-inside text-gray-600 ml-4 space-y-2">
            <li>
              Advise and assist the Supervisory Board regarding supervising
              overall actual and future risk appetite and risk strategy
              (including the risk management frameworks and the methodologies
              used in establishing the risk appetite of the Company and its
              Group Companies), taking into account all types of risks, to
              ensure that they are in line with the business strategy,
              objectives, corporate culture and values of the Company; with
              respect to the risk appetite at least annually and upon any
              material change;
            </li>
            <li>
              Oversee the strategies for all types of risk both financial and
              non-financial including but not limited to capital and liquidity
              management, market, credit, compliance, operational (such as legal
              and IT), conduct and reputational risks, in order to assess their
              adequacy against the approved risk appetite and strategy;
            </li>
            <li>
              Assist the Supervisory Board in overseeing the implementation of
              the risk strategy and the corresponding limits set;
            </li>
            <li>
              Collaborate with and take into account the findings of the Audit
              Committee and any material recommendations from CAS or the
              External Auditor with respect to the foregoing under Policy a, b
              and c above;
            </li>
            <li>
              Make recommendations to the Supervisory Board on necessary
              adjustments to the risk strategy and risk appetite resulting from
              changes in the business model of the Company and legal, regulatory
              and market developments (taking into account the social,
              macroeconomic and financial environment and the status of the
              business cycle), or recommendations made by the risk management
              function;
            </li>
            <li>
              Assess and make recommendations to the Supervisory Board regarding
              the effectiveness of the design, implementation, operation and
              maintenance of the internal risk management and control systems
              (which also includes the resourcing of the risk management
              function) at least annually but in any event upon a material
              change thereof;
            </li>
            <li>
              Oversee the alignment between the Company’s material financial
              products, financial services, liabilities and assets offered to
              clients and the business model and risk strategy;
            </li>
            <li>
              Assess the risks associated with the Company’s offered financial
              products, financial services, liabilities and assets, taking into
              account the alignment between the prices assigned to and the
              profits gained from those products, services, liabilities and
              assets;
            </li>
            <li>
              Assess remedy plan i. WITH REGARD TO AP GROUP l DHD., assess the
              remedy plan of the Management Board in case prices do not properly
              reflect risks in accordance with the business model and risk
              strategy;
            </li>
            <li>
              Review a number of possible scenarios, including stressed
              scenarios, to assess how the institution’s risk profile would
              react to external and internal events;
            </li>
            <li>
              Assess, without prejudice to the tasks of the Remuneration
              Committee and in close collaboration with the Remuneration
              Committee:
              <ul className="list-circle list-inside ml-6 mt-1 space-y-1">
                <li>
                  the remuneration policies, which include among others the
                  remuneration policies for the Supervisory Board and Management
                  Board and the AP Remuneration Regulations Framework, so that
                  they are consistent with and promote sound and effective risk
                  management, at least annually; and
                </li>
                <li>
                  key remuneration processes and operational decisions on an ad
                  hoc basis, including assessing whether incentives provided by
                  the remuneration policies and procedures (i) take into
                  consideration risk, capital, liquidity and the likelihood and
                  timing of earnings and (ii) are aligned with business
                  strategy, objectives, corporate culture and values and the
                  long-term interests of the Company and its Subsidiaries.
                </li>
              </ul>
            </li>
            <li>
              WITH REGARD TO AP GROEP N.V., (i) discuss the methods used to
              assess the effectiveness of the design and operation of the
              internal risk management and control systems with the Management
              Board and (ii) assess material risks and uncertainties included in
              the Executive Board report;
            </li>
            <li>
              Assess and recommend any actions to be taken by the Supervisory
              Board regarding the financing of the Company and its Subsidiaries
              from a risk and risk management point of view;
            </li>
            <li>
              Assess and recommend any actions to be taken by the Supervisory
              Board regarding the Company’s public disclosures on risk and risk
              management;
            </li>
            <li>
              Advise the Supervisory Board regarding the appointment of external
              consultants that the Supervisory Board may decide to engage for
              advice or support; and
            </li>
            <li>
              Assess and recommend any actions to be taken by the Supervisory
              Board regarding any other related tasks as the Supervisory Board
              may assign to the Risk Committee on an ad-hoc basis.
            </li>
          </ul>
          <p className="mt-4">
            The Risk Committee shall advise the Supervisory Board with respect
            to Key Policies of the Company and its Group Companies regarding
            compliance with applicable law, regulations and recognized industry
            codes and standards related to risk and risk management, with the
            exception of those applicable to among others financial reporting
            and the financial reporting process.
          </p>
        </section>

        {/* Resources RiCo */}
        <section className="bg-white shadow-lg rounded-xl mb-12 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6 text-center">
            Risk Committee Resources
          </h2>
          <div className="space-y-6 text-gray-600">
            <p>
              In the performance of its tasks, the Risk Committee is authorised
              to gather information or seek advice from the Management Board,
              the Company’s staff departments and/or external advisors;
            </p>
            <p>
              The Risk Committee shall receive regular reports, ad hoc
              information, communications and opinions from the heads of
              internal control functions concerning the current risk profile of
              the Company, its risk culture and its risk limits, as well as on
              any material breaches that may have occurred, with detailed
              information on and recommendations for corrective measures taken,
              to be taken or suggested to address them;
            </p>
            <p>
              The Risk Committee shall periodically review and decide on the
              content, format and frequency of the information on risk to be
              reported to them.
            </p>
          </div>
        </section>

        {/* Review of Charter */}
        <section className="bg-white shadow-lg rounded-xl mb-12 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6 text-center">
            Review of Charter
          </h2>
          <div className="space-y-6 text-gray-600">
            <p>
              The Risk Committee shall annually review and assess the adequacy
              of this Charter and the content, format and frequency of the
              information on risk to be reported to them.
            </p>
          </div>
        </section>

        {/* Reporting Responsibilities */}
        <section className="bg-white shadow-lg rounded-xl mb-12 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6 text-center">
            Reporting Responsibilities
          </h2>
          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Minutes of Meeting
              </h3>
              <p>
                Minutes of meetings of the Risk Committee shall be sent to the
                members of the Risk Committee, as well as – unless this is
                undesired for privacy reasons – to the Supervisory Board and the
                Management Board. The chairperson of the Risk Committee shall
                report orally on its most recent findings in the next meeting of
                the Supervisory Board.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Communication of Findings RiCo - AC
              </h3>
              <p>
                The chairperson of the Risk Committee shall communicate the
                Committee’s findings with respect to the internal risk
                management and control systems (Policy item f of this Charter)
                to the Audit Committee.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Communication of Findings RiCo - SB
              </h3>
              <p>
                The Risk Committee reports to the Supervisory Board its most
                important findings with respect Policy item l of this Charter.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Secretary
              </h3>
              <p>
                The Company shall make a secretary available to the Risk
                Committee, who, among other things, will take minutes of the
                meetings.
              </p>
            </div>
          </div>
        </section>

        {/* Meetings */}
        <section className="bg-white shadow-lg rounded-xl mb-12 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6 text-center">
            Meetings
          </h2>
          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Meetings RiCo at least 4 times a year
              </h3>
              <p>
                The Risk Committee shall meet as often as it determines, but at
                least four times a year. Meetings can also take place when the
                chairperson of the Risk Committee deems it necessary or upon
                request of the Supervisory Board or the CEO. No resolutions may
                be passed if the majority of the Risk Committee members then in
                office, other than those who have a conflict of interest, is not
                present or represented.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Attendance of MB/SB members and other officers
              </h3>
              <p>
                To the extent that the Risk Committee does not determine
                otherwise, the following other Supervisory Board members,
                Management Board members and officers of the Company will attend
                the meetings of the Risk Committee:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  the chairperson of the Audit Committee, if not being the
                  chairperson or a member of the Risk Committee;
                </li>
                <li>a member of the Remuneration Committee;</li>
                <li>the CEO, the CFO, the CRO;</li>
                <li>
                  With regard to AP Group l DHD the COO/CTO, the business
                  leaders of Market Leaders, Challenger & Growth Countries and
                  Wholesale industry who can contribute to discussion on topics,
                  as determined by the chairperson of the Risk Committee;
                </li>
                <li>the Chief Compliance Officer;</li>
                <li>the General Manager CAS and External Auditor;</li>
                <li>the head of Non Financial Risk;</li>
                <li>the General Counsel; and</li>
                <li>the head of Risk & Capital Integration.</li>
              </ul>
              <p className="mt-2">
                The Risk Committee may invite other members of the Supervisory
                Board, and any other staff member who can contribute to the
                discussion.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Direct access CCO to RiCo, bilateral consultation
              </h3>
              <p>
                The Chief Compliance Officer shall have direct access to the
                Risk Committee and the chairperson of the Risk Committee shall
                have periodic bilateral consultation with the Chief Compliance
                Officer.
              </p>
            </div>
          </div>
        </section>

        {/* Composition */}
        <section className="bg-white shadow-lg rounded-xl mb-12 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6 text-center">
            Composition
          </h2>
          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Composition RiCo
              </h3>
              <p>
                The composition of the Risk Committee shall be in such a way so
                as to make sure that relevant business know-how and adequate
                understanding of risk management related issues and control
                management, relating to the activities of the Company and its
                Group Companies is available and shall otherwise be in
                accordance with the requirements for the composition of
                Committees (Policy 3 of the Supervisory Board Charter).
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                At least 3 members, independency requirements
              </h3>
              <p>
                The Risk Committee shall be comprised of at least three members,
                of which no more than one member may be not Independent; such a
                member however, may not be appointed chairperson. The
                chairperson of the Risk Committee cannot be the chairperson of
                the Supervisory Board or any of its other committees.
              </p>
            </div>
          </div>
        </section>

        {/* COVID-19 Secure Risk Assessment */}
        <section className="bg-white shadow-lg rounded-xl mb-12 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6 text-center">
            COVID-19 Secure Risk Assessment
          </h2>
          <div className="flex flex-col md:flex-row items-start gap-6">
            <img
              src={images.covidRisk}
              alt="COVID-19 Risk Assessment"
              className="w-full md:w-1/3 rounded-lg object-cover"
            />
            <div className="flex-1 text-gray-600 space-y-2">
              <p>
                This COVID-19 Secure Risk Assessment has been published in
                accordance with the requirements of the Government guidelines,
                Working Safely During Coronavirus (COVID-19), published 11th May
                2020, and updated as appropriate following subsequent revisions
                to those guidelines.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurRiskDepartment;
