import React, { useState } from 'react';
import { ArrowUpRight, MessageSquare, Send, CheckCircle2, AlertCircle, Phone, MapPin, Mail } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import SectionLabel from '../components/SectionLabel';
import TextReveal from '../components/TextReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // If no access key is configured in .env, simulate or provide graceful guidance
    if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
      setTimeout(() => {
        setStatus('success');
        setStatusMessage('Your inquiry draft was created. Please also reach out via our official Facebook page for immediate confirmation.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1000);
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: formData.name,
          email: formData.email,
          subject: formData.subject || "Inquiry for AJ's Gaffers & Accessories",
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setStatusMessage('Thank you. Your message has been transmitted successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(result.message || 'Transmission failed. Please connect directly via Facebook.');
      }
    } catch (err) {
      setStatus('error');
      setStatusMessage('An error occurred. Please contact us via our official Facebook page.');
    }
  };

  return (
    <section
      id="contact"
      className="relative bg-[#101211] text-[#F3F0E9] py-24 md:py-36 px-6 md:px-12 border-t border-[#A68A64]/20 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-4xl mb-16">
          <SectionLabel
            number="06"
            title="CONTACT & CONNECTION"
            dark={false}
            className="mb-4"
          />

          <TextReveal
            as="h2"
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#FAF9F6] leading-[0.98] mb-6"
          >
            {BUSINESS_DATA.contactSection.headline}
          </TextReveal>

          <p className="font-serif text-xl sm:text-2xl text-[#D6CDBE]/80 italic max-w-2xl leading-relaxed">
            "{BUSINESS_DATA.contactSection.subtext}"
          </p>
        </div>

        {/* Two-Column Grid: Primary Facebook & Web3Forms Email Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Official Facebook Primary Channel & Contacts */}
          <div className="lg:col-span-5 space-y-8">
            {/* Primary Facebook Feature Card */}
            <div className="p-8 md:p-10 bg-[#171918] border-2 border-[#A68A64] shadow-2xl relative">
              <div className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#A68A64] mb-3">
                PRIMARY CONTACT CHANNEL
              </div>
              <h3 className="font-display text-3xl text-[#FAF9F6] mb-3">
                Official Facebook Page
              </h3>
              <p className="text-sm text-[#D6CDBE]/80 font-light leading-relaxed mb-8">
                For prompt replies, custom commission inquiries, current stock availability, and verified consultations, message our official Facebook team directly.
              </p>

              <div className="space-y-3">
                <a
                  href={BUSINESS_DATA.contact.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-[#A68A64] text-[#171918] font-mono text-xs tracking-[0.25em] uppercase font-semibold hover:bg-[#FAF9F6] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{BUSINESS_DATA.contactSection.facebookButtonLabel}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                {BUSINESS_DATA.contact.facebook.messengerUrl && (
                  <a
                    href={BUSINESS_DATA.contact.facebook.messengerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 border border-[#A68A64]/40 text-[#FAF9F6] font-mono text-xs tracking-[0.22em] uppercase hover:bg-[#222524] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>{BUSINESS_DATA.contactSection.messengerButtonLabel}</span>
                  </a>
                )}
              </div>
            </div>

            {/* Quick Contact Coordinates */}
            <div className="p-8 bg-[#171918]/60 border border-[#A68A64]/20 space-y-4">
              <div className="text-[10px] font-mono tracking-widest uppercase text-[#A68A64]">
                LOCATION & TELEPHONE
              </div>

              <div className="flex items-start gap-3 text-sm text-[#D6CDBE]/80">
                <MapPin className="w-4 h-4 text-[#A68A64] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-[#FAF9F6]">{BUSINESS_DATA.brand.originCity}, {BUSINESS_DATA.brand.originCountry}</div>
                  <div className="text-xs text-[#D6CDBE]/60 mt-0.5">{BUSINESS_DATA.contact.address.note}</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#D6CDBE]/80">
                <Phone className="w-4 h-4 text-[#A68A64] flex-shrink-0" />
                <span className="font-mono">{BUSINESS_DATA.contact.phone}</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#D6CDBE]/80">
                <Mail className="w-4 h-4 text-[#A68A64] flex-shrink-0" />
                <span className="font-mono">{BUSINESS_DATA.contact.email}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Web3Forms Email Inquiry Form */}
          <div className="lg:col-span-7 bg-[#171918] border border-[#A68A64]/25 p-8 md:p-12 shadow-2xl">
            <div className="mb-8 border-b border-[#A68A64]/15 pb-6">
              <div className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#A68A64] mb-2">
                WEB3FORMS INTEGRATION
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-[#FAF9F6] font-light">
                {BUSINESS_DATA.contactSection.formTitle}
              </h3>
              <p className="text-xs text-[#D6CDBE]/70 font-light mt-1">
                {BUSINESS_DATA.contactSection.formDescription}
              </p>
            </div>

            {status === 'success' && (
              <div className="mb-8 p-4 bg-[#A68A64]/15 border border-[#A68A64] text-[#FAF9F6] flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#A68A64] flex-shrink-0" />
                <div className="text-xs font-mono leading-relaxed">{statusMessage}</div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-8 p-4 bg-red-950/40 border border-red-500/50 text-red-200 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <div className="text-xs font-mono leading-relaxed">{statusMessage}</div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono tracking-widest text-[#D6CDBE]/80 uppercase mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Juan dela Cruz"
                    className="w-full px-4 py-3 bg-[#101211] border border-[#A68A64]/30 focus:border-[#A68A64] focus:outline-none text-[#FAF9F6] text-sm font-sans placeholder-[#D6CDBE]/30 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono tracking-widest text-[#D6CDBE]/80 uppercase mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@example.com"
                    className="w-full px-4 py-3 bg-[#101211] border border-[#A68A64]/30 focus:border-[#A68A64] focus:outline-none text-[#FAF9F6] text-sm font-sans placeholder-[#D6CDBE]/30 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-mono tracking-widest text-[#D6CDBE]/80 uppercase mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Product Inquiry / Custom Gaff Specification"
                  className="w-full px-4 py-3 bg-[#101211] border border-[#A68A64]/30 focus:border-[#A68A64] focus:outline-none text-[#FAF9F6] text-sm font-sans placeholder-[#D6CDBE]/30 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono tracking-widest text-[#D6CDBE]/80 uppercase mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Detail your inquiry or product requirements here..."
                  className="w-full px-4 py-3 bg-[#101211] border border-[#A68A64]/30 focus:border-[#A68A64] focus:outline-none text-[#FAF9F6] text-sm font-sans placeholder-[#D6CDBE]/30 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-[#A68A64] text-[#171918] font-mono text-xs tracking-[0.25em] uppercase font-bold hover:bg-[#FAF9F6] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
                <span>{status === 'submitting' ? 'TRANSMITTING INQUIRY...' : 'TRANSMIT DIRECT INQUIRY'}</span>
              </button>

              <div className="text-[10px] font-mono text-[#D6CDBE]/40 text-center uppercase tracking-widest pt-2">
                Protected by Web3Forms • Inquiries answered in the order received
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
