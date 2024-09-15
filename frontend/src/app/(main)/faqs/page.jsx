"use client"; // Add this at the top

import React, { useState } from 'react';
import Navbar from '../navbar';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is VibeTribe?",
      answer:
        "VibeTribe is a collaborative platform designed for universities and colleges. It connects students, clubs, and events in a central space, providing a streamlined experience for managing and participating in campus activities.",
    },
    {
      question: "How do I join an event?",
      answer:
        "You can join events by logging into the platform, navigating to the 'Events' page, and selecting the event you're interested in. You can then fill out the registration form to secure your spot.",
    },
    {
      question: "How do I create a new club?",
      answer:
        "To create a new club, you'll need to log in and submit a club creation request form. Once approved by the administrators, your club will be added to the VibeTribe platform for others to join.",
    },
    {
      question: "Is VibeTribe open source?",
      answer:
        "Yes! VibeTribe is an open-source project, and we welcome contributions from developers. Visit our GitHub repository for more information.",
    },
    {
      question: "How do I stay updated on new events?",
      answer:
        "VibeTribe offers a notification system to keep you updated. You’ll receive notifications about upcoming events, club activities, and other important announcements. You can also check the calendar page for a full overview of upcoming events.",
    },
  ];

  return (
    <section className="bg-blue-700 min-h-screen">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-[#E0FFFF] text-center sm:text-4xl mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left text-lg font-semibold bg-[#E0FFFF] text-blue-900 px-6 py-4 rounded-lg focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
              >
                {faq.question}
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? 'max-h-screen opacity-100 translate-y-0'
                    : 'max-h-0 opacity-0 -translate-y-4'
                }`}
              >
                {activeIndex === index && (
                  <div className="mt-2 bg-white rounded-lg p-4 text-blue-900 shadow-md transition-opacity duration-300">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
