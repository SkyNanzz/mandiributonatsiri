import { FiTarget, FiEye, FiHeart, FiShield, FiAward, FiUsers, FiGlobe } from 'react-icons/fi';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './About.css';

function HeroSection() {
  return (
    <section className="about-hero">
      <div className="about-hero__bg" />
      <div className="about-hero__content container">
        <span className="about-hero__badge">Tentang Kami</span>
        <h1 className="about-hero__title">
          Mewariskan <span className="about-hero__accent">Keharuman</span> Nusantara
        </h1>
        <p className="about-hero__subtitle">
          Berawal dari kekayaan alam Sulawesi Tenggara, kami hadir untuk membawa minyak atsiri
          Indonesia ke panggung dunia dengan kualitas premium dan keberlanjutan.
        </p>
      </div>
    </section>
  );
}

function StorySection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="section story" ref={ref}>
      <div className="container">
        <div className={`story__grid reveal ${isVisible ? 'visible' : ''}`}>
          <div className="story__content">
            <SectionTitle
              title="Sejarah Kami"
              subtitle="Perjalanan panjang dalam membangun industri minyak atsiri Indonesia yang berkelas dunia."
              center={false}
            />
            <p className="story__text">
              MBA Mandiri Buton Atsiri didirikan pada tahun 2015 di Baubau, Sulawesi Tenggara,
              oleh sekelompok ahli yang memiliki visi untuk mengembangkan potensi minyak atsiri
              Indonesia yang selama ini kurang tergarap secara maksimal.
            </p>
            <p className="story__text">
              Berawal dari perkebunan nilam seluas 50 hektar, perusahaan terus berkembang hingga
              kini mengelola lebih dari 500 hektar perkebunan dan telah menjalin kemitraan dengan
              lebih dari 500 petani binaan di seluruh Sulawesi Tenggara.
            </p>
            <p className="story__text">
              Dengan teknologi distilasi modern dan kontrol kualitas yang ketat, produk-produk kami
              kini telah menembus pasar internasional dan dipercaya oleh berbagai perusahaan terkemuka
              di Eropa, Asia, dan Timur Tengah.
            </p>
          </div>
          <div className="story__image">
            <img
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80"
              alt="Perkebunan nilam hijau yang luas"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function VisiMisiSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section className="section section-alt visi-misi" ref={ref}>
      <div className="container">
        <SectionTitle
          title="Visi & Misi"
          subtitle="Semangat dan arah yang memandu setiap langkah kami."
        />
        <div className={`visi-misi__grid reveal ${isVisible ? 'visible' : ''}`}>
          <div className="visi-misi__card visi-misi__card--visi">
            <div className="visi-misi__icon">
              <FiEye size={28} />
            </div>
            <h3 className="visi-misi__title">Visi</h3>
            <p className="visi-misi__text">
              Menjadi perusahaan minyak atsiri premium terkemuka yang membawa kekayaan
              alam Indonesia ke panggung dunia dengan standar kualitas internasional dan
              praktik bisnis berkelanjutan.
            </p>
          </div>
          <div className="visi-misi__card visi-misi__card--misi">
            <div className="visi-misi__icon">
              <FiTarget size={28} />
            </div>
            <h3 className="visi-misi__title">Misi</h3>
            <ul className="visi-misi__list">
              <li>Memproduksi minyak atsiri berkualitas premium standar ekspor</li>
              <li>Memberdayakan petani lokal melalui program kemitraan berkelanjutan</li>
              <li>Menerapkan teknologi ramah lingkungan dalam setiap proses produksi</li>
              <li>Memperluas jaringan pemasaran global untuk produk atsiri Indonesia</li>
              <li>Berkontribusi dalam pelestarian keanekaragaman hayati Nusantara</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function NilaiSection() {
  const { ref, isVisible } = useIntersectionObserver();

  const values = [
    { icon: <FiAward size={24} />, title: 'Alam & Keberlanjutan', desc: 'Menjaga kelestarian alam dengan praktik pertanian dan produksi yang bertanggung jawab.' },
    { icon: <FiShield size={24} />, title: 'Kualitas Tanpa Kompromi', desc: 'Setiap tetes minyak atsiri melalui pengujian ketat untuk memastikan kemurnian dan kualitas.' },
    { icon: <FiHeart size={24} />, title: 'Pemberdayaan Masyarakat', desc: 'Membangun kemitraan yang adil dan berkelanjutan bersama petani dan komunitas lokal.' },
    { icon: <FiUsers size={24} />, title: 'Integritas & Kepercayaan', desc: 'Menjunjung tinggi kejujuran, transparansi, dan etika dalam setiap hubungan bisnis.' },
    { icon: <FiGlobe size={24} />, title: 'Wawasan Global', desc: 'Berkomitmen untuk bersaing di pasar internasional dengan standar kelas dunia.' },
  ];

  return (
    <section className="section nilai" ref={ref}>
      <div className="container">
        <SectionTitle
          title="Nilai Perusahaan"
          subtitle="Prinsip-prinsip yang menjadi fondasi setiap langkah kami."
        />
        <div className={`nilai__grid reveal ${isVisible ? 'visible' : ''}`}>
          {values.map((v, i) => (
            <div key={i} className={`nilai__card reveal-delay-${i + 1}`}>
              <div className="nilai__icon">{v.icon}</div>
              <h3 className="nilai__title">{v.title}</h3>
              <p className="nilai__desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const { ref, isVisible } = useIntersectionObserver();

  const milestones = [
    { year: '2015', title: 'Berdirinya Perusahaan', desc: 'MBA Mandiri Buton Atsiri didirikan di Baubau, Sulawesi Tenggara dengan perkebunan nilam awal seluas 50 hektar.' },
    { year: '2017', title: 'Ekspor Perdana', desc: 'Pengiriman perdana minyak nilam ke pasar Malaysia dan Singapura menandai awal perjalanan ekspor perusahaan.' },
    { year: '2019', title: 'Sertifikasi ISO', desc: 'Meraih sertifikasi ISO 9001:2015 untuk sistem manajemen mutu dan ISO 14001 untuk manajemen lingkungan.' },
    { year: '2021', title: 'Ekspansi Pasar Eropa', desc: 'Memasuki pasar Eropa dengan kerjasama strategis bersama perusahaan parfum di Prancis dan Spanyol.' },
    { year: '2023', title: '500 Petani Binaan', desc: 'Program kemitraan mencapai 500 petani binaan dengan total lahan lebih dari 500 hektar.' },
    { year: '2025', title: 'Sertifikasi Organik', desc: 'Meraih sertifikasi organik internasional untuk produk minyak atsiri, membuka akses ke pasar premium global.' },
  ];

  return (
    <section className="section timeline" ref={ref}>
      <div className="container">
        <SectionTitle
          title="Perjalanan Kami"
          subtitle="Setiap langkah adalah bagian dari cerita menuju puncak."
        />
        <div className={`timeline__grid reveal ${isVisible ? 'visible' : ''}`}>
          <div className="timeline__line" aria-hidden="true" />
          {milestones.map((m, i) => (
            <div key={i} className={`timeline__item ${i % 2 === 0 ? 'timeline__item--left' : 'timeline__item--right'} reveal-delay-${Math.min(i + 1, 5)}`}>
              <div className="timeline__dot" aria-hidden="true" />
              <div className="timeline__card">
                <span className="timeline__year">{m.year}</span>
                <h3 className="timeline__title">{m.title}</h3>
                <p className="timeline__desc">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <VisiMisiSection />
      <NilaiSection />
      <TimelineSection />
    </>
  );
}
