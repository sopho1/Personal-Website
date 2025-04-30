'use client';

import React, {useRef} from 'react';
import { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter, FaTelegram, FaInstagram, FaFacebook, FaWhatsapp, FaViber } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import './Contact.css';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setloading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setloading(true);

    const loadingToast = toast.loading('Sending Email ...');

    await emailjs.sendForm('service_g4anveq', 'template_57fj0tn', form.current, 'fGW7JddoHXUT8_hFz')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        toast.success('Email sent successfully!', { id: loadingToast });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error.text);
        toast.error('Error sending email. Please try again later.', { id: loadingToast });
      } )
      .finally(() => {
        setloading(false);
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className={`contact ${isVisible ? 'visible' : ''}`} id='contact'>
      <div className="contact-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-description">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>sophoman215@gmail.com</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaPhone />
              </div>
              <h3>Phone</h3>
              <p>+251 929 29 4073</p>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <h3>Location</h3>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>

          <div className="contact-form-container">
            <form ref={form} className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                />
              </div>
              <input type="hidden" name="reply_to" value={formData.email} />
              <button type="submit" className="submit-btn" disabled={loading}>
                { loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        <div className="social-links">
          <a href="https://www.linkedin.com/in/sophonias-endale-36b28617a" className="social-link" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/sopho1" className="social-link" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://x.com/ManSopho" className="social-link" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://t.me/sofo1" className="social-link" aria-label="Twitter">
            <FaTelegram />
          </a>
          <a href="https://www.instagram.com/sopho.endale" className="social-link" aria-label="Twitter">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/sopho.endale" className="social-link" aria-label="Twitter">
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
