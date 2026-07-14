import type { Article } from '../types';

export const articles: Article[] = [
  {
    id: 1,
    title: 'MBA Mandiri Buton Atsiri Ekspor Perdana Minyak Nilam ke Prancis',
    summary:
      'Perusahaan mencapai tonggak sejarah baru dengan pengiriman perdana 20 ton minyak nilam berkualitas premium ke industri parfum Prancis.',
    date: '2026-06-15',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
    category: 'Ekspor',
    slug: 'ekspor-perdana-minyak-nilam',
  },
  {
    id: 2,
    title: 'Inovasi Distilasi Ramah Lingkungan dari Buton',
    summary:
      'MBA Mandiri Buton Atsiri meluncurkan teknologi distilasi uap bertenaga surya, mengurangi emisi karbon hingga 40% dalam proses produksi minyak atsiri.',
    date: '2026-05-22',
    image: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80',
    category: 'Inovasi',
    slug: 'inovasi-distilasi-ramah-lingkungan',
  },
  {
    id: 3,
    title: 'Pemberdayaan 500 Petani Nilam di Sulawesi Tenggara',
    summary:
      'Program kemitraan berkelanjutan bersama petani lokal berhasil meningkatkan kualitas dan kuantitas produksi nilam di wilayah Buton dan sekitarnya.',
    date: '2026-04-10',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80',
    category: 'Sosial',
    slug: 'pemberdayaan-petani-nilam',
  },
  {
    id: 4,
    title: 'Sertifikasi Organik untuk Minyak Atsiri Indonesia',
    summary:
      'Produk minyak atsiri MBA Mandiri Buton Atsiri berhasil meraih sertifikasi organik internasional, membuka akses ke pasar premium Eropa dan Amerika.',
    date: '2026-03-05',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    category: 'Prestasi',
    slug: 'sertifikasi-organik-minyak-atsiri',
  },
  {
    id: 5,
    title: 'MBA Mandiri Buton Atsiri Hadiri Konferensi Aromaterapi Dunia',
    summary:
      'Tim MBA Mandiri Buton Atsiri berpartisipasi dalam World Aromatherapy Conference 2026 di Swiss, mempromosikan kekayaan minyak atsiri Indonesia.',
    date: '2026-02-18',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
    category: 'Event',
    slug: 'konferensi-aromaterapi-dunia',
  },
  {
    id: 6,
    title: 'Manfaat Minyak Kayu Putih untuk Kesehatan Pernapasan',
    summary:
      'Pakar kesehatan mengungkapkan berbagai manfaat minyak kayu putih asli Indonesia untuk menjaga kesehatan sistem pernapasan di masa pancaroba.',
    date: '2026-01-12',
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=600&q=80',
    category: 'Kesehatan',
    slug: 'manfaat-minyak-kayu-putih',
  },
];

export const articleCategories = [
  { id: 'all', label: 'Semua' },
  { id: 'Ekspor', label: 'Ekspor' },
  { id: 'Inovasi', label: 'Inovasi' },
  { id: 'Sosial', label: 'Sosial' },
  { id: 'Prestasi', label: 'Prestasi' },
  { id: 'Event', label: 'Event' },
  { id: 'Kesehatan', label: 'Kesehatan' },
];
