import React from "react";
import ContactForm from "./contact-form";

const Contact = () => {
  return (
    <section className="app-container py-[100px]">
      <header>
        <h1 className="text-indigo-50 text-5xl font-serif mb-5">
          Got an idea? <br /> Let&apos;s bring it to life.
        </h1>
        <h2 className="text-2xl text-indigo-300">
          Whether it&apos;s a bug fix or a brand new app, drop us a
          message—we&apos;ll reply fast.
        </h2>
      </header>
      <ContactForm />
    </section>
  );
};

export default Contact;
