export interface Product {
  id: number;
  name: string;
  latinName: string;
  description: string;
  benefits: string[];
  specifications: { label: string; value: string }[];
  image: string;
  category: string;
}

export interface Article {
  id: number;
  title: string;
  summary: string;
  date: string;
  image: string;
  category: string;
  slug: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface Stat {
  id: number;
  value: string;
  label: string;
  icon: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  category: string;
}


