import { useState } from 'react';

// ============================================================
// Web3Forms Setup (1 minute — no account needed):
// 1. Go to https://web3forms.com/#start
// 2. Enter your email: rehmantayyab0340@gmail.com
// 3. You'll receive an Access Key in your inbox
// 4. Paste it below replacing 'YOUR_ACCESS_KEY_HERE'
// ============================================================

const WEB3FORMS_ACCESS_KEY = '040ecaa2-91db-4657-96ec-ad7456e489b7';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const payload = {
      access_key: WEB3FORMS_ACCESS_KEY,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      subject: `New Contact Form Message from ${formData.name}`,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }

    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-content section-content">
        <p className="section-subtitle">Contact</p>

        <h2 className="h3 section-title">Have You Any Project? Please Drop a Message</h2>

        <p className="section-text">
          Get in touch and let me know how i can help. Fill out the form and i'll be in touch
          as soon as possible.
        </p>

        <ul className="contact-list">
          <li className="contact-list-item">
            <div className="contact-item-icon">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Address:</h3>
              <address className="contact-info">
                Islamabad, Pakistan
              </address>
            </div>
          </li>

          <li className="contact-list-item">
            <div className="contact-item-icon">
              <ion-icon name="call-outline"></ion-icon>
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Phone:</h3>
              <a href="tel:+923150626738" className="contact-info">(+92) 315-0626738</a>
            </div>
          </li>

          <li className="contact-list-item">
            <div className="contact-item-icon">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="wrapper">
              <h3 className="h4 contact-item-title">Email:</h3>
              <a href="mailto:rehmantayyab0340@gmail.com" className="contact-info">rehmantayyab0340@gmail.com</a>
            </div>
          </li>

          <li>
            <ul className="contac-social-list">
              <li>
                <a href="https://www.linkedin.com/in/tayyab-ur-rehman-dev" className="contact-social-link" target="_blank" rel="noopener noreferrer">
                  <div className="tooltip">LinkedIn</div>
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
              <li>
                <a href="https://github.com/Tayyab16203" className="contact-social-link" target="_blank" rel="noopener noreferrer">
                  <div className="tooltip">GitHub</div>
                  <ion-icon name="logo-github"></ion-icon>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <label htmlFor="name" className="form-label">Name</label>
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="e.g John Doe"
              className="input-field"
              value={formData.name}
              onChange={handleChange}
            />
            <ion-icon name="person-circle"></ion-icon>
          </div>
        </div>

        <div className="form-wrapper">
          <label htmlFor="email" className="form-label">Email</label>
          <div className="input-wrapper">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="e.g johndoe@mail.com"
              className="input-field"
              value={formData.email}
              onChange={handleChange}
            />
            <ion-icon name="mail"></ion-icon>
          </div>
        </div>

        <div className="form-wrapper">
          <label htmlFor="phone" className="form-label">Phone</label>
          <div className="input-wrapper">
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              placeholder="Phone Number"
              className="input-field"
              value={formData.phone}
              onChange={handleChange}
            />
            <ion-icon name="call"></ion-icon>
          </div>
        </div>

        <div className="form-wrapper">
          <label htmlFor="message" className="form-label">Message</label>
          <div className="input-wrapper">
            <textarea
              name="message"
              id="message"
              required
              placeholder="Write message..."
              className="input-field"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <ion-icon name="chatbubbles"></ion-icon>
          </div>
        </div>

        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send'}
        </button>

        {status === 'success' && (
          <p className="form-status success" style={{ color: '#28a745', marginTop: '1rem' }}>
            Message sent successfully! I'll get back to you soon.
          </p>
        )}
        {status === 'error' && (
          <p className="form-status error" style={{ color: '#dc3545', marginTop: '1rem' }}>
            Failed to send message. Please try again or email me directly.
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
