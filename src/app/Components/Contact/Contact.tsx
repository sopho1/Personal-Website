'use client';

import React, { useRef, useState, useEffect } from 'react';
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt,
  FaLinkedin, FaGithub, FaTwitter,
  FaTelegram, FaInstagram, FaFacebook
} from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    const loadingToast = toast.loading('Sending Email ...');

    await emailjs.sendForm('service_g4anveq', 'template_57fj0tn', form.current, 'fGW7JddoHXUT8_hFz')
      .then(() => {
        toast.success('Email sent successfully!', { id: loadingToast });
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => {
        toast.error('Error sending email. Please try again later.', { id: loadingToast });
      })
      .finally(() => setLoading(false));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section
      id="contact"
      className={`px-4 py-20 transition-all duration-800 ease-in-out bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-[#64ffda] text-center mb-4 relative after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-[#64ffda]">
          Contact Me
        </h2>
        <p className="text-center text-[#8892b0] text-base md:text-lg max-w-xl mx-auto mb-12">
          Whether it’s a freelance opportunity, a collaboration, or just to say hi — drop me a message below. I’ll get back to you as soon as I can.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { Icon: FaEnvelope, title: 'Email', content: 'sophoman215@gmail.com' },
              { Icon: FaPhone, title: 'Phone', content: '+251 929 29 4073' },
              { Icon: FaMapMarkerAlt, title: 'Location', content: 'Addis Ababa, Ethiopia' }
            ].map(({ Icon, title, content }, i) => (
              <div
                key={i}
                className="relative overflow-hidden border border-[#64ffda1a] bg-[#1a1a2ecc] rounded-xl p-8 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-[#64ffda4d]"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-[#64ffda1a] text-[#64ffda] text-xl">
                  <Icon />
                </div>
                <h3 className="text-[#64ffda] text-xl mb-2">{title}</h3>
                <p className="text-[#8892b0] text-base hover:text-[#ccd6f6] transition-all">
                  {content}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-[#1a1a2ecc] p-8 rounded-xl border border-[#64ffda1a] w-full">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-[#64ffda] mb-2">Send me a message</h3>
              <p className="text-[#8892b0] text-sm">
                I'd love to hear from you. Fill out the form below and let’s chat!
              </p>
            </div>

            <form ref={form} onSubmit={handleSubmit} className="space-y-5">
              {['name', 'email', 'subject'].map((field) => (
                <input
                  key={field}
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                  required
                  className="w-full p-4 rounded-md border border-[#64ffda1a] bg-[#1e293b] text-white placeholder-[#8892b0] focus:outline-none focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda] transition-all"
                />
              ))}
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full p-4 min-h-[150px] rounded-md border border-[#64ffda1a] bg-[#1e293b] text-white placeholder-[#8892b0] focus:outline-none focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda] transition-all resize-y"
              />
              <input type="hidden" name="reply_to" value={formData.email} />

              <button
                type="submit"
                disabled={loading}
                className="relative inline-block w-full text-center text-[#64ffda] border border-[#64ffda] px-6 py-3 rounded-md overflow-hidden transition-all duration-300 hover:bg-[#64ffda1a] hover:scale-[1.02] shadow-md"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 flex-wrap mt-12">
          {[
            { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/sophonias-endale-36b28617a' },
            { Icon: FaGithub, href: 'https://github.com/sopho1' },
            { Icon: FaTwitter, href: 'https://x.com/ManSopho' },
            { Icon: FaTelegram, href: 'https://t.me/sofo1' },
            { Icon: FaInstagram, href: 'https://www.instagram.com/sopho.endale' },
            { Icon: FaFacebook, href: 'https://www.facebook.com/sopho.endale' }
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border border-[#64ffda1a] bg-[#1a1a2ecc] text-[#64ffda] text-xl transition-all duration-300 hover:scale-110 hover:translate-y-[-4px] hover:bg-[#64ffda1a] hover:border-[#64ffda4d] shadow-md"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
