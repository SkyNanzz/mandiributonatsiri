import type { GalleryItem } from '../types';

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80',
    alt: 'Perkebunan nilam yang hijau dan subur',
    category: 'Perkebunan',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    alt: 'Proses pengiriman ekspor minyak atsiri',
    category: 'Ekspor',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=800&q=80',
    alt: 'Alat distilasi minyak atsiri tradisional',
    category: 'Produksi',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80',
    alt: 'Botol-botol minyak kayu putih siap ekspor',
    category: 'Produk',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80',
    alt: 'Minyak nilam dalam kemasan premium',
    category: 'Produk',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=800&q=80',
    alt: 'Panorama perkebunan atsiri',
    category: 'Perkebunan',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
    alt: 'Tim MBA Mandiri Buton Atsiri',
    category: 'Tim',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    alt: 'Laboratorium pengujian mutu',
    category: 'Produksi',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80',
    alt: 'Petani nilam di ladang',
    category: 'Perkebunan',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&q=80',
    alt: 'Bunga cengkeh segar untuk distilasi',
    category: 'Perkebunan',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=800&q=80',
    alt: 'Proses pengemasan produk',
    category: 'Produksi',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1604732099877-4d1c12c28a1f?w=800&q=80',
    alt: 'Buah pala segar untuk produksi minyak',
    category: 'Perkebunan',
  },
];

export const galleryCategories = [
  { id: 'all', label: 'Semua' },
  { id: 'Perkebunan', label: 'Perkebunan' },
  { id: 'Produksi', label: 'Produksi' },
  { id: 'Produk', label: 'Produk' },
  { id: 'Ekspor', label: 'Ekspor' },
  { id: 'Tim', label: 'Tim' },
];
