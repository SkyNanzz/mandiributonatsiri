import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppButton.css';

export function WhatsAppButton() {
  const phoneNumber = '6281234567890';
  const message = encodeURIComponent('Halo MBA Mandiri Buton Atsiri! Saya tertarik dengan produk minyak atsiri Anda.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Hubungi kami via WhatsApp"
      title="Hubungi via WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>
  );
}
