import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import styles from "./privacy-policy.module.scss";
import heroBg from "@/assets/images/hero-section-bg-banner.png";
import heroImg from "@/assets/images/karya-heros.png";

export default function PrivacyPolicy() {
  return (
    <>
      {/* <Navbar
        links={[
          { label: "Services", href: "#services" },
          { label: "How it works", href: "#steps" },
          { label: "FAQs", href: "#faqs" },
        ]}
      /> */}
      <section className={styles.bannerSection}>
        <div className={styles.bannerBg}>
          <Image
            src={heroBg}
            alt="Banner Background"
            fill
            priority
            className={styles.bgImage}
          />
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src={heroImg}
            alt="Karya Sync Team"
            width={420}
            height={220}
            className={styles.heroImage}
          />
        </div>
      </section>
      <main className={styles.contentSection}>
        <div className={styles.policyContent}>
          <h1>Privacy Policy</h1>
          <span className={styles.updatedBadge}>
            Last Updated: 1st August, 2026
          </span>
          <p>
            <strong>Karya Sync Private Limited</strong>
          </p>
          <p>
            Karya Sync Private Limited (“Karya Sync”, “Karya”, “we”, “us”, or
            “our”), a company incorporated under the Companies Act, 2013, having
            its registered office at House No. 14A, Ashoka Society, Vasundhara,
            Ghaziabad, Uttar Pradesh, India, operates a technology-enabled
            marketplace platform, including its website and mobile application
            (collectively, the “Platform”), that connects Customers with
            independent service providers (“Service Partners” or “Karya
            Heroes”) for home, household, maintenance, repair, labour,
            relocation, cleaning, and other services.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, store, share, and
            protect personal data of Customers who access or use the Platform,
            in accordance with the Digital Personal Data Protection Act, 2023
            (“DPDP Act”), the Information Technology Act, 2000 and rules made
            thereunder, and other applicable law. This Privacy Policy forms an
            integral part of, and must be read together with, our Terms and
            Conditions, Refund and Cancellation Policy, and Community
            Guidelines.
          </p>
          <p>
            By accessing or using the Platform, creating an Account, or
            otherwise providing personal data to us, you consent to the
            collection, use, and disclosure of your personal data as described
            in this Privacy Policy.
          </p>

          <h2>1. DEFINITIONS</h2>
          <p>
            <strong>“Customer”</strong>, <strong>“you”</strong>,{" "}
            <strong>“your”</strong> means any individual or legal entity that
            accesses, browses, registers on, or uses the Platform, or books any
            Service through the Platform.
          </p>
          <p>
            <strong>“Personal Data”</strong> means any data about an individual
            who is identifiable by or in relation to such data, as defined under
            the DPDP Act.
          </p>
          <p>
            <strong>“Processing”</strong> means any operation performed on
            personal data, including collection, recording, storage, use,
            sharing, transmission, and erasure.
          </p>
          <p>
            <strong>“Data Principal”</strong> means the individual to whom the
            personal data relates, i.e., the Customer.
          </p>
          <p>
            <strong>“Service Partner”</strong> /{" "}
            <strong>“Karya Hero”</strong> means an independent service provider
            registered on the Platform who performs the Services requested by a
            Customer.
          </p>

          <h2>2. PERSONAL DATA WE COLLECT</h2>
          <p>
            We may collect the following categories of personal data about you,
            depending on your use of the Platform:
          </p>

          <h3>2.1 Information you provide to us</h3>
          <ul>
            <li>
              Identity and contact information: name, mobile number, email
              address, and residential address.
            </li>
            <li>
              Account and registration information provided during sign-up,
              including any information required for verification.
            </li>
            <li>
              Government-issued identification documents, where furnished for
              identity verification, security, fraud prevention, or regulatory
              compliance.
            </li>
            <li>
              Facial image, where you undergo facial verification as part of
              Karya’s identity-verification process.
            </li>
            <li>
              Booking details, including service category, preferred date, time,
              address, and special instructions.
            </li>
            <li>
              Payment-related information, including billing details,
              transaction records, and UPI ID or last four digits of payment
              instruments (Karya does not store full card numbers, CVV, or
              banking credentials; these are processed by RBI-authorised payment
              gateway partners).
            </li>
            <li>
              User Content such as ratings, reviews, feedback, photographs,
              videos, chat messages, and communications with Service Partners or
              customer support.
            </li>
            <li>
              Communications you send us, including grievances, complaints, and
              correspondence with the Grievance Officer.
            </li>
          </ul>

          <h3>2.2 Information collected automatically</h3>
          <ul>
            <li>
              Device information, including device identifiers, IP address,
              operating system, and browser type.
            </li>
            <li>
              Location information, where you enable location services, for the
              purpose of identifying serviceable addresses and assigning Service
              Partners.
            </li>
            <li>
              Usage data, including log data, pages viewed, features used, and
              interaction with the Platform.
            </li>
            <li>
              Cookies and similar tracking technologies, as described in Clause
              10 below.
            </li>
          </ul>

          <h3>2.3 Information from third parties</h3>
          <ul>
            <li>
              Verification results from identity-verification and
              background-check agencies engaged by Karya.
            </li>
            <li>
              Confirmation and status information from payment gateway providers
              and payment service providers.
            </li>
            <li>
              Information from Service Partners regarding the performance of a
              booking, including any complaint or feedback about a Customer.
            </li>
          </ul>

          <h2 >3. HOW WE USE YOUR PERSONAL DATA</h2>
          <p>We process your personal data for the following purposes:</p>
          <ol type="a">
            <li>
              to create and manage your Account and verify your identity;
            </li>
            <li>
              to process, confirm, assign, and fulfil bookings, including
              selecting and assigning a suitable Service Partner;
            </li>
            <li>
              to process payments, settlements, refunds, and to detect and
              prevent payment fraud;
            </li>
            <li>
              to provide customer support and resolve complaints, grievances,
              and disputes;
            </li>
            <li>
              to communicate with you regarding bookings, service updates,
              security alerts, and account-related matters;
            </li>
            <li>
              to send promotional, marketing, or loyalty-programme
              communications, where you have not opted out and in accordance
              with applicable law;
            </li>
            <li>
              to conduct analytics, research, and service improvement, and for
              business intelligence;
            </li>
            <li>
              to ensure the safety and security of Customers, Service Partners,
              and the Platform, including fraud prevention and background
              verification of Service Partners;
            </li>
            <li>
              to comply with applicable law, regulatory requirements, and lawful
              requests from courts, tribunals, or governmental authorities; and
            </li>
            <li>to enforce our Terms and Conditions and other policies.</li>
          </ol>

          <h2>4. LEGAL BASIS AND CONSENT</h2>
          <p>
            We process your personal data on the basis of your consent, provided
            at the time of registration or at the relevant point of collection,
            and, where applicable, for the performance of the contract between
            you and Karya, compliance with legal obligations, or other grounds
            recognised under the DPDP Act.
          </p>
          <p>
            Where processing is based on consent, you may withdraw such consent
            at any time by contacting us at the details provided in Clause 12.
            Withdrawal of consent shall not affect the lawfulness of processing
            carried out prior to withdrawal. Please note that if you withdraw
            consent for data that is necessary for providing the Services, we
            may be unable to continue providing such Services to you.
          </p>

          <h2>5. YOUR PERSONAL DATA</h2>
          <p>
            We may share your personal data, where reasonably necessary, with
            the following categories of recipients:
          </p>
          <ul>
            <li>
              Service Partners, to the extent necessary to enable them to
              perform the booked Services (such as your name, address, and
              contact number, and special instructions);
            </li>
            <li>our affiliates and group entities;</li>
            <li>
              payment gateway providers and payment service providers, for
              processing payments and settlements;
            </li>
            <li>cloud hosting and information-technology service providers;</li>
            <li>
              communication service providers (SMS, email, WhatsApp, and
              push-notification providers);
            </li>
            <li>identity-verification and background-check agencies;</li>
            <li>analytics and technology partners;</li>
            <li>
              professional advisors, including legal, tax, and financial
              consultants;
            </li>
            <li>
              courts, tribunals, regulatory authorities, law enforcement
              agencies, and other competent governmental bodies, where required
              by applicable law or pursuant to a lawful request; and
            </li>
            <li>
              a successor entity, purchaser, or transferee in connection with a
              merger, acquisition, restructuring, or sale of business.
            </li>
          </ul>
          <p>
            We do not sell your personal data to third parties for their
            independent marketing purposes. We may share anonymised, aggregated,
            or de-identified data that does not directly identify you for
            statistical analysis, research, and business purposes.
          </p>

          <h2>6. CROSS-BORDER TRANSFER OF PERSONAL DATA</h2>
          <p>
            We may transfer, store, and process your personal data on servers
            located outside India, subject to and in accordance with the DPDP
            Act and any notification issued by the Central Government of India
            restricting transfer of personal data to specific countries or
            territories. Where such transfers occur, we take reasonable steps to
            ensure that your personal data continues to receive an appropriate
            level of protection.
          </p>

          <h2>7. DATA RETENTION</h2>
          <p>
            We retain your personal data for as long as is reasonably necessary
            to fulfil the purposes for which it was collected, including for the
            duration of your Account, to comply with our legal, accounting, or
            regulatory obligations, to resolve disputes, and to enforce our
            agreements. Where you request erasure of your personal data or
            delete your Account, we will erase your personal data unless
            retention is required for legal, regulatory, or legitimate business
            purposes (such as pending grievances, disputes, or statutory
            record-keeping requirements).
            {/* TODO (from Word doc): confirm whether there are specific retention periods for each category of personal data. */}
          </p>

          <h2>8. DATA SECURITY</h2>
          <p>
            We implement reasonable security practices and procedures, including
            administrative, technical, and physical safeguards, which are
            designed to protect your personal data against unauthorised access,
            alteration, disclosure, or destruction, commensurate with the
            sensitivity of the information. However, no method of transmission
            over the internet or electronic storage is completely secure, and we
            cannot guarantee absolute security. In the event of a personal data
            breach, Karya shall take such steps as are required under the DPDP
            Act, including notifying the Data Protection Board of India and
            affected Customers, where applicable, within the timelines
            prescribed under applicable law.
          </p>

          <h2>9. RIGHTS OF DATA PRINCIPALS</h2>
          <p>
            Subject to the provisions of the DPDP Act, you, as a Data Principal,
            have the right to:
          </p>
          <ol type="a">
            <li>
              obtain a summary of the personal data processed and the processing
              activities undertaken by Karya;
            </li>
            <li>
              seek correction, completion, and updating of your personal data;
            </li>
            <li>
              seek erasure of personal data that is no longer necessary for the
              purpose for which it was processed, subject to any legal retention
              requirements;
            </li>
            <li>
              withdraw consent at any time, without affecting the lawfulness of
              processing carried out prior to such withdrawal;
            </li>
            <li>
              nominate another individual to exercise these rights in the event
              of your death or incapacity; and
            </li>
            <li>
              register a grievance with Karya’s Grievance Officer, and
              thereafter, if unresolved, with the Data Protection Board of
              India.
            </li>
          </ol>
          <p>
            You may exercise these rights by writing to us at the contact
            details set out in Clause 12 below.
          </p>

          <h2>10. COOKIES AND TRACKING TECHNOLOGIES</h2>
          <p>
            The Platform may use cookies, software development kits (SDKs),
            pixels, and similar tracking technologies to recognise your device,
            remember your preferences, understand how you use the Platform, and
            improve your experience, including for analytics and, where
            applicable, personalised advertising. You may control or disable
            cookies through your browser or device settings; however, doing so
            may affect the functionality of the Platform.
            {/* TODO (from Word doc): list the specific analytics/advertising SDKs used (e.g., Google Analytics, Firebase, Meta Pixel) and add a cookie consent banner mechanism for the website. */}
          </p>

          <h2>11. MARKETING COMMUNICATIONS</h2>
          <p>
            We may send you promotional and marketing communications relating to
            the Platform, offers, and loyalty programmes, in accordance with
            applicable law, including the Telecom Commercial Communications
            Customer Preference Regulations. You may opt out of promotional
            communications at any time through the Platform, by replying “STOP”
            to messages where indicated, or by contacting us. Operational and
            service-related communications necessary for the provision of the
            Services, security alerts, and legal or regulatory communications
            cannot be opted out of.
          </p>

          <h2>12. GRIEVANCE OFFICER AND CONTACT DETAILS</h2>
          <p>
            In accordance with the Consumer Protection (E-Commerce) Rules, 2020,
            the Information Technology Act, 2000 and rules made thereunder, and
            the Digital Personal Data Protection Act, 2023, Karya has appointed
            a Grievance Officer to address complaints and grievances relating to
            the Platform, including in relation to the processing of personal
            data. The details of the Grievance Officer are as follows:
          </p>
          <p>
            Name: Vikas
            <br />
            Designation: Grievance Officer
            <br />
            Email:{" "}
            <a href="mailto:admin@karyasync.com">admin@karyasync.com</a>
            <br />
            Address: House No. 14A, Ashoka Society, Vasundhara, Ghaziabad, Uttar
            Pradesh, India
          </p>
          <p>
            We shall acknowledge receipt of any grievance within 48
            (forty-eight) hours and endeavour to resolve it within 1 (one) month
            from the date of receipt, or such other period as may be prescribed
            under applicable law.
            {/* TODO (from Word doc): confirm the Grievance Officer details ("GO or new one"). */}
          </p>
          <p>
            This grievance redressal mechanism is in addition to, and not in
            substitution of, any right or remedy available to you under the
            Consumer Protection Act, 2019, the DPDP Act, or any other applicable
            law, including the right to approach a Consumer Disputes Redressal
            Commission or the Data Protection Board of India.
          </p>

          <h2>13. CHILDREN’S PRIVACY</h2>
          <p>
            The Platform is intended for use only by individuals who are at
            least 18 (eighteen) years of age and legally competent to enter into
            a binding contract. We do not knowingly collect personal data from
            individuals below the age of 18. If we become aware that we have
            inadvertently collected personal data of a minor without verifiable
            parental or guardian consent, we will take reasonable steps to
            delete such data.
          </p>

          <h2>14. THIRD-PARTY LINKS AND SERVICES</h2>
          <p>
            The Platform may contain links to, or integrations with, third-party
            websites, applications, or services, including payment gateways and
            mapping services. This Privacy Policy does not apply to such
            third-party services, and we encourage you to review their
            respective privacy policies. We are not responsible for the privacy
            practices of any third party.
          </p>

          <h2>15. CHANGES TO THIS PRIVACY POLICY</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in law, our data practices, or the Services offered.
            Material changes shall become effective upon publication on the
            Platform, or such other date as may be notified by us, unless
            immediate implementation is required by law. Your continued use of
            the Platform after such changes shall constitute your acceptance of
            the revised Privacy Policy.
          </p>

          <h2>16. GOVERNING LAW AND JURISDICTION</h2>
          <p>
            This Privacy Policy shall be governed by and construed in accordance
            with the laws of India. Any dispute arising out of or relating to
            this Privacy Policy shall be subject to the dispute resolution and
            jurisdiction provisions set out in our Terms and Conditions, without
            prejudice to any statutory right or remedy available to you under
            the Consumer Protection Act, 2019, the DPDP Act, or other applicable
            law.
          </p>

          <h2>17. CONTACT US</h2>
          <p>
            If you have any questions, concerns, or requests relating to this
            Privacy Policy or the processing of your personal data, please
            contact us at:
          </p>
          <p>
            <strong>Karya Sync Private Limited</strong>
            <br />
            Email:{" "}
            <a href="mailto:admin@karyasync.com">admin@karyasync.com</a>
            <br />
            Registered Office: House No. 14A, Ashoka Society, Vasundhara,
            Ghaziabad, Uttar Pradesh, India
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}