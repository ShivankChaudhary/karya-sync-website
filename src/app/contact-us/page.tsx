"use client";
import { useState, FormEvent } from "react";
import styles from "./contact-us.module.scss";
import { contactUs } from "@/api/contactUs";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    desiredService: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phoneNumber: "",
    desiredService: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  // const validateEmail = (email: string) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(email);
  // };

  const validateForm = () => {
    const newErrors = {
      name: "",
      phoneNumber: "",
      desiredService: "",
      email: "",
      message: "",
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
      isValid = false;
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    if (!formData.desiredService) {
      newErrors.desiredService = "Service is required";
      isValid = false;
    }

    // if (!formData.email.trim()) {
    //   newErrors.email = "Email is required";
    //   isValid = false;
    // } else if (!validateEmail(formData.email)) {
    //   newErrors.email = "Please enter a valid email";
    //   isValid = false;
    // }

    // Message is optional, no validation needed

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    const { data, error } = await contactUs(formData);
    debugger;
    setIsLoading(false);

    if (error) {
      alert("Error sending request - Please try again.");
      return;
    }

    // clear any previous
    //  errors befssore showing success

    setIsSuccess(true);

    // Reset form
    setFormData({
      name: "",
      phoneNumber: "",
      desiredService: "",
      email: "",
      message: "",
    });

    // Hide success message after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <div className={styles.contactPage}>
      {/* <div className={styles.topBadge}>📞 24/7 Support</div> */}

      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>We're here to help</h1>
          <p className={styles.subtitle}>
            Need help? Our support team is available 24/7.
          </p>
        </div>

        {/* <div className={styles.contactCards}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Email Us</h3>
            <a href="mailto:help@karyasync.com" className={styles.cardButton}>
              help@karyasync.com
            </a>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Customer Support</h3>
            <a href="tel:+919910483315" className={styles.cardButton}>
              +91 99104 83315
            </a>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Professional Support</h3>
            <a href="tel:+918065920356" className={styles.cardButton}>
              +91 8065920356
            </a>
          </div>
        </div> */}

        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>Send us a message</h2>

          {isSuccess && (
            <div className={styles.successMessage}>
              <span className={styles.successIcon}>✓</span>
              <p>
                Request sent successfully! Our support team will contact you
                soon.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Name <span className={styles.required}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                placeholder="Enter your full name"
                disabled={isLoading}
              />
              {errors.name && (
                <span className={styles.errorText}>{errors.name}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phoneNumber" className={styles.label}>
                Phone Number <span className={styles.required}>*</span>
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                onInput={(e) => {
                  // strip non-digits as user types
                  const target = e.target as HTMLInputElement;
                  target.value = target.value.replace(/[^0-9]/g, "");
                }}
                inputMode="numeric"
                pattern="[0-9]*"
                className={`${styles.input} ${errors.phoneNumber ? styles.inputError : ""}`}
                placeholder="Enter your 10-digit phone number"
                disabled={isLoading}
              />
              {errors.phoneNumber && (
                <span className={styles.errorText}>{errors.phoneNumber}</span>
              )}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="desiredService" className={styles.label}>
                Service <span className={styles.required}>*</span>
              </label>
              <select
                id="desiredService"
                name="desiredService"
                value={formData.desiredService}
                onChange={handleChange}
                className={`${styles.input} ${errors.desiredService ? styles.inputError : ""}`}
                disabled={isLoading}
              >
                <option value="">Select a service</option>
                <option value="Labour">Labour</option>
                <option value="Labour+Mistri">Labour+Mistri</option>
                <option value="Mistri">Mistri</option>
                <option value="Consultant">Consultant</option>
              </select>
              {errors.desiredService && (
                <span className={styles.errorText}>
                  {errors.desiredService}
                </span>
              )}
            </div>

            {/* <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                Email <span className={styles.required}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                placeholder="Enter your email address"
                disabled={isLoading}
              />
              {errors.email && (
                <span className={styles.errorText}>{errors.email}</span>
              )}
            </div> */}

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`${styles.textarea} ${errors.message ? styles.inputError : ""}`}
                placeholder="How can we help you?"
                rows={5}
                disabled={isLoading}
              />
              {errors.message && (
                <span className={styles.errorText}>{errors.message}</span>
              )}
            </div>

            <button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className={styles.loader}></span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>Feel free to reach us at:</p>
          <a href="mailto:karyasync@gmail.com" className={styles.footerEmail}>
            ✉️ karyasync@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
