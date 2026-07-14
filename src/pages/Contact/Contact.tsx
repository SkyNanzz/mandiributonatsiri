import { useState, type FormEvent } from 'react';
import { FiSend, FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './Contact.css';

function HeroSection() {
  return (
    <section className="contact-hero">
      <div className="contact-hero__bg" />
      <div className="contact-hero__content container">
        <span className="contact-hero__badge">Hubungi Kami</span>
        <h1 className="contact-hero__title">
          Mari <span className="contact-hero__accent">Berkolaborasi</span>
        </h1>
        <p className="contact-hero__subtitle">
          Punya pertanyaan atau ingin memulai kerjasama? Tim kami siap membantu Anda.
        </p>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact-form__success">
        <div className="contact-form__success-icon">✓</div>
        <h3>Pesan Terkirim!</h3>
        <p>Terima kasih telah menghubungi kami. Tim MBA Mandiri Buton Atsiri akan merespons pesan Anda dalam 1x24 jam.</p>
        <button className="btn btn--primary" onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', company: '', message: '' }); }}>
          Kirim Pesan Lagi
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <div className="contact-form__group">
          <label htmlFor="name" className="contact-form__label">Nama Lengkap *</label>
          <input
            id="name"
            type="text"
            className="contact-form__input"
            placeholder="Masukkan nama Anda"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="contact-form__group">
          <label htmlFor="email" className="contact-form__label">Email *</label>
          <input
            id="email"
            type="email"
            className="contact-form__input"
            placeholder="contoh@email.com"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>
      <div className="contact-form__row">
        <div className="contact-form__group">
          <label htmlFor="phone" className="contact-form__label">Nomor Telepon</label>
          <input
            id="phone"
            type="tel"
            className="contact-form__input"
            placeholder="+62 8xx-xxxx-xxxx"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div className="contact-form__group">
          <label htmlFor="company" className="contact-form__label">Perusahaan</label>
          <input
            id="company"
            type="text"
            className="contact-form__input"
            placeholder="Nama perusahaan (opsional)"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
      </div>
      <div className="contact-form__group">
        <label htmlFor="message" className="contact-form__label">Pesan *</label>
        <textarea
          id="message"
          className="contact-form__textarea"
          placeholder="Tulis pesan Anda di sini..."
          rows={5}
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>
      <button type="submit" className="btn btn--primary contact-form__submit">
        <FiSend /> Kirim Pesan
      </button>
    </form>
  );
}

function InfoCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="contact-info__card">
      <div className="contact-info__icon">{icon}</div>
      <h3 className="contact-info__label">{title}</h3>
      <div className="contact-info__value">{children}</div>
    </div>
  );
}

export function Contact() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <>
      <HeroSection />
      <section className="section">
        <div className="container">
          <SectionTitle
            title="Kontak Kami"
            subtitle="Jangan ragu untuk menghubungi kami. Kami siap mendengar kebutuhan Anda."
          />

          <div className="contact__grid">
            {/* Form */}
            <div className="contact__form-wrapper">
              <ContactForm />
            </div>

            {/* Info */}
            <div className="contact__info-wrapper">
              <div className="contact-info">
                <InfoCard icon={<FiMapPin size={22} />} title="Alamat">
                  <p>Jl. Poros Buton No. 123</p>
                  <p>Baubau, Sulawesi Tenggara</p>
                  <p>Indonesia 93726</p>
                </InfoCard>

                <InfoCard icon={<FiPhone size={22} />} title="Telepon">
                  <a href="tel:+6281234567890">+62 812-3456-7890</a>
                  <a href="tel:+6281234567891">+62 812-3456-7891</a>
                </InfoCard>

                <InfoCard icon={<FiMail size={22} />} title="Email">
                  <a href="mailto:info@mbamandiri.com">info@mbamandiri.com</a>
                  <a href="mailto:export@mbamandiri.com">export@mbamandiri.com</a>
                </InfoCard>

                <InfoCard icon={<FiClock size={22} />} title="Jam Operasional">
                  <p>Senin - Jumat: 08:00 - 17:00 WITA</p>
                  <p>Sabtu: 08:00 - 14:00 WITA</p>
                </InfoCard>

                <a
                  href="https://wa.me/6281234567890?text=Halo%20MBA%20Mandiri%20Buton%20Atsiri!%20Saya%20tertarik%20dengan%20produk%20minyak%20atsiri%20Anda."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info__whatsapp"
                >
                  <FaWhatsappIcon /> Hubungi via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section" ref={ref}>
        <div className="container">
          <SectionTitle
            title="Lokasi Kami"
            subtitle="Kunjungi kantor kami di Baubau, Sulawesi Tenggara."
          />
        </div>
        <div className={`contact__map reveal ${isVisible ? 'visible' : ''}`}>
          <iframe
            title="Lokasi MBA Mandiri Buton Atsiri"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127292.88899999997!2d122.698!3d-5.477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2da15f62d9b7e6b9%3A0x3c9b9c9c9c9c9c9c!2sBaubau%2C%20Baubau%20City%2C%20Southeast%20Sulawesi!5e0!3m2!1sen!2sid!4v1"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '16px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function FaWhatsappIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
