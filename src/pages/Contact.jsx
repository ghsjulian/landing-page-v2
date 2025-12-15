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
              Madhabpur Lake Road
              <br />
              Komolgonj, Maulovibazar
            </div>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <div>
              <strong>Phone</strong>
              <br />
              +8801712375356
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
              Mon–Thu: 08AM – 10PM
              <br />
              Fri–Sat: 10AM – 10PM
              <br />
              Sunday: 12PM – 09PM
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1381!2d91.8119636!3d24.280868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37517863f0495253%3A0x4c7363f131d34338!2sMadhabpur+Lake!5e0!3m2!1sen!2sbd!4v1734150000000"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
