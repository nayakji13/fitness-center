'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { PhoneIcon, MapPinIcon, EnvelopeIcon, CalendarIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/solid';
import { FaInstagram, FaFacebook, FaYoutube, FaDumbbell, FaRunning, FaHeartbeat } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';

const gymImages = [
  {
    url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Modern Equipment'
  },
  {
    url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Group Classes'
  },
  {
    url: 'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Personal Training'
  },
  {
    url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    title: 'Cardio Zone'
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Member for 2 years",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    text: "The trainers here are amazing! I've lost 30 pounds in 6 months and feel better than ever.",
    rating: 5,
    achievement: "Lost 30 lbs"
  },
  {
    name: "Mike Thompson",
    role: "Member for 1 year",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    text: "Best gym in Asheville! The equipment is top-notch and the atmosphere is motivating.",
    rating: 5,
    achievement: "Gained 15 lbs muscle"
  },
  {
    name: "Emily Davis",
    role: "Member for 3 years",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    text: "I love the variety of classes offered. There's something for everyone!",
    rating: 5,
    achievement: "Completed 100 classes"
  }
];

const services = [
  {
    icon: <FaDumbbell className="w-12 h-12" />,
    title: "Strength Training",
    description: "Build muscle and increase your strength with our state-of-the-art equipment",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    icon: <FaRunning className="w-12 h-12" />,
    title: "Cardio Programs",
    description: "Boost your endurance and burn calories with our dynamic cardio sessions",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  },
  {
    icon: <FaHeartbeat className="w-12 h-12" />,
    title: "Personal Training",
    description: "Get personalized attention and achieve your fitness goals faster",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

export default function Home() {
  const [showTrialForm, setShowTrialForm] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for signing up! We will contact you shortly.');
    setShowTrialForm(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        
        <div className="container mx-auto px-4 z-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2
              }}
              className="mb-12"
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold text-white">ONE</span>
              </div>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              ONE of Asheville
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-12 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              Transform Your Body, Transform Your Life
            </motion.p>

            {/* Main CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(220, 38, 38, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                href="tel:+18289000541"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 transition-all duration-300"
              >
                <PhoneIcon className="w-5 h-5" />
                Call Us Now
              </motion.a>
              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                href="#location"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center gap-3 transition-all duration-300"
              >
                <MapPinIcon className="w-5 h-5" />
                Visit Us
              </motion.a>
            </div>

            {/* Secondary Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(220, 38, 38, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowTrialForm(true)}
                className="bg-red-600/90 hover:bg-red-700 text-white px-6 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300 backdrop-blur-sm"
              >
                <SparklesIcon className="w-5 h-5" />
                Free Trial
              </motion.button>

              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                href="#membership"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300"
              >
                <UserGroupIcon className="w-5 h-5" />
                Membership
              </motion.a>

              <motion.a
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                href="#schedule"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-full text-lg font-semibold flex items-center justify-center gap-3 transition-all duration-300"
              >
                <CalendarIcon className="w-5 h-5" />
                Class Schedule
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Free Trial Form Modal */}
        {showTrialForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-gray-900 p-8 rounded-xl max-w-md w-full"
            >
              <h3 className="text-2xl font-bold mb-4">Start Your Free Trial</h3>
              <form onSubmit={handleTrialSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  required
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
                  required
                />
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowTrialForm(false)}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-0 right-0 z-20"
        >
          <div className="flex justify-center gap-8">
            {[
              { icon: <FaInstagram className="w-6 h-6" />, href: "#" },
              { icon: <FaFacebook className="w-6 h-6" />, href: "#" },
              { icon: <FaYoutube className="w-6 h-6" />, href: "#" }
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ 
                  scale: 1.2,
                  color: "#ef4444"
                }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Gallery Section */}
        <section className="py-20 bg-black/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Facility</h2>
              <p className="text-xl text-gray-300">Take a look at our state-of-the-art equipment and spaces</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {gymImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="relative h-64 rounded-xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(image.url)}
                >
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white text-xl font-semibold">{image.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative w-full max-w-4xl h-[80vh]"
                onClick={e => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt="Gym facility"
                  fill
                  className="object-contain"
                />
                <button
                  className="absolute top-4 right-4 text-white text-2xl"
                  onClick={() => setSelectedImage(null)}
                >
                  ×
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our Services
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Transform your fitness journey with our expert programs
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="bg-gray-800/30 rounded-xl overflow-hidden backdrop-blur-sm relative group"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 -right-4 w-24 h-24 bg-red-500/20 rounded-full blur-2xl group-hover:bg-red-500/30 transition-colors"
                />
                
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                  </motion.div>
                </div>

                <div className="p-8">
                  <motion.div 
                    className="text-red-500 mb-4"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: index * 0.2 + 0.4
                    }}
                    viewport={{ once: true }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-2xl font-bold mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.6 }}
                    viewport={{ once: true }}
                  >
                    {service.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-black/50 to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Success Stories
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              What our members say about us
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="bg-gray-800/30 p-8 rounded-xl backdrop-blur-sm relative overflow-hidden group"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 -right-4 w-24 h-24 bg-red-500/20 rounded-full blur-2xl group-hover:bg-red-500/30 transition-colors"
                />
                
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: index * 0.2 + 0.4
                    }}
                    viewport={{ once: true }}
                    className="relative w-16 h-16 rounded-full overflow-hidden"
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold">{testimonial.name}</h3>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: index * 0.2 + 0.5 + i * 0.1
                      }}
                      viewport={{ once: true }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                <motion.p 
                  className="text-gray-300 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.6 }}
                  viewport={{ once: true }}
                >
                  {testimonial.text}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 + 0.7 }}
                  viewport={{ once: true }}
                  className="inline-block bg-red-500/20 px-4 py-2 rounded-full text-sm font-semibold"
                >
                  {testimonial.achievement}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Gym background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Get in Touch
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Start your fitness journey today
            </motion.p>

            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-red-500 focus:outline-none backdrop-blur-sm"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-red-500 focus:outline-none backdrop-blur-sm"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-red-500 focus:outline-none backdrop-blur-sm"
                ></textarea>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Message
                </motion.button>
              </motion.div>
            </form>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <PhoneIcon className="w-6 h-6 mx-auto mb-2 text-red-500" />
                </motion.div>
                <p className="text-gray-300">+1 (828) 900-0541</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <MapPinIcon className="w-6 h-6 mx-auto mb-2 text-red-500" />
                </motion.div>
                <p className="text-gray-300">Arden, NC</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 p-6 rounded-xl backdrop-blur-sm"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <EnvelopeIcon className="w-6 h-6 mx-auto mb-2 text-red-500" />
                </motion.div>
                <p className="text-gray-300">info@oneofasheville.com</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
