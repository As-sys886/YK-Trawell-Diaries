import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { WHATSAPP_NUMBER } from '@/data/mockData';
import AnimatedText from '@/components/ui/AnimatedText';
import GlassCard from '@/components/ui/GlassCard';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import Confetti from '@/components/ui/Confetti';

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    collegeCity: '',
    participants: 1,
    emergencyContact: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: id === 'participants' ? parseInt(value) || 0 : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Booking Form Submitted:', formData);
    setIsSubmitted(true);
    setConfettiActive(true);
    setTimeout(() => setConfettiActive(false), 5000);

    // Optional: Redirect to WhatsApp after submission
    const whatsappText = `Hello YK Trawell Diaries! I'd like to book for the Harihar Fort & Trimbakeshwar Monsoon Expedition. 

Name: ${formData.name}
Phone: ${formData.phone}
College/City: ${formData.collegeCity}
Participants: ${formData.participants}
Emergency Contact: ${formData.emergencyContact}

Please confirm my booking and provide payment details.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`, '_blank');
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section id="book" className="container mx-auto px-4 md:px-8">
      {confettiActive && <Confetti />}
      <AnimatedText
        text="Secure Your Spot: Limited Seats Available!"
        className="mb-12 text-center font-display text-3xl font-bold text-text md:text-5xl"
        delay={0.2}
      />

      <motion.div
        className="relative mx-auto max-w-2xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={formVariants}
      >
        <GlassCard className="p-8 md:p-10">
          <p className="mb-6 text-center font-display text-xl font-semibold text-accent">
            Only a few seats left for this exclusive monsoon adventure!
          </p>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                id="name"
                label="Full Name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                id="phone"
                label="Phone Number (with country code)"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <Input
                id="collegeCity"
                label="College/City"
                type="text"
                value={formData.collegeCity}
                onChange={handleChange}
                required
              />
              <Input
                id="participants"
                label="Number of Participants"
                type="number"
                min="1"
                value={formData.participants}
                onChange={handleChange}
                required
              />
              <Input
                id="emergencyContact"
                label="Emergency Contact Name & Number"
                type="text"
                value={formData.emergencyContact}
                onChange={handleChange}
                required
              />
              <Button type="submit" className="w-full py-3">
                Confirm Booking & WhatsApp Organizers
              </Button>
            </form>
          ) : (
            <div className="text-center">
              <h3 className="mb-4 font-display text-2xl font-bold text-primary">
                Booking Initiated!
              </h3>
              <p className="mb-6 text-lg text-text-muted">
                Thank you for your interest! We have received your details.
              </p>
              <p className="mb-6 text-lg text-text-muted">
                Please check WhatsApp for further instructions and payment details.
              </p>
              <Button
                onClick={() => {
                  const whatsappText = `Hello YK Trawell Diaries! I'd like to book for the Harihar Fort & Trimbakeshwar Monsoon Expedition. 

Name: ${formData.name}
Phone: ${formData.phone}
College/City: ${formData.collegeCity}
Participants: ${formData.participants}
Emergency Contact: ${formData.emergencyContact}

Please confirm my booking and provide payment details.`;
                  window.open(
                    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappText)}`,
                    '_blank',
                  );
                }}
                className="w-full py-3"
              >
                Re-open WhatsApp Chat
              </Button>
            </div>
          )}
        </GlassCard>

        {/* Sticky booking button for mobile */}
        <a
          href="#book"
          className="fixed bottom-4 left-1/2 -translate-x-1/2 md:hidden"
          style={{ width: 'calc(100% - 2rem)' }}
        >
          <Button className="w-full py-3 text-lg shadow-xl animate-pulse">
            Book Your Seat Now!
          </Button>
        </a>
      </motion.div>
    </section>
  );
};

export default BookingSection;
