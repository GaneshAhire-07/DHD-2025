import usePageTitle from "../../hooks/usePageTitle";
import InfoSection from "../landing/InfoSection";
import supervisorBoard from "../../assets/supervisorBoard.jpg";
import corporateGovernance from "../../assets/image01.jpg";
import boardCommittees from "../../assets/board.jpg";

const images = {
  supervisorBoard: supervisorBoard,
  corporateGovernance: corporateGovernance,
  boardCommittees: boardCommittees,
};

const Governance = () => {
  usePageTitle("Governance");

  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Corporate Governance
        </h1>
      </section>

      {/* Intro Section */}
      <section className="-mt-10 relative z-10 mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl text-center px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Our Framework for{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
            Ethical Leadership
          </span>
        </h2>
        <p className="text-slate-500 max-w-xl mx-auto">
          DHD is committed to the highest standards of corporate governance,
          ensuring transparency, accountability, and effective decision-making.
        </p>
      </section>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
        <InfoSection
          title="Corporate Governance"
          imageSrc={images.corporateGovernance}
          alt="Corporate Governance"
        >
          <p>
            DHD is governed by a Board of Directors which is made up of both
            Executive and Non Executive Directors. The independent Non-executive
            directors help to bring impartiality into the decision making
            process (the term Non Executive director refers to those members of
            the Board who are not part of the employed management team but who
            provide a range of skills and experience to the Board).
          </p>
          <p>
            There is a clear division of responsibility between the running of
            the Board (the Chairman’s role) and leading the Executive team
            responsible for the running of the Society’s business (the Chief
            Executive’s role). This helps to ensure that no one individual has
            unfettered powers of decision-making and influence.
          </p>
          <p>
            We believe an effective board should not necessarily be a
            comfortable place. There should not only be adequate independent
            challenge but also teamwork, both of which are critical features. A
            culture of openness and transparency is engendered by the Society
            and all Non Executive Directors are encouraged to meet with members
            of the Executive team and to develop their knowledge of the
            Society’s business.
          </p>
          <p>
            The Board recognises and embraces the benefits of having a{" "}
            <strong>diverse Board</strong> which utilises a range of factors
            including skills, industry experience, background, race, gender and
            the other characteristics, experience and qualities of its
            Directors. Giving specific regard to gender ratios, there are{" "}
            <strong>two female directors</strong> on the Board. It is important
            to note that all Board appointments are made on the basis of
            individual competence, skills and expertise measured against
            identified objective criteria. Appointment is therefore based on
            merit.
          </p>
          <p>
            Meetings take place on a monthly basis, or such other time as
            required, to carry out the Group’s business. The Board does not
            normally meet in August or December. The Board delegates a number of
            authorities to various Board Committees and Subsidiary Company
            Boards.
          </p>
          <p>
            In discharging its responsibilities to be accountable to the
            Society’s Members for the operation of the Society, the Board
            regards good corporate governance as extremely important. The
            revised US Corporate Governance Code (the Code).
          </p>
        </InfoSection>

        {/* Roles and Responsibilities */}
        <section className="bg-white shadow-lg rounded-xl mb-12 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6 text-center">
            Key Roles and Responsibilities
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Summary of the Chairman's Role
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>To provide leadership to the Board of Directors;</li>
                <li>To promote the principles of good corporate governance;</li>
                <li>
                  Together with the other Board of Directors, ensure that the
                  Board takes collective responsibility for the sustainable and
                  long-term success of the Society by ensuring a challenging
                  strategic plan is in place, along with a sound framework for
                  risk management;
                </li>
                <li>
                  To ensure the Board comprises members with the appropriate
                  skills, independence, experience and knowledge to enable it to
                  discharge its duties and responsibilities effectively.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Summary of the Chief Executive's Role
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  Together with the support of other Executive members and the
                  wider board, ensure that a robust and challenging strategic
                  plan is in place that will support the long-term success of
                  the Society;
                </li>
                <li>
                  Together with the support of the other Executive members,
                  direct and coordinate the management of the Groups operations;
                </li>
                <li>
                  Together with the other Executive team members, lead the
                  Executive Risk Committee to monitor the Group's risk profile
                  and performance and oversight of the Group's risk management
                  committees;
                </li>
                <li>
                  To provide leadership to colleagues at all levels of our Group
                  to motivate and inspire them to do the best for our Society;
                </li>
                <li>
                  To establish and maintain effective working relationships with
                  regulators, the Government, industry sector analysts, trade
                  organisations and the media and strategically influence and
                  lobby these bodies, as and when appropriate, in the best
                  interests of the Group;
                </li>
                <li>
                  To promote the interests of the Society’s key stakeholders –
                  Members, Colleagues, Clients and the Communities in which it
                  operates;
                </li>
                <li>
                  To promote the Group, its good corporate image and social
                  standing in the UK financial services industry.
                </li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Summary of the Senior Independent Director's Role
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>
                  To support the Society Chair, to ensure they are successful in
                  achieving their objectives;
                </li>
                <li>
                  To lead on an annual review of the Chairman’s performance;
                </li>
                <li>
                  Available to support directors if they have concerns where the
                  usual channels have failed to resolve these issue or for which
                  such contact may not be appropriate;
                </li>
                <li>
                  Acts as a trusted intermediary for other directors when
                  necessary.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <InfoSection
          title="Our Committees"
          imageSrc={images.boardCommittees}
          alt="Our Committees"
          reverse={true}
        >
          <p>
            The Board is assisted by a number of committees which are
            responsible for a wide range of activities. Each has its own terms
            of reference which are reviewed on an annual basis.
          </p>
          <p>
            The current members of the Audit Committee, Group Risk Committee,
            Nominations Committee, and Remuneration Committee are shown below.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
            <li>Audit Committee</li>
            <li>Group Risk Committee</li>
            <li>Nominations Committee</li>
            <li>Remuneration Committee</li>
          </ul>
        </InfoSection>

        {/* Modern Slavery and Human Trafficking Statement */}
        <section className="bg-white shadow-lg rounded-xl mb-12 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-oxford-blue mb-6 text-center">
            Modern Slavery and Human Trafficking Statement
          </h2>
          <p className="text-slate-600 mb-4">
            This statement has been published in accordance with Section 54 of
            the Modern Slavery Act 2015. It sets out the steps taken by DHD
            Group during year ending 31 December 2020 to prevent modern slavery
            and human trafficking in its business and its supply chains.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Introduction
          </h3>
          <p className="text-slate-600 mb-4">
            The DHD Group has a zero tolerance approach to modern slavery of any
            kind within our operation. We all have a responsibility to be aware
            of the risks, however small in our business and wider supply chain.
            Colleagues are expected to report concerns, using appropriate
            reporting channels and management are expected to act upon them.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Organisation's Structure
          </h3>
          <p className="text-slate-600 mb-4">
            The DHD Group consists of DHD and 2 key subsidiary companies:
            Newcastle Financial Advisers Limited and Newcastle Strategic
            Solutions Limited. The Society is the United Kingdom’s 8th largest
            building society and the largest building society in the North East
            of England. The DHD Group has 30 branches and employs in excess of
            1,000 staff across its branch network and head office sites.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Our Business
          </h3>
          <p className="text-slate-600 mb-4">
            The DHD Group like all mutual organisations exists and functions for
            the benefit of its members, and so core to our vision is being a
            trusted provider of family savings, mortgages and financial advice
            delivered with good customer outcomes and great customer service.
          </p>
          <p className="text-slate-600 mb-4">
            In addition, our subsidiary company Newcastle Strategic Solutions
            Limited is dedicated to the provision of outsourcing for financial
            services and provides system development and on-going operational
            support to both itself and the Society.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Responsibilities
          </h3>
          <p className="text-slate-600 mb-4">
            The DHD Group’s board of directors has overall responsibility for
            ensuring our Modern Slavery and Human Trafficking policy complies
            with our legal and ethical obligations, and that all those under our
            control comply with it. All our colleagues must observe our policy
            on Anti-Slavery and Human Trafficking and be aware that turning a
            blind eye is unacceptable.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Supply Chain Risk
          </h3>
          <p className="text-slate-600 mb-4">
            As the provider of financial services, the DHD Group is not in an
            industry with a high risk of modern day slavery and is not part of a
            supply chain, however in delivering our services, we procure goods
            and services from suppliers who do operate supply chains some of
            which are global. We have adopted a risk based approach to reviewing
            our supply chains which may carry a higher risk; these supply chains
            and suppliers which supply goods and/or services to us include:
          </p>
          <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
            <li>
              IT and electronics manufacture including the disposal, dismantling
              and recycling stages;
            </li>
            <li>Marketing and promotional merchandise;</li>
            <li>Cleaning staff;</li>
            <li>Colleague uniform supplier;</li>
            <li>Corporate hospitality.</li>
          </ul>
          <p className="text-slate-600 mb-4">
            We manage these risk areas through our procedures set out in our
            Anti-Slavery and Human Trafficking policy and elsewhere and we have
            not identified any evidenced reason to believe that slavery or human
            trafficking exists in the above currently.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Our Policies on Slavery and Human Trafficking
          </h3>
          <p className="text-slate-600 mb-4">
            We are committed to ensuring that there is no modern slavery or
            human trafficking in our supply chains or in any part of our
            business. Our Anti-Slavery and Human Trafficking policy reflects our
            commitment to acting ethically and with integrity in all our
            business relationships and to implementing and enforcing effective
            systems and controls to ensure slavery and human trafficking is not
            taking place anywhere in our supply chains.
          </p>
          <p className="text-slate-600 mb-4">
            Colleagues are able to report any suspicion of modern slavery or
            human trafficking under our Whistleblowing policy. This policy is to
            protect and support colleagues who make a non-malicious allegation
            in the best interests of the DHD Group, providing a confidential
            contact point and responding in an appropriate manner.
          </p>
          <p className="text-slate-600 mb-4">
            Wherever possible we will seek to perform critical functions
            in-house and will only outsource functions where such arrangements
            will avoid undue conduct risk, operational risk, and reputational
            risk. Where we outsource functions, we perform due diligence on all
            outsourcing partners to satisfy ourselves of the robustness of
            outsourcing arrangements. This is fully documented under our
            Procurement & Supplier Management policy.
          </p>
          <p className="text-slate-600 mb-4">
            We tell companies we do business with that we are not prepared to
            accept any form of exploitation. Our Contracts policy advises that
            no agreements should be entered into by the Society which breach any
            law or regulation. The Contracts Policy also provides that any
            material contract must be reviewed by our Legal Services team prior
            to signature who will ensure there is a clause which obliges each
            party to comply with all applicable laws or regulations, in force
            from time to time.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Training
          </h3>
          <p className="text-slate-600 mb-4">
            To ensure a high level of understanding of the risks of modern
            slavery and human trafficking in our supply chains and our business,
            we provide regular training to all our colleagues.
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Further Steps
          </h3>
          <p className="text-slate-600 mb-4">
            Following a review of the effectiveness of the steps we have taken
            this year to ensure that there is no slavery or human trafficking in
            our supply chains we intend to take the following further steps to
            combat slavery and human trafficking:
          </p>
          <ul className="list-disc list-inside text-slate-600 mb-4 ml-4">
            <li>
              Continue to ensure all of our supplier contracts (both existing
              and new) contain an anti-slavery clause, this clause, which flows
              down through all layers of our supply chain, prohibits suppliers
              and their employees from engaging in slavery and human
              trafficking;
            </li>
            <li>Review of existing training for all colleagues;</li>
            <li>
              Continue to review, update and develop new Procurement & Supplier
              Management policies and procedures (including risk assessment of
              suppliers) to address and incorporate provisions of the Act.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Governance;
