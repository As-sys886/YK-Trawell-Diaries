export interface Destination {
  name: string;
  description: string;
  image: string;
  location: string;
  highlights: string[];
}

export interface ItineraryItem {
  day: string;
  time: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  type: 'image' | 'video';
}

export interface WhyJoinItem {
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  trip: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  login: (username: string, email: string) => Promise<boolean>;
  signup: (username: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}
