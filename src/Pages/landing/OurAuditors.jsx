// src/pages/OurAuditors.jsx
import React from "react";
import usePageTitle from "../hooks/usePageTitle";
import InfoSection from "../components/InfoSection";

// Sample image - replace with your actual image path
const images = {
  auditors: "https://picsum.photos/seed/dhd-auditors/800/600",
};

const OurAuditors = () => {
  usePageTitle("Our Auditors");

  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Our Auditors
        </h1>
      </section>

      {/* Intro Section */}
      <section className="-mt-10 relative z-10 mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl text-center px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Ensuring <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">Independence and Integrity</span>
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto">
          DHD maintains rigorous policies to ensure the independence and objectivity of our external auditors.
        </p>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <InfoSection
          title="Introduction to Our Auditor Policy"
          imageSrc={images.auditors}
          alt="Our Auditors"
        >
          <p>
            This Policy is supplementary to and should be interpreted in conjunction with the Audit Committee Charter of DHD. This Policy is established to ensure the independence of DHD’s external auditor, both in fact and in appearance. If the Auditor is not a reasonable and objective person with knowledge of all relevant facts and circumstances then the Auditor is not, capable of exercising objective and impartial judgment on all issues encompassed.
          </p>
          <p>
            Utilizing this Policy, DHD wishes to avoid the Auditor providing services that amongst others:
          </p>
          <ul className="list-disc list-inside text-gray-600 ml-4 space-y-1">
            <li>create mutual or conflicting interests between the Auditor and DHD</li>
            <li>place the Auditor in the position of auditing its work</li>
            <li>result in the Auditor functioning in the role of management or employee of DHD</li>
            <li>place the Auditor in the position of serving in an advocacy role for DHD.</li>
          </ul>
          <p className="mt-4">
            Appendix A includes some definitions used in this Policy and Appendix B contains more detailed information regarding certain, more technical items of this Policy.
          </p>
        </InfoSection>

        {/* Scope and Permitted Services */}
        <section className="bg-white shadow-lg rounded-xl mb-12 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6 text-center">
            Scope and Permitted Services
          </h2>
          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Scope</h3>
              <p>
                This Policy applies to DHD and all its Affiliates. This Policy describes minimum requirements within DHD. Local requirements should be applied in case they are stricter than the requirements as outlined in this Policy. This Policy is intended to satisfy the requirements of applicable India laws and regulations including, the India Corporate Governance Code as amended or updated from time to time, the auditor independence rules of the ROC, SEBI, RBI.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Permitted Services</h3>
              <p>
                The Auditor can only provide DHD services included in Appendices C and D. The only exception to this rule is the services listed below - permitted under chapter specifically or otherwise pre-approved by the audit committee of DHD having to observe applicable laws and regulations regarding auditor independence.
              </p>
              <h4 className="text-xl font-medium text-gray-700 mt-4 mb-2">Services for joint ventures and Investment Funds and/or similar Investment Vehicles</h4>
              <p>
                For DHD’s joint ventures that are part of DHD and for Investment Funds that are part of DHD, Services listed in Appendices C and D have been approved by the Audit Committee. The services which are not listed require special approval from the audit committee. Where relevant, the Auditor shall ask for pre-approval of that audit committee. Services listed in Appendix E are prohibited.
              </p>
            </div>
          </div>
        </section>

        {/* Audit Committee Pre-Approval Procedure */}
        <section className="bg-white shadow-lg rounded-xl mb-12 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6 text-center">
            Audit Committee Pre-Approval Procedure
          </h2>
          <div className="space-y-6 text-gray-600">
            <p>
              The Audit Committee is required to (pre-)approve the engagement for audit, audit-related and any other services of the Auditor by or any of its subsidiaries in order to assure that the performance of such services would not impair the Auditors’ independence from DHD. The Audit Committee will consider all services, either generally or individually pre-approved. The Audit Committee is also mindful of the proportion of aggregate fees for audit, audit-related and other services in deciding whether to approve such services.
            </p>
            <p>
              Appendices C and D to this Policy describe the services per type that have been generally pre-approved by the Audit Committee. The audit committee shall:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Pre-approve the types of services as listed in Appendices C and D at a subsequent date.</li>
              <li>Pre-approve the budget for each category of service.</li>
              <li>Specific pre-approval for the services exceeding the budgeted amount.</li>
              <li>Individually pre-approve the services included in the general pre-approved lists as outlined in the Appendices.</li>
            </ul>
            <p>
              For services that have to be individually pre-approved by the Audit Committee, the Group Controller of DHD will advise. DHD’s CFO may revise the lists of pre-approved services from time to time, based on subsequent determinations or changes in the requirements of applicable laws and regulations.
            </p>
          </div>
        </section>

        {/* Monitoring of services and fees billed */}
        <section className="bg-white shadow-lg rounded-xl mb-12 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6 text-center">
            Monitoring of Services and Fees Billed
          </h2>
          <div className="space-y-6 text-gray-600">
            <p>
              The Auditor will provide the Audit Committee with a full overview of all services provided to DHD, including related fees and supported by sufficiently detailed information. This overview will be evaluated every second and fourth quarter by the Audit Committee. Throughout the year, the Auditor and DHD Finance will monitor the realization of the pre-approved budgeted amounts. Unused amounts in pre-approved budgets will not be carried forward to the next financial year. Following its Charter, the Audit Committee shall annually evaluate the performance of the Auditor, the scope of the audit(s) to be performed, and the independence of the Auditor, including considering whether the Auditors’ quality controls are adequate. DHD is required to adhere to the fee cap for non-audit services. This fee cap is limited to 70% of the average of the fees paid in the last three consecutive financial years for the audit. Group Finance is mandated to monitor all fees billed from DHD’s external auditor, provided that Group Finance’s monitoring of all fees billed from DHD’s external auditor shall not relieve the Audit Committee of its direct responsibilities relating to the compensation, retention and oversight of DHD’s external auditors.
            </p>
          </div>
        </section>

        {/* Appointment of the Auditor */}
        <section className="bg-white shadow-lg rounded-xl mb-12 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6 text-center">
            Appointment of the Auditor
          </h2>
          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Appointment</h3>
              <p>
                The Audit Committee shall make recommendations to the Supervisory Board regarding the appointment, reappointment, performance, functioning, dismissal and the remuneration of the Auditor of DHD. The Supervisory Board shall discuss such recommendations every four years, or more often when appropriate. Inform the General Shareholders’ Meeting of DHD as to the main conclusions regarding the nomination and the outcome of the selection process of the Auditor. As a basis for the appointment, the Audit Committee shall conduct a thorough assessment of the functioning of the Auditor within DHD and of the different capacities in which the Auditor acts.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Audit Partner Rotation</h3>
              <p>
                After providing audit services to DHD for a maximum period of <strong>five consecutive years</strong>, the lead audit partner and the reviewing audit partner shall be replaced by another partner of the Auditor and observe a five-year time-out period. The Audit Committee shall make recommendations to the Supervisory Board regarding this replacement. After providing services to DHD for a maximum period of <strong>seven consecutive years</strong> a time-out period of at least three years is required for:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>An audit engagement team partner who provided more than ten hours of audit, review or attest services in connection with the consolidated financial statements.</li>
                <li>An audit partner who is in charge of any essential task about the execution of the audit of the annual accounts or review of interim accounts including, the audit or review of the financial statements of a subsidiary of DHD whose assets or total revenues constitute 20% or more of DHD’s respective consolidated assets or revenues.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Audit Firm Rotation</h3>
              <p>
                The Auditor shall (fully cooperate for DHD to be able to) comply with mandatory audit firm rotation obligations according to India law and any other applicable law or regulation requiring audit firm rotation.
              </p>
            </div>
          </div>
        </section>

        {/* Responsibility of the Auditor */}
        <section className="bg-white shadow-lg rounded-xl mb-12 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6 text-center">
            Responsibility of the Auditor
          </h2>
          <div className="space-y-6 text-gray-600">
            <p>
              The Auditor has to maintain a quality control system compliant with the SEC’s, EU and India auditor independence rules, that ensures that the independence of the firm, its partners, all employees and associated entities participating in the engagement will not be impaired.
            </p>
            <p>
              To support the independence process, the Auditor is required to, prior to accepting its initial engagement and thereafter at least annually in the cases of items 1 to 3:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Disclose to the Audit Committee in writing all relationships between the Auditor or any affiliates of the Auditor and DHD or persons in financial reporting oversight roles at DHD, or persons associated with DHD in a decision-making capacity, such as DHD’s officers, directors or substantial shareholders, that, in the Auditors’ professional judgment, may reasonably be thought to bear on independence.</li>
              <li>Discuss with the Audit Committee the potential effects of the relationships described in (1) above on the independence of the Auditor and document the substance of such discussion.</li>
              <li>Confirm in writing that, in the Auditors’ professional judgment, they are independent of DHD within the meaning of the applicable laws and regulations.</li>
              <li>Confirm in engagement letters that performance of the work will not impair independence.</li>
              <li>Satisfy the Audit Committee that the Auditor has in place comprehensive written internal policies and procedures to ensure adherence, worldwide, to the DHD Policy on External Auditors Independence and other independent requirements, including robust monitoring and communications.</li>
              <li>Provide regular communication and confirmation to the Audit Committee on independence.</li>
              <li>Utilize the assigned tracking numbers and type of service in all fee billings and correspondence.</li>
              <li>Maintain registration and good standing with the PCAOB and any other relevant accounting regulatory body.</li>
              <li>Review their partner rotation plan.</li>
              <li>Correct any deficiency in the independence of any partner or employee as promptly as possible after becoming aware thereof.</li>
            </ul>
          </div>
        </section>

        {/* A further responsibility of the Audit Committee */}
        <section className="bg-white shadow-lg rounded-xl mb-12 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6 text-center">
            A Further Responsibility of the Audit Committee
          </h2>
          <div className="space-y-6 text-gray-600">
            <p>
              Nothing in this Policy shall be interpreted as a delegation to the management of the Audit Committee’s responsibilities under applicable laws and regulations. The Audit Committee shall review and reassess the adequacy of this Policy on an annual basis.
            </p>
          </div>
        </section>

        {/* Hiring by DHD of employees from the Auditor and vice versa */}
        <section className="bg-white shadow-lg rounded-xl mb-12 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6 text-center">
            Hiring by DHD of Employees from the Auditor and Vice Versa
          </h2>
          <div className="space-y-6 text-gray-600">
            <p>
              To maintain the independence of the Auditor and to prevent a potential conflict of interest, DHD will not, at any time during the audit and professional engagement period for DHD, hire at any level any current partner, principal, shareholder or professional employee of the Auditor.
            </p>
            <p>
              Moreover, DHD will not, at any time during the audit and professional engagement period for DHD, hire in a financial reporting oversight role or accounting role, any person who has meaningful (financial) ties, capital balances or financial arrangements with the Auditor and close family members of certain partners, principals, shareholders or professional employees of the Auditor.
            </p>
            <h4 className="text-xl font-medium text-gray-700 mt-4 mb-2">Exception Procedure</h4>
            <p>
              In exceptional circumstances hiring of persons falling under the above definitions including the exceptions in Appendix B.2 is possible subject to Audit Committee approval following applicable laws and regulations. Approval should be requested through the DHD Auditor Independence Desk and is subject to pre-approval from the Group Controller. All other persons that do not fall under the above definitions can be hired by DHD without approval under this policy.
            </p>
            <p>
              The Auditor will not hire or associate with any former director, officer or employee of DHD, whether in such individual’s capacity as a partner, principal, shareholder or professional employee of the Auditor, unless such individual does not participate in, and is not in a position to influence, the audit of the financial statements of DHD during two years or covering any period during which he or she was employed by or associated with DHD, whichever is longer.
            </p>
          </div>
        </section>

        {/* Effective Date and Grandfathering */}
        <section className="bg-white shadow-lg rounded-xl mb-12 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6 text-center">
            Effective Date and Grandfathering
          </h2>
          <div className="space-y-6 text-gray-600">
            <p>
              This Policy was approved by the Audit Committee on 3 November 2020 and adopted by the Supervisory Board on 3 November 2020. This new version of the Policy is effective as of 1 January 2021 and replaces the version effective from 1 January 2020.
            </p>
            <p>
              Provided the services were pre-approved under the pre-existing versions of the DHD Policy on External Auditor Independence, the existence of the services on 1 July 2021 will not be deemed to impair the Auditors’ independence and engagements for services entered under the pre-existing policy and in progress on 1 July 2021 will be grandfathered, when they are permitted under the current Policy.
            </p>
            <p>
              This Policy will be published on the intranet and the internet site of DHD and will be communicated to DHD senior management. For further clarification and assistance for the implementation of this Policy, the Group Controller of DHD contacted.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default OurAuditors;