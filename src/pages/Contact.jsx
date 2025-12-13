import React from "react";
import "../styles/contact-style.css";

const Contact = () => {
  return (
    <>
      <section className="hero">
        <h1>Contact Us</h1>
      </section>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>
            We'd love to hear from you! Send us a message and we'll respond as
            soon as possible.
          </p>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <strong>Address</strong>
              <br />
              456 Gourmet Street
              <br />
              Downtown Culinary District
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <div>
              <strong>Phone</strong>
              <br />
              +1 (555) 123-4567
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <div>
              <strong>Email</strong>
              <br />
              hello@savore.com
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-clock"></i>
            <div>
              <strong>Hours</strong>
              <br />
              Mon–Thu: 11am – 10pm
              <br />
              Fri–Sat: 11am – 11pm
              <br />
              Sunday: 12pm – 9pm
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h3>Send a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.24126418748!2d-73.988231685177!3d40.748440979328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a31f5f3!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1698765432100!5m2!1sen!2sus"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
