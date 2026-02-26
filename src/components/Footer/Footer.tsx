import styles from "./Footer.module.scss";

import { footerLinks, socialLinks } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.emailSection}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 7l9 6 9-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <a href="mailto:karyasync@gmail.com">karyasync@gmail.com</a>
          <span className={styles.separator}>|</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 16.92v3a2 2 0 01-2.18 2
       19.79 19.79 0 01-8.63-3.07
       19.5 19.5 0 01-6-6
       19.79 19.79 0 01-3.07-8.67
       A2 2 0 014.11 2h3
       a2 2 0 012 1.72
       12.84 12.84 0 00.7 2.81
       a2 2 0 01-.45 2.11L8.09 9.91
       a16 16 0 006 6l1.27-1.27
       a2 2 0 012.11-.45
       12.84 12.84 0 002.81.7
       A2 2 0 0122 16.92z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <a href="tel:+917678112184">+91 7678112184</a>
          <span className={styles.separator}>|</span>
          <a href="/contact-us" target="_blank">
            Contact Us
          </a>
        </div>

        <div className={styles.legalLinks}>
          <a href={footerLinks.terms} target="_blank">
            Terms & Conditions
          </a>
          <span className={styles.separator}>|</span>
          <a href={footerLinks.privacy} target="_blank">
            Privacy Policy
          </a>
        </div>

        <div className={styles.socials}>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.socialBadge}
              title={link.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label === "Facebook" && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              )}

              {link.label === "Instagram" && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.9a1.1 1.1 0 100 2.2 1.1 1.1 0 000-2.2z" />
                </svg>
              )}

              {link.label === "YouTube" && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              )}

              {link.label === "LinkedIn" && (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.123 2.062 2.062 0 010 4.123zM6.813 20.452H3.861V9h2.952v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.273V1.727C24 .774 23.2 0 22.222 0z" />
                </svg>
              )}
            </a>
          ))}
        </div>

        <div className={styles.copyright}>
          © 2026 KARYA SYNC PRIVATE LIMITED. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
