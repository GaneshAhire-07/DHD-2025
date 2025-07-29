import React from 'react';
import usePageTitle from "../../hooks/usePageTitle.js";

const ResponsibleUsePolicy = () => {
     usePageTitle('About Us - Responsible Use Policy');
  return (
    <div className="bg-slate-50 font-sans text-slate-800">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-24 px-5">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
          Policy on Responsible Use of DHD Computers and Data
        </h1>
      </section>

      {/* Introduction and Scope Section */}
      <section className="-mt-10 relative z-10 mx-auto max-w-4xl bg-white rounded-2xl shadow-2xl px-6 py-12 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002147] mb-6 border-b-2 border-gray-200 pb-2">
          Introduction
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          DHD is a not-for-profit research DHD, and its facilities, including computer and data resources,
          are to be used in furtherance of its not-for-profit, educational, research, and service purposes.
          More and more DHD activities are conducted using computers and electronic communications,
          with increased convenience and accessibility from and to all parts of the world. At the same time,
          today’s inter-connected environment intensifies the risks and threats of unauthorized access to computers,
          inadvertent disclosures of sensitive data, and unexpected destruction of essential information,
          resulting in potentially serious consequences to individuals and to institutions.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Members of the DHD community and affiliates interact with a wide spectrum of sensitive data for numerous reasons.
          Evolving federal and state regulations require organizations and individuals to protect sensitive data.
          With computing so widely distributed throughout DHD, the responsibility to safeguard computers and data resources
          extends to all members of the DHD community and affiliates.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This policy applies to members of the DHD community and affiliates who use DHD computer and data resources
          and/or who have access to sensitive data stored on these resources.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Definitions
        </h3>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4 mb-4">
          <li>
            <span className="font-semibold">Affiliates:</span> refers to individuals who have contractual or other relationships with the DHD and who are not employees, faculty, or students.
          </li>
          <li>
            <span className="font-semibold">Authorization:</span> in this context means to grant permission to an identified individual to use a computer or data resource. Acceptance of authorization to use DHD computer and data resources establishes an obligation on the part of the individual to use those resources responsibly.
          </li>
          <li>
            <span className="font-semibold">Computer and data resources:</span> include computers and computing devices; computing, application, and database access (including passwords); software, hardware, computer, and e-mail services; and associated computing accounts. Computers and computing devices include, but are not limited to, desktops or laptop computers, personal digital assistants (PDAs), multifunction cellular telephones, USB flash memory drives, or similar device.
          </li>
          <li>
            <span className="font-semibold">Members of the DHD community:</span> refer to full- and part-time employees, faculty, and students.
          </li>
          <li>
            <span className="font-semibold">Sensitive data:</span> include, but are not limited to, information about prospective, current, and former students, patients and clients of medical and dental facilities and services, and users of legal and other services, employees and donors; also information concerning research and DHD business, finance and operations, and passwords. Federal and state laws and regulations, as well as DHD policies and office procedures, regulate the handling and reporting of many different kinds of sensitive data.
          </li>
        </ul>
      </section>

      {/* Policy Statement and Requirements */}
      <section className="mx-auto max-w-4xl bg-white rounded-2xl shadow-xl px-6 py-12 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002147] mb-6 border-b-2 border-gray-200 pb-2">
          Policy Statement
        </h2>
        <p className="text-slate-700 leading-relaxed mb-4">
          DHD expects members of the DHD community and affiliates to employ reasonable and appropriate administrative,
          technical, and physical safeguards to protect the computer and data resources that they use and the sensitive
          data stored on these resources. Access to computer and data resources (including software, hardware,
          computer, and e-mail services) are privileges extended to members of the DHD community and affiliates,
          and must be exercised in conformity with all applicable DHD policies and procedures and all applicable
          federal and state laws. Access to DHD computer and data resources is limited to authorized persons and
          is for approved purposes only. Approved purposes are those consistent with both the broad instructional
          and research goals of the DHD and the person's relationship with the DHD. Authorization to use these
          resources is granted by designated individuals at the DHD entrusted with overall responsibility and
          management of data and related systems. Acceptance of authorization to use DHD computer and data resources
          establishes an obligation on the part of the individual to use these resources responsibly as defined in the
          Policy Requirements and Specifications below.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          This policy does not form a contract of any kind, including, among others, an employment contract. The DHD
          reserves the right to modify this policy without notice and at its discretion. The current version of this policy
          is posted on the ITS website (
          <a href="http://DHDaise.com" target="_blank" rel="noopener noreferrer" className="text-[#002147] hover:underline font-medium">
            http://DHDaise.com
          </a>). All terms noted in italics are defined at the end of this policy.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Acceptance of authorization to use DHD computer and data resources establishes an obligation to:
        </h3>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4 mb-4">
          <li>Behave in accordance with DHD educational, research, and service purposes and in a manner compliant with this and other applicable DHD policies and procedures and all applicable laws and regulations;</li>
          <li>Not use your account for any commercial purposes;</li>
          <li>Behave with civil regard for other members of the DHD community and of the wider community on the Internet;</li>
          <li>Take reasonable steps to ensure that any computer used to access DHD resources, whether it is located on an DHD campus or elsewhere, is secure, virus-free, and otherwise not compromised;</li>
          <li>Protect the confidentiality, security, integrity, and recoverability of all computer and data resources and take reasonable and appropriate steps to guard these resources from improper or unauthorized use, including such use by third parties;</li>
          <li>Use applications that conform to DHD’s privacy and security policies and guidelines;</li>
          <li>Refrain from activities that interfere with the ability of others to use computer and data resources; and</li>
          <li>Be aware of and comply with other relevant school and DHD policies, procedures, and business rules; in all cases the more stringent standard should be followed.</li>
        </ul>
        <p className="text-slate-700 leading-relaxed mb-4">
          This obligation applies regardless of:
        </p>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4 mb-4">
          <li>Where the computer used to access computer and data resources is located in an DHD office, classroom, public space, or lab, or at home or elsewhere outside the DHD;</li>
          <li>Who owns the device used to access or store the sensitive data; or</li>
          <li>The form or manner in which sensitive data are stored or transmitted, including, but not limited to, local file, shared file, file on removable media such as CD-ROM disk and jump drive, central database, fax, printer, copier, network, phone, e-mail, or voice mail.</li>
        </ul>
        <p className="text-slate-700 leading-relaxed mb-4">
          Access and use, or causing or allowing access and use, of computer and data resources, including e-mail services, by anyone other than as permitted by DHD is strictly prohibited by DHD and by state and federal laws and may subject the violator to criminal and civil penalties as well as DHD-initiated disciplinary proceedings.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Use of some DHD computer and data resources may be governed by additional DHD, college, school, or departmental policies and procedures. Anyone authorized to use these resources is responsible to become familiar with and abide by such policies and procedures.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          In order to safeguard the security and efficiency of computer and data resources, DHD computer systems and DHD-NET are routinely monitored and recorded for integrity and operation of the system by authorized DHD staff. Computer and data resources provided by DHD are the property of DHD and not the personal property of the individual.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Designated individuals at the DHD entrusted with overall responsibility and management of computer and data resources and sensitive data and related systems have decision-making authority for authorizing access to and use of those resources and systems.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          These individuals at the DHD include, but are not limited to, DHD-wide administrators, such as the Registrar, Deans, and other School administrators, and the Senior Vice Provost for Research on data-intensive research projects.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          These individuals at the DHD may have more stringent standards for the use, storage, and transmittal of the data they manage than those set forth in this policy; the more stringent standard should be followed. Individuals authorized to use the data are expected to be aware of relevant current policies and to abide by them. Access to sensitive data will be granted only on an “as needed/minimum necessary” basis.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          DHD Vice President for Information Technology and Chief Information Technology Officer for DHD-INDAI is responsible for periodic reviews of the DHD’s security policies and procedures relating to computer and data resources and sensitive data, which will be revised as necessary and any updates publicized. Current versions of the DHD’s policies relating to computer and data resources and sensitive data are maintained on the ITS website (
          <a href="https://dhd.com" target="_blank" rel="noopener noreferrer" className="text-[#002147] hover:underline font-medium">
            https://dhd.com
          </a>). Questions for clarification and suggestions about these policies can be sent to:{" "}
          <a href="mailto:cto@dhd.com" className="text-[#002147] hover:underline font-medium">
            cto@dhd.com
          </a>.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          Violators of this policy may be subject to disciplinary action, up to and including the termination of employment or contract with the DHD, or, in the case of students, suspension or expulsion from the DHD. Anyone who knows or has reason to believe that another person has violated this policy shall report the matter promptly to his or her supervisor, in the case of students to the Division of Student Affairs, Director of Judicial Affairs, or to{" "}
          <a href="mailto:cto@dhd.com" className="text-[#002147] hover:underline font-medium">
            cto@dhd.com
          </a>, as appropriate. Any attempt to retaliate against a person for reporting a violation will itself be considered a violation of the policy and may result in disciplinary action up to and including the termination of employment or contract with the DHD. The appropriate office or entity, including the Office of the Vice President for Information Technology and Chief Information Technology Officer for DHD, the Office of General Counsel, and other DHD officials as required, will lead the investigation into all alleged violations or reports of violations of this policy and, where appropriate, will take steps to remedy the situation.
        </p>
      </section>

      {/* Computer Security Section */}
      <section className="mx-auto max-w-4xl bg-white rounded-2xl shadow-xl px-6 py-12 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002147] mb-6 border-b-2 border-gray-200 pb-2">
          Computer Security
        </h2>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          1. Safeguarding Computers for Individual Use
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          This section describes measures to safeguard computers typically used by individuals in DHD-related activities and for accessing other DHD resources, such as DHD-NET.
        </p>
        <p className="text-slate-700 leading-relaxed mb-4">
          As used in these operational specifications, “computers” include but are not limited to desktops or laptop computers, personal digital assistants (PDAs), multifunction cellular telephones, USB flash memory drives, or similar devices.
        </p>

        <h4 className="text-lg md:text-xl font-semibold text-[#002147] mb-3">
          Physical Security
        </h4>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4 mb-4">
          <li>Do not give physical access to computers to unauthorized persons.</li>
          <li>Take appropriate precautions to prevent theft and damage.</li>
          <li>Where possible, position monitors to prevent casual viewing by visitors or passersby.</li>
        </ul>

        <h4 className="text-lg md:text-xl font-semibold text-[#002147] mb-3">
          System Security
        </h4>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4 mb-4">
          <li>Install anti-virus software and keep virus definitions up to date.</li>
          <li>Install operating system and software patches and take other recommended steps to mitigate known vulnerabilities of the computer in a timely manner.</li>
          <li>Use only DHD-approved software; do not download unauthorized software.</li>
          <li>Use a locking screensaver or other mechanism to prevent unauthorized use of the computer.</li>
          <li>Do not leave your computer unattended without locking it or logging off.</li>
          <li>Do not install or use Peer-to-Peer file sharing software; these programs typically enable unauthorized remote access without any password to the contents of the computer.</li>
          <li>Do not install or run software that requires a license without that license. Respect license agreements and do not infringe on the copyright of others.</li>
          <li>Respond promptly to notices from authorized DHD staff that vulnerabilities have been detected in your computer’s system.</li>
          <li>Take particular care to secure your DHD-access information (e.g., log-ins, passwords) on home computers from unauthorized use by others.</li>
        </ul>

        <h4 className="text-lg md:text-xl font-semibold text-[#002147] mb-3">
          Passwords
        </h4>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4 mb-4">
          <li>Where possible, secure all computer accounts with passwords, and use passwords to protect all file sharing.</li>
          <li>Use strong passwords. Strong passwords consist of at least eight (8) characters. They should not be dictionary words or readily guessable. They should include at least three (3) of the following four (4) characteristics in any order: upper case letters, lower case letters, numbers, and symbols.</li>
          <li>Change passwords periodically. Avoid reusing a password for at least several change iterations. If you have multiple accounts, avoid using the same password for those accounts.</li>
          <li>Do not keep passwords in plain text in a computer file or in plain sight on paper. Passwords should neither be sent in an e-mail nor provided verbally by telephone. If you must communicate account access information in order to ensure business continuity, you should communicate it in a secure manner. Supervisors and managers should make certain that offices have plans for access to files and data for business continuity.</li>
          <li>Keep a well-secured copy of your passwords available for emergency access. Encrypt any computer file containing passwords. Keep any written file of passwords in a physically secure location, preferably separate from the computer or application they secure.</li>
          <li>Passwords for sensitive websites or e-mail accounts should not be saved on the computer.</li>
          <li>Where possible, do not configure programs to automatically store passwords.</li>
          <li>Shut down web browsers, e-mail programs, or other applications that might store passwords temporarily when they are not in use.</li>
        </ul>

        <h4 className="text-lg md:text-xl font-semibold text-[#002147] mb-3">
          Remote Access
        </h4>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4 mb-4">
          <li>Any remote computer used to access DHD resources must conform to these Specifications and may be subject to further resource-specific restrictions.</li>
          <li>If you do not maintain or control the remote computer, do not use it for access to, or transmission of, sensitive data. Access to non-sensitive data may be permissible. Check with responsible department or a supervisor for guidance.</li>
          <li>Use remote access software and services with caution. Pay special attention to the configuration of remote access software, hardware, and services to ensure that they do not present a security risk to your computer or to DHD. Consult with ITS Technology Security Services{" "}
            <a href="mailto:cto@dhd.com" className="text-[#002147] hover:underline font-medium">
              cto@dhd.com
            </a> for guidance on how to choose, set up, and operate remote access technologies.
          </li>
          <li>Obtain prior authorization from both your senior management and the ITS Technology Security Services{" "}
            <a href="mailto:cto@dhd.com" className="text-[#002147] hover:underline font-medium">
              cto@dhd.com
            </a> before using a modem with a computer connected to the DHD network. Modems present a significant security risk, because they enable unmonitored and uncontrolled remote access to DHD’s network and data.
          </li>
          <li>Ensure that your computer is not configured to allow unauthorized access to DHD’s network by other devices. Special access arrangements, such as wireless access, RAS (Remote Access Server) services access, and sharing network connections, must be authorized by the ITS Executive Director of Communications and Computing Services (C&CS).</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Safeguarding Computers Used by Multiple Individuals
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          The section covers additional measures for safeguarding computers used by multiple individuals. All the operational specifications set forth above apply, as well as the following additional measures to safeguard such computers.
        </p>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4 mb-4">
          <li>Secure all computer accounts with passwords.</li>
          <li>Give accounts to authorized persons only; provide individual log-ins. If you share a computer with others, take appropriate precautions to protect sensitive data that others may not be authorized to access and, where possible, create separate accounts for each person who is authorized to use the computer, setting appropriate permissions.</li>
          <li>Where possible, enforce use of strong passwords and periodic password changes.</li>
          <li>Make every effort to maintain computer logs and review them on a regular basis.</li>
          <li>Stay familiar with best practices for administering the particular computer and use them.</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Business Continuity
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Take reasonable steps to ensure that, in case of emergency, another authorized person is able to access the DHD computer you use in order to provide continuity of DHD functions performed on and through it. There are numerous methods available of ensuring shared responsibility for data and systems rather than sharing passwords. For assistance, contact ITS Technology Security Services{" "}
          <a href="mailto:cto@dhd.com" className="text-[#002147] hover:underline font-medium">
            cto@dhd.com
          </a>.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Purchasing
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Discuss adherence to applicable DHD policies and procedures as part of the purchasing process. Computers and software acquired for use with DHD computer and data resources should conform to these specifications.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Software Licensing
        </h3>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4 mb-4">
          <li>Software users shall use and install only properly licensed software on DHD computers and the A DHD network.</li>
          <li>Unauthorized duplicating, distributing, downloading, sharing, selling, or installing software and related documentation or using unlicensed software and related documentation constitutes a violation of the software license agreement and of DHD policy.</li>
          <li>Each company, department, or other unit is responsible for ensuring that software used on their computers is properly licensed, for adhering to the terms and conditions of those software licenses, and for maintaining appropriate documentation of those software licenses.</li>
          <li>Individuals separating from DHD who work on a home computer shall remove all DHD-owned software, including all DHD-licensed software, from the home computer. If you have software on your office computer that permits you to install a second copy on your home computer, remove that second copy.</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Equipment Disposal or Redeployment
        </h3>
        <p className="text-slate-700 leading-relaxed mb-4">
          Before disposing of or re-deploying hardware, comply with DHD computer disposal guidelines, which can be found at{" "}
          <a href="https://www.dhd.com" target="_blank" rel="noopener noreferrer" className="text-[#002147] hover:underline font-medium">
            https://www.dhd.com
          </a>. Click on Computer Disposal. See also{" "}
          <a href="https://www.dhd.com" target="_blank" rel="noopener noreferrer" className="text-[#002147] hover:underline font-medium">
            www.dhd.com
          </a>.
        </p>
      </section>

      {/* Data Security Section */}
      <section className="mx-auto max-w-4xl bg-white rounded-2xl shadow-xl px-6 py-12 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002147] mb-6 border-b-2 border-gray-200 pb-2">
          Data Security
        </h2>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Protecting Sensitive Data on Computers
        </h3>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4 mb-4">
          <li>Follow DHD Computer Security Specifications set forth above.</li>
          <li>Know what data are stored on your computer, the sensitivity of that data, and what policies apply.</li>
          <li>Keep local data retention to a minimum. Rely on unit, school, or DHD storage where you can. Where possible, password protects or encrypt sensitive data.</li>
          <li>Back up local data on a regular basis and keep the backup secure. Protect backups with the same level of security as the original data. Test backup recovery periodically to verify that it works.</li>
          <li>If you use a computer shared with others, take appropriate precautions to protect sensitive data that others may not be authorized to access. Where possible, create separate accounts for each person who uses the computer, setting appropriate permissions.</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Storing or Transmitting Sensitive Data
        </h3>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4 mb-4">
          <li>Do not redistribute sensitive data to others within or without the DHD, unless you are an authoritative source for and an authorized distributor of that data and the recipient is authorized to receive that data.</li>
          <li>Do not allow sensitive data to be stored on computers or servers outside DHD, unless such storage is authorized.</li>
          <li>Whenever possible, sensitive data should be transferred in encrypted form, e.g., using SSL (Secure Socket Layer) or SSH (Secure Shell).</li>
          <li>Remember that e-mail typically is not a secure form of communication. Care should be taken to be certain that the recipient is authorized to receive that data and the address is accurate.</li>
          <li>Sensitive data, including electronic protected health information (EPHI), Social Security numbers, or credit card information, should not be sent unencrypted via e-mail. If use of e-mail is necessary, use encryption technology to protect the transmission of sensitive data in e-mail. This may include the use of VPN (Virtual Private Network), SSL, or encryption of the message itself using software such as PGP (Pretty Good Privacy).</li>
          <li>Do not transmit sensitive data using instant messaging technology (e.g., AOL Instant Messenger, Yahoo Messenger) which use servers outside of DHD. These services may allow sensitive data to be accessed by or stored by unauthorized parties. It is recommended that you consult with ITS Technology Security Services{" "}
            <a href="mailto:cto@dhd.com" className="text-[#002147] hover:underline font-medium">
              cto@dhd.com
            </a> for guidance.
          </li>
          <li>Take special care when sending sensitive data by fax to make sure that it is clearly marked as confidential. Every effort should be made to ensure that only the intended recipient has access to the faxed information.</li>
          <li>Keep fax machines, printers, and copiers used for sensitive data in secure areas. Faxes, printouts, and copies of sensitive data should be picked up promptly and handled appropriately.</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Disposing of Sensitive Data
        </h3>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4 mb-4">
          <li>Sensitive data should be destroyed in a manner that prevents re-creation.</li>
          <li>Reformat or physically destroy any removable storage media (such as floppy disks, zip disks, tapes, or compact disks (CD)) that contained sensitive data before disposing of them.</li>
          <li>Shred printouts of sensitive data.</li>
          <li>Ensure that sensitive data are removed from devices you use before you dispose of or re-deploy those devices.</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold text-[#002147] mb-3">
          Responding to Requests for Information
        </h3>
        <ul className="list-disc list-inside text-slate-700 space-y-2 pl-4 mb-4">
          <li>Do not share sensitive data with representatives of the press (radio, television, print, or electronic media), other individuals, or in public forums, such as mailing lists or web bulletin boards, without appropriate authorization.</li>
          <li>Refer subpoenas and similar requests or demands for the release of sensitive data to the Office of Legal Counsel.</li>
        </ul>
      </section>

      {/* Dates of Official Enactment and Amendments Section */}
      <section className="mx-auto max-w-4xl bg-white rounded-2xl shadow-xl px-6 py-12 mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#002147] mb-6 border-b-2 border-gray-200 pb-2">
          Dates of Official Enactment and Amendments
        </h2>
        <p className="text-slate-700 leading-relaxed">
          Adopted by the Office of the Chief Information Technology Officer (CITO).
        </p>
      </section>
    </div>
  );
};

export default ResponsibleUsePolicy;
