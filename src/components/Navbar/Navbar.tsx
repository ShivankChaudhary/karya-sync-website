"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Navbar.module.scss";

type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  links: NavLink[];
};

export default function Navbar({ links }: NavbarProps) {
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScroll = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll.current && currentScroll > 80) {
        setVisible(false);
        setMobileMenuOpen(false); // Close menu on scroll
      } else {
        setVisible(true);
      }
      lastScroll.current = currentScroll;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setVisible(true), 1200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header
        className={`${styles.navbar} ${visible ? styles.visible : styles.hidden}`}
      >
        <div className={`container ${styles.navbarOuter}`}>
          <div className={styles.pill}>
            <button
              className={styles.hamburger}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <span
                className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.open : ""}`}
              ></span>
              <span
                className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.open : ""}`}
              ></span>
              <span
                className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.open : ""}`}
              ></span>
            </button>
            <a href="/" className={styles.brand}>
              <Image
                src="/assets/images/logo.png"
                alt="Karya Sync Logo"
                width={32}
                height={32}
                className={styles.logo}
                style={{ marginRight: 8 }}
              />
              <span>Karya Sync</span>
            </a>
            <nav className={styles.nav} aria-label="Primary">
              {links.map((link) => (
                <a key={link.href} href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ""}`}
        aria-label="Mobile navigation"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileNavLink}
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
