import heroBg from '@/assets/images/hero-bg.jpg';
import hariharFort from '@/assets/images/harihar-fort.jpg';
import trimbakeshwarTemple from '@/assets/images/trimbakeshwar-temple.jpg';
import brahmagiriHill from '@/assets/images/brahmagiri-hill.jpg';
import nashikGangaAarti from '@/assets/images/nashik-ganga-aarti.jpg';
import gallery1 from '@/assets/images/gallery-1.jpg';
import gallery2 from '@/assets/images/gallery-2.jpg';
import gallery3 from '@/assets/images/gallery-3.jpg';
import gallery4 from '@/assets/images/gallery-4.jpg';
import gallery5 from '@/assets/images/gallery-5.jpg';
import gallery6 from '@/assets/images/gallery-6.jpg';

import { Destination, ItineraryItem, GalleryItem, WhyJoinItem, Testimonial } from '@/types';

export const TRIP_DATE = '2024-08-15T00:00:00.000Z'; // August 15, 2024
export const WHATSAPP_NUMBER = '+916305566899'; // Updated contact number
export const WHATSAPP_MESSAGE = 'Hi YK Trawell Diaries! I\'m interested in the Harihar Fort & Trimbakeshwar Monsoon Expedition. Can you share more details?';

export const HERO_CONTENT = {
  video: 'https://www.youtube.com/embed/ysjvImZmgGc?autoplay=1&mute=1&loop=1&playlist=ysjvImZmgGc&controls=0&modestbranding=1&showinfo=0&disablekb=1&fs=0&rel=0', // Updated hero video embed URL
  image: heroBg,
  heading: 'Harihar Fort & Trimbakeshwar Monsoon Expedition',
  subheading: 'Adventure. Roadtrips. Community. Memories.',
  duration: '2 Days / 2 Nights',
  startPoint: 'Parul University, Vadodara',
  seats: 6,
};

export const ABOUT_TRIP_CONTENT = {
  title: 'Unfold the Monsoon Magic with YK Trawell Diaries',
  description: [
    "Embark on YK Trawell Diaries' first official community expedition! This isn't just a trip; it's an immersive journey crafted to blend the thrill of trekking, the serenity of spirituality, the joy of monsoon roadtrip vibes, and the creation of cinematic memories. Join our growing adventure community for an unforgettable experience.",
    "We combine the rugged beauty of Harihar Fort with the spiritual aura of Trimbakeshwar, offering a perfect blend of challenge and tranquility. Get ready to forge new friendships, capture breathtaking moments, and rediscover yourself amidst nature's grandeur.",
  ],
};

export const DESTINATIONS: Destination[] = [
  {
    name: 'Harihar Fort',
    description: 'A legendary fort known for its iconic 80-degree carved rock-cut steps. Offers breathtaking panoramic views of the Western Ghats, especially during monsoon.',
    image: hariharFort,
    location: 'Nashik, Maharashtra',
    highlights: ['80-degree rock-cut steps', 'Panoramic monsoon views', 'Historic significance', 'Thrill for trekkers'],
  },
  {
    name: 'Trimbakeshwar Temple',
    description: 'One of the twelve Jyotirlinga shrines of Shiva, located at the source of the Godavari River. An ancient Hindu temple surrounded by scenic Brahmagiri hills.',
    image: trimbakeshwarTemple,
    location: 'Nashik, Maharashtra',
    highlights: ['Jyotirlinga shrine', 'Spiritual significance', 'Ancient architecture', 'Source of Godavari River'],
  },
  {
    name: 'Brahmagiri Hill',
    description: 'The hill where the Godavari River originates. A relatively easy trek offering serene landscapes and spiritual ambiance near Trimbakeshwar.',
    image: brahmagiriHill,
    location: 'Nashik, Maharashtra',
    highlights: ['Origin of Godavari River', 'Scenic trek', 'Peaceful environment', 'Nature photography'],
  },
  {
    name: 'Nashik Ganga Aarti',
    description: 'Witness the enchanting evening Ganga Aarti at Ramkund on the Godavari River in Nashik, a vibrant and spiritual experience.',
    image: nashikGangaAarti,
    location: 'Nashik, Maharashtra',
    highlights: ['Spiritual evening ceremony', 'Vibrant cultural experience', 'Ramkund', 'Photogenic moments'],
  },
];

