import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import styles from "@/app/privacy-policy/privacy-policy.module.scss";
import heroBg from "@/assets/images/hero-section-bg-banner.png";
import heroImg from "@/assets/images/karya-heros.png";

export default function PartnersPolicy() {
  return (
    <>
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
          <h1>Service Partners Privacy Policy</h1>
          <span className={styles.updatedBadge}>
            Last Updated: 1st July, 2026
          </span>
          <p>This Privacy Policy describes how Karya Sync Private Limited (“Karya”, “we”, “our” or “us”) collects, uses, stores, processes, discloses and protects personal data of Service Partners using the Karya Sync platform, website and mobile application (“Platform”). By registering on or using the Platform, you consent to this Privacy Policy and the processing activities described herein. At Karya Sync, we are committed to protecting your personal data and respecting your privacy. In order to provide you with Services, we have to collect and otherwise process certain data about you. This Policy explains how we process and use personal data about you.</p>
          <h2>1. Background and Applicability</h2>
          <p>This Policy applies to all service partners who register, onboard, or use the Platform to provide services to customers. For any queries, grievances or privacy requests, contact: <a href="mailto:karyasync@gmail.com">karyasync@gmail.com</a>.</p>
          <p>This information is processed only to the extent reasonably necessary for providing services, maintaining platform integrity, ensuring safety and complying with applicable laws. It should be read with the Service Partner Agreement, Terms & Conditions and other policies issued by Karya.</p>
          <p>Karya may amend this Policy from time to time. Continued use of the Platform after notification of changes shall constitute acceptance.</p>
          <h2>2. Personal Data Collected</h2>
          <ul>
            <li><strong>Identity Information:</strong> name, photograph, DOB, gender, Aadhaar/PAN/Driving Licence/Voter ID and other KYC documents.</li>
            <li><strong>Contact Information:</strong> mobile number, email address, permanent/current address, emergency contact details.</li>
            <li><strong>Professional Information:</strong> qualifications, experience, certifications, language preferences, service categories, profile content, photographs and videos.</li>
            <li><strong>Verification Information:</strong> police verification, background checks, references and onboarding records.</li>
            <li><strong>Financial Information:</strong> bank account details, UPI details, GST/PAN information and payout details.</li>
            <li><strong>Technical Information:</strong> IP address, device information, browser type, operating system, app version and location information.</li>
            <li><strong>Usage Information:</strong> booking history, ratings, reviews, customer feedback, support interactions, call recordings and chats.</li>
          </ul>
          <h2>3. Methods of Collection</h2>
          <p>Data is collected directly during onboarding, KYC, account creation, customer support interactions and use of the Platform. Karya may also collect data automatically through cookies, logs and analytics tools. Data may also be received from payment gateways, KYC providers, background verification agencies and publicly available sources.</p>
          <h2>4. Purposes of Processing</h2>
          <p>Identity verification and onboarding; account administration; lead allocation; payment processing; customer support; fraud prevention; dispute resolution; legal compliance; analytics; service quality monitoring; marketing; and platform improvement.</p>
          <h2>5. Cookies and Analytics</h2>
          <p>Cookies are small files that a site or its service provider transfers to your device’s hard drive through your web browser (if you permit it to) that enables the sites or service provider’s systems to recognise your browser and capture and remember certain information. Karya may use cookies, pixels and similar technologies to improve functionality, remember preferences and analyse Platform usage.</p>
          <h2>6. Disclosure of Personal Data</h2>
          <p>Karya may disclose data to affiliates, payment processors, cloud providers, verification agencies, analytics providers, legal advisors, auditors, regulators, law-enforcement authorities and customers where necessary for providing services or complying with law.</p>
          <h2>7. Data Security</h2>
          <p>Karya implements reasonable technical and organisational safeguards including access controls, encryption, secure servers and restricted access measures. However, no electronic system is completely secure and absolute security cannot be guaranteed.</p>
          <h2>8. Your Rights</h2>
          <p>Subject to applicable law, you may request access, correction, updation or deletion of personal data, withdraw consent where permissible, and raise grievances by emailing <a href="mailto:karyasync@gmail.com">karyasync@gmail.com</a>.</p>
          <h2>9. Cross-Border Transfers</h2>
          <p>Personal data may be processed or stored outside India through service providers. Karya shall implement reasonable safeguards as required by applicable law.</p>
          <h2>10. Data Retention</h2>
          <p>Personal data shall be retained for as long as reasonably necessary for contractual, operational, legal, regulatory, fraud prevention and dispute resolution purposes.</p>
          <h2>11. Account Deletion</h2>
          <p>You may request deletion of your account by emailing <a href="mailto:karyasync@gmail.com">karyasync@gmail.com</a>. Certain information may continue to be retained where required by law or for legitimate business purposes.</p>
          <h2>12. Children’s Privacy</h2>
          <p>The Platform is intended only for individuals aged 18 years or above. Karya does not knowingly collect data from minors.</p>
          <h2>13. Business Transitions</h2>
          <p>In the event of merger, acquisition, restructuring or sale of business, personal data may be transferred as part of such transaction.</p>
          <h2>14. Grievance Officer</h2>
          <p>Grievance Officer: To be designated by Karya.<br />Email: <a href="mailto:karyasync@gmail.com">karyasync@gmail.com</a><br />Address: Registered Office of Karya Sync Private Limited.</p>
          <h2>15. Governing Law</h2>
          <p>This Policy shall be governed by the laws of India.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}