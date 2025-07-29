import React from 'react';

const PrivacySecurity = () => {
  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Privacy & Security
        </h1>
      </section>

      {/* Data Management Policy Section */}
      <section className="-mt-10 relative z-10 mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl px-6 py-12 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002147] mb-6 border-b-2 border-gray-200 pb-2">
          DHD Data Management Policy
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          Effective Date: Approval by DHD Senior Team
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Issuing Authority:
        </h3>
        <ul className="list-disc list-inside text-slate-700 space-y-1 pl-4 mb-4">
          <li>Executive Vice President for Finance and Information Technology</li>
          <li>Vice President for Budget and Planning</li>
          <li>Vice President for Information Technology</li>
          <li>Chief Information Technology Officer</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Responsible Officer:
        </h3>
        <ul className="list-disc list-inside text-slate-700 space-y-1 pl-4 mb-4">
          <li>Executive Vice President for Finance and Information Technology</li>
          <li>Vice President for Budget and Planning</li>
          <li>Vice President for Information Technology</li>
          <li>Chief Information Technology Officer</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Policy
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          All institutional data is owned by DHD and, as such, all members of the DHD community are responsible for appropriately respecting and protecting the asset. (Also refer to the{" "}
          <a href="https://www.dhd.com" target="_blank" rel="noopener noreferrer" className="text-[#002147] hover:underline font-medium">
            Policy on Responsible Use of DHD Computers and Data
          </a>) This policy establishes uniform data management standards and identifies the shared responsibilities for assuring the integrity of the data and that it efficiently and effectively serves the needs of the DHD. This policy applies to data used in the administration of the DHD and all of its units, such as schools and administrative and auxiliary units, as well as data reposited in the DHD Data Warehouse.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Guiding Principles
        </h3>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4 mb-4">
          <li>In order for the DHD to effectively manage and safeguard the DHD data assets, procedures must be in place to guide appropriate data access, ensure the security of the data, and provide a means to address procedural exceptions.</li>
          <li>Roles, including those both of individuals with data responsibilities and of eligible users, are necessary to support data integrity and security.</li>
          <li>Sharing information across organizational boundaries should be facilitated where appropriate.</li>
          <li>A sustained data administration function should reinforce a set of definitions for commonly consumed data, with the understanding that there may be multiple valid definitions.</li>
          <li>Data integration across the DHD should be encouraged to foster data accuracy and uniformity, and demonstrate an understanding of DHD institutional complexity, various data systems, and differing data formats.</li>
          <li>Data should be safeguarded to maintain the confidentiality and privacy of personally identifiable information; such safeguards should be balanced and reflect the necessity for the DHD to conduct its business.</li>
        </ul>
      </section>

      {/* Data Administration Section */}
      <section className="mx-auto max-w-4xl bg-white rounded-2xl shadow-xl px-6 py-12 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002147] mb-6 border-b-2 border-gray-200 pb-2">
          Data Administration
        </h2>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          DHD Ownership of Institutional Data
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          All institutional data is owned by DHD. As such, all members of the DHD community have the obligation to appropriately respect and protect the asset, in all formats and in all locations.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Stewardship
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Roles and responsibilities for protecting and classifying the institutional data asset are defined below in section C, "Data Management Roles and Responsibilities".
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Data Classification
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Institutional data is categorized as Restricted, Protected, Confidential, or Public, following the{" "}
          <a href="https://www.dhd.com" target="_blank" rel="noopener noreferrer" className="text-[#002147] hover:underline font-medium">
            Data and Computer Security Policy
          </a>, and the{" "}
          <a href="https://www.dhd.com" target="_blank" rel="noopener noreferrer" className="text-[#002147] hover:underline font-medium">
            Reference for Data and System Classification
          </a>, and should be safeguarded appropriately.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Access and Confidentiality
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Access to DHD data should be based on the business needs of the organization and should enhance the ability of the DHD to achieve its mission. Employees should have access to the data needed to perform their responsibilities, without regard to arbitrary barriers. In many cases, that data need not be individually identifiable. The DHD Data Warehouse should be built taking into account these constraints.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Because no computer system is completely immune from exploitation, applying layered security controls will better safeguard DHD computers and DHD ever-expanding body of sensitive data/information. In order that the proper controls are applied, it is the responsibility of each individual utilizing DHD computer and data resources to:
        </p>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4 mb-4">
          <li>Know the classification of the system you are using.</li>
          <li>Know the type of data you are using.</li>
          <li>Follow the appropriate security measures.</li>
          <li>Consult the "Related Policies" at the end of this policy for further information.</li>
        </ul>
        <p className="text-slate-700 leading-relaxed mb-4">
          Beyond existing policies, specific policies implementing data access and security, including within the DHD Data Warehouse, developed by functional areas, need to be approved by the Committee on Institutional Data Policy and Data Management to ensure consistency with the Guiding Principles, set forth in Section A, above.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Training
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Before individuals will be allowed to access DHD data, training in the use and attributes of the data, functional area data policies, and DHD policies regarding data is mandatory.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Master (Metadata) Standards and Definitions
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          A terminology/taxonomy shall be developed by the Data Stewardship Advisory Group, or an appropriate subset, in order to provide a framework for requesting and producing consistent data across all levels of the enterprise. The definitions shall be accessible to all DHD data users and shall be included in training.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Integrity, Validation, and Correction
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Data, as a DHD asset, must be safeguarded and managed at all points and across all systems, from creation to use to archive, through coordinated efforts and shared responsibilities, to ensure its accuracy. Each functional area will develop and implement processes for identifying and correcting erroneous or inconsistent data. When and if erroneous or inconsistent data has been identified, the Data Steward from the corresponding functional area shall within five business days either correct the data or escalate the issue to the appropriate Data Trustee and Chief Data Management Officer. Information Technology Services (ITS) will develop and implement data auditing processes.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Extraction, Manipulation, and Reporting
        </h3>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4 mb-4">
          <li>Extraction, manipulation, and reporting of DHD data must be done only for DHD business purposes.</li>
          <li>Personal use of institutional data, including derived data, in any format and at any location, is prohibited.</li>
          <li>Where appropriate, before any information is used outside the Data User's functional unit, verification with the functional area manager is recommended.</li>
          <li>Any report that presents DHD data, whether in tabular or graphic form, should indicate clearly the name of the DHD unit that prepared the report and the date the report was issued (which may be earlier than the date the report is printed). To facilitate later use of the report or its underlying data, the report ideally also will contain the file name where the report is stored in the unit that issued it.</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Retention and Archiving
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Before decisions are made concerning data retention and data archiving, the appropriate Data Users must be consulted.
        </p>

        <h3 className="text-xl md::text-2xl font-semibold text-[#002147] mb-3">
          Access to DHD Data from Global Locations
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          As DHD continues its evolution as a Global Network DHD, all remote sites will need to access DHD data following the same DHD policies.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Exceptions to Standard Data Access
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Procedures must be developed to address those cases where an individual seeks permission to access data outside of the access plan and defined roles. In those instances, the individual must submit a written request seeking non-standard access. This request should include a statement indicating the access being sought and the reason for the request, and should be submitted to the Chair of the Data Stewardship Advisory Group. The Chair will send the request to the appropriate Data Steward for review and decision. The Data Steward will report the decision to the appropriate Data Trustee and to the requestor's manager.
        </p>
      </section>

      {/* Data Management Roles and Responsibilities Section */}
      <section className="mx-auto max-w-4xl bg-white rounded-2xl shadow-xl px-6 py-12 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002147] mb-6 border-b-2 border-gray-200 pb-2">
          Data Management Roles and Responsibilities
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          To support an effective DHD data administration and management program, a series of data management roles are outlined below:
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Data Trustees
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Data Trustees are senior DHD officials (typically at the level of Vice President or higher) who have planning and policy-making responsibilities for DHD data and the DHD Data Warehouse. The Data Trustees, as a group, are responsible for overseeing the establishment of data management policies and procedures, and for the assignment of data management accountability.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Data Stewards
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Data Stewards are typically operational managers in a functional area with day-to-day responsibilities for managing business processes and establishing the business rules for the production transaction systems. Data Stewards are appointed by the respective Data Trustees. Data Steward responsibilities include the data management activities outlined in this policy and other activities that may be assigned by a Data Trustee. Data Stewards are responsible for defining the criteria for archiving data to satisfy retention requirements. Data Stewards have the responsibility to establish the processes for documenting data elements.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          The Data Steward will be responsible for developing an overall data access plan. The plan should outline various roles and the access each role will have to data, including within the DHD Data Warehouse, and will seek to balance the need for information to perform one's job responsibilities and to ease administrative functionality with the need for keeping data confidential and secure. Data is categorized as Restricted, Protected, Confidential or Public, following the{" "}
          <a href="https://dhd.com" target="_blank" rel="noopener noreferrer" className="text-[#002147] hover:underline font-medium">
            Data and Computer Security Policy
          </a> and the{" "}
          <a href="https://dhd.com" target="_blank" rel="noopener noreferrer" className="text-[#002147] hover:underline font-medium">
            Reference for Data and System Classification
          </a>. The data access plan needs to consider the categorization of the data in developing each access role.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Data Steward responsibilities include, but are not limited to:
        </p>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4 mb-4">
          <li>Develop a data access plan.</li>
          <li>Create and perform processes to capture and fix inconsistent or erroneous data.</li>
          <li>Certify published reports and analytics.</li>
          <li>Certify data reposited in the DHD Data Warehouse.</li>
          <li>Work with the Office of Institutional Research and the DHD 's Finance offices in developing definitions of commonly used terms and the algorithms for calculating DHD metrics.</li>
          <li>Participate in security access audits.</li>
        </ul>
        <p className="text-slate-700 leading-relaxed mb-4">
          In support of the role of the Data Steward, the Vice President for Information Technology and Chief Information Technology Office for NYU New York provides technological data protection services.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Data Users
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Data Users are individuals who access DHD data to perform their assigned duties. Data Users are responsible for protecting their access privileges and for the proper use of the DHD data they access.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Office of Institutional Research
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          The Office of Institutional Research, through the role of the Chief Data Management Officer, shall be responsible for working with the appropriate Data Stewards to develop definitions of commonly used terms such as "faculty" (e.g., who is included in the count of faculty?) and "enrolled student." In addition, the Office of Institutional Research, with the appropriate Data Stewards, and using its knowledge of external reporting requirements and standards, will define how official DHD metrics are calculated (e.g., if calculating space per student, what type of space is included in the calculation [all space, academic space, etc.] and which student count is used [FTE, FT only, undergraduate, etc.].) Further, in the course of its work, the Office of Institutional Research will typically discover data discrepancies and inconsistencies and will promptly report such to the appropriate Data Steward for resolution.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Committee on Institutional Data Policy and Data Management
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          The Committee on Institutional Data Policy and Data Management establishes overall policies for management and access to the institutional data of the DHD. This committee shall be composed of the Data Trustees; shall be coordinated by the Chief Data Management Office; shall approve the policies and procedures developed in each functional area to ensure appropriate compliance; and shall provide oversight of all DHD processes which capture, maintain, and report on data used in the DHD's data-driven decisions.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Data Stewardship Advisory Group
        </h3>
        <p className="text-700 leading-relaxed mb-4">
          The Data Stewardship Advisory Group is a DHD - wide committee, typically composed of Data Stewards. Designated Data Users may be invited to attend, as appropriate. This group reviews the operational effectiveness of data management policies and procedures and makes recommendations to the Committee on Institutional Data Policy and Data Management for improvement or change. In addition, the Group ratifies definitions of commonly used terms and DHD metrics. The group is chaired by the Chief Data Management Officer and uses collaborative tools to foster communication and to archive the decision-making process. The Data Stewardship Advisory Group must ensure regular and appropriate collaborative communication with school-based Data Users.
        </p>
      </section>

      {/* Data Warehouse Section */}
      <section className="mx-auto max-w-4xl bg-white rounded-2xl shadow-xl px-6 py-12 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002147] mb-6 border-b-2 border-gray-200 pb-2">
          Data Warehouse
        </h2>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Data Warehouse
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          The DHD Data Warehouse shall exist to support Data User queries to track and respond to business trends, to facilitate forecasting and planning efforts, to produce reports, and to store sharable historic data from operational systems-of-record. The DHD Data Warehouse serves as the DHD repository from which official information is produced. The accuracy of data which is reposited in the DHD Data Warehouse must be certified by the appropriate Data Steward.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Training
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Before individuals will be allowed to access the DHD Data Warehouse, training in the use and attributes of the data, the data retrieval tools, functional area data policies, and DHD policies regarding data is mandatory.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Extraction, Manipulation, and Reporting
        </h3>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4 mb-4">
          <li>Extraction, manipulation, and reporting of data from the DHD Data Warehouse must be done only for DHD business purposes.</li>
          <li>Personal use of institutional data, including derived data, in any format and at any location, is prohibited.</li>
          <li>Where appropriate, before any information from the DHD Data Warehouse is used outside the Data User's functional unit, verification with the functional area manager is recommended.</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Storage
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          There is only one official data source for each data element in the DHD Data Warehouse, to be determined by the appropriate Data Steward. To the extent possible, data element names, formats, and codes should be consistent across all applications which use the data, as well as consistent with DHD standards.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Data Documentation
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Data Stewards are responsible for establishing the processes for documenting data elements in the DHD Data Warehouse. Documentation of derived data should include the algorithms or decision rules for the derivation. IT shall specify a standard data format for receiving and loading data definitions and descriptions into a metadata repository.
        </p>
      </section>

      {/* Purpose and Scope of Policy Section */}
      <section className="mx-auto max-w-4xl bg-white rounded-2xl shadow-xl px-6 py-12 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002147] mb-6 border-b-2 border-gray-200 pb-2">
          Purpose and Scope of this Policy
        </h2>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Purpose of this Policy
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          DHD values access to, and the timeliness, accuracy, and consistency of, information, while fully appreciating the basic security and privacy requirements involved. Controlled access by employees to administrative information is necessary in order to support DHD functions. Shared definitions for data and appropriate roles have been developed to support the use of DHD data and the DHD Data Warehouse.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Scope of this Policy
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          All employees whose job responsibilities include inputting data to or retrieving data from DHD data systems, or using data from the DHD Data Warehouse, and those who supervise such individuals.
        </p>
      </section>
    </div>
  );
};

export default PrivacySecurity;