export const ITINERARY: ItineraryItem[] = [
  {
    day: 'DAY 0 — NIGHT DEPARTURE',
    time: '09:00 PM onwards',
    title: 'The Journey Begins',
    description: 'Assemble near Parul University, Vadodara. Meet your fellow adventurers. An exciting overnight roadtrip with music, cinematic vibes, and tea/snack stops en route.',
  },
  {
    day: 'DAY 1 — TRIMBAKESHEWAR & BRAHMAGIRI',
    time: 'Morning',
    title: 'Spiritual Awakening & Hill Views',
    description: 'Early morning arrival and hotel check-in. Fresh up and visit the sacred Trimbakeshwar Temple. Post-lunch, enjoy a restful afternoon before an evening trek to Brahmagiri Hill for scenic monsoon views. Dinner and overnight stay in Nashik.',
  },
  {
    day: 'DAY 2 — HARIHAR FORT & NASHIK',
    time: 'Early Morning',
    title: 'Conquer Harihar & Nashik Exploration',
    description: 'An exhilarating early morning trek to Harihar Fort, conquering its iconic steps. Descend, have a hearty lunch, and then head to Nashik for a visit, culminating in the mesmerizing Ganga Aarti at Ramkund. Begin the overnight return journey to Vadodara, carrying unforgettable memories.',
  },
];

export const PACKAGE_INCLUDES = [
  'Travel from Vadodara to Vadodara in Maruti Suzuki Ertiga (or similar)',
  'Comfortable Hotel stay (twin/triple sharing)',
  'Local transportation for sightseeing',
  'Experienced Trek coordination and guidance',
  'Basic photography & reels coverage for cinematic memories',
  'Exclusive YK Trawell Diaries Community experience & bonding',
];

export const PACKAGE_EXCLUDES = [
  'Food expenses (breakfast, lunch, dinner, snacks)',
  'Personal shopping and souvenirs',
  'Any medical/emergency expenses beyond basic first-aid',
  'Any personal expenses not mentioned in \'INCLUDES\'',
  'Entry fees to any optional attractions (if any)',
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, src: gallery1, alt: 'Trekking through misty mountains', type: 'image' },
  { id: 2, src: gallery2, alt: 'Roadtrip vibes with friends', type: 'image' },
  { id: 3, src: gallery3, alt: 'Rainy mountain landscape', type: 'image' },
  { id: 4, src: gallery4, alt: 'Harihar Fort iconic steps', type: 'image' },
  { id: 5, src: gallery5, alt: 'Trimbakeshwar Temple architecture', type: 'image' },
  { id: 6, src: gallery6, alt: 'Campfire bonding moment', type: 'image' },
  // Add more items, potentially videos, here
];

export const WHY_JOIN_ITEMS: WhyJoinItem[] = [
  {
    icon: 'Users',
    title: 'Meet New People',
    description: 'Connect with like-minded adventurers and forge lasting friendships in a vibrant community.',
  },
  {
    icon: 'Tent',
    title: 'Adventure Experience',
    description: 'Challenge yourself with thrilling treks and explore off-beat destinations.',
  },
  {
    icon: 'MountainSnow',
    title: 'Scenic Monsoon Landscapes',
    description: 'Witness the Western Ghats come alive with lush greenery and misty vistas during monsoon.',
  },
  {
    icon: 'Car',
    title: 'Roadtrip Memories',
    description: 'Enjoy the freedom and fun of a classic monsoon roadtrip with great music and company.',
  },
  {
    icon: 'ClipboardPen',
    title: 'Trekking Challenge',
    description: 'Conquer Harihar Fort\'s unique steps and experience a sense of achievement.',
  },
  {
    icon: 'Camera',
    title: 'Content Creation Opportunities',
    description: 'Capture stunning photos and cinematic reels amidst breathtaking backdrops.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: 'My first trip with YK Trawell Diaries was incredible! The organization was flawless, and the vibes were just amazing. Can\'t wait for the next one!',
    author: 'Priya S.',
    trip: 'Lonavala Monsoon Trek',
  },
  {
    id: 2,
    quote: 'The cinematic memories they captured were just mind-blowing. It felt like I was in a movie. Highly recommend for unique experiences!',
    author: 'Rahul K.',
    trip: 'Spiti Valley Expedition',
  },
  {
    id: 3,
    quote: 'Joined as a solo traveler and left with a family. The community aspect is truly what sets YK Trawell Diaries apart.',
    author: 'Ananya M.',
    trip: 'Rishikesh Rafting Adventure',
  },
];

export const FOOTER_CONTACTS = {
  instagram: 'https://instagram.com/yktrawelldiaries',
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  phone: WHATSAPP_NUMBER,
  email: 'info@yktrawelldiaries.com',
  copyright: 'Made with adventure by YK Trawell Diaries © 2024',
};
