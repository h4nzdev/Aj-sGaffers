import React, { useState } from 'react';
import { Building2, Calendar, MapPin, Globe, Phone, Mail, Clock, ShieldCheck, Copy, Check } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import SectionLabel from '../components/SectionLabel';
import TextReveal from '../components/TextReveal';

export default function BusinessInfo() {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2200);
  };

  return (
    <section
      id="business-info"
      className="relative bg-[#171918] text-[#F3F0E9] py-24 md:py-36 px-6 md:px-12 border-t border-[#A68A64]/20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <SectionLabel
            number="05"
            title="BUSINESS DIRECTORY"
            dark={false}
            className="mb-4"
          />
          <TextReveal
            as="h2"
            className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#FAF9F6] leading-[1.05] mb-6"
          >
            {BUSINESS_DATA.businessInfo.headline}
          </TextReveal>
          <p className="text-base text-[#D6CDBE]/80 font-light leading-relaxed">
            {BUSINESS_DATA.businessInfo.description}
          </p>
        </div>

        {/* 4 Core Credential Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {BUSINESS_DATA.businessInfo.cards.map((card) => (
            <div
              key={card.id}
              className="p-8 bg-[#1D211F] border border-[#A68A64]/20 hover:border-[#A68A64] transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A68A64] mb-3">
                  {card.label}
                </div>
                <div className="font-display text-3xl font-medium text-[#FAF9F6] mb-2 group-hover:text-[#A68A64] transition-colors">
                  {card.primary}
                </div>
                <p className="text-xs text-[#D6CDBE]/75 leading-relaxed font-light mb-4">
                  {card.secondary}
                </p>
              </div>
              <div className="pt-4 border-t border-[#A68A64]/10 text-[11px] font-mono text-[#A68A64]/80">
                {card.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Directory Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-[#A68A64]/20 pt-16">
          {/* Left: Official Location & Hours */}
          <div className="lg:col-span-6 space-y-8">
            <div className="p-8 bg-[#1C1F1E] border border-[#A68A64]/20">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-[#A68A64]" />
                <h3 className="font-display text-2xl text-[#FAF9F6]">Operational Location</h3>
              </div>
              <p className="text-sm text-[#D6CDBE]/80 mb-2">
                {BUSINESS_DATA.contact.address.full}
              </p>
              <p className="text-xs font-mono text-[#A68A64] uppercase tracking-wider mb-6">
                {BUSINESS_DATA.contact.address.note}
              </p>

              <div className="pt-4 border-t border-[#A68A64]/10 flex items-center justify-between">
                <span className="text-xs text-[#D6CDBE]/60">Service Coverage:</span>
                <span className="text-xs font-mono text-[#FAF9F6]">{BUSINESS_DATA.contact.serviceCoverage}</span>
              </div>
            </div>

            <div className="p-8 bg-[#1C1F1E] border border-[#A68A64]/20">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-[#A68A64]" />
                <h3 className="font-display text-2xl text-[#FAF9F6]">Consultation Hours</h3>
              </div>
              <div className="space-y-3">
                {BUSINESS_DATA.contact.operatingHours.map((slot, idx) => (
                  <div key={idx} className="flex justify-between items-center text-xs border-b border-[#A68A64]/10 pb-2">
                    <span className="text-[#D6CDBE]/70 font-mono">{slot.days}</span>
                    <span className="text-[#FAF9F6] font-medium">{slot.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Direct Channels & Verifications */}
          <div className="lg:col-span-6 space-y-8">
            <div className="p-8 bg-[#1C1F1E] border border-[#A68A64]/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="w-5 h-5 text-[#A68A64]" />
                  <h3 className="font-display text-2xl text-[#FAF9F6]">Direct Communication Lines</h3>
                </div>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-center justify-between p-4 bg-[#222524] border border-[#A68A64]/15">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#A68A64]" />
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[#A68A64]">
                          MOBILE / INQUIRIES
                        </div>
                        <div className="text-sm font-mono text-[#FAF9F6]">
                          {BUSINESS_DATA.contact.phone}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(BUSINESS_DATA.contact.phone, 'phone')}
                      className="p-2 text-[#D6CDBE]/60 hover:text-[#A68A64] transition-colors"
                      title="Copy phone"
                    >
                      {copiedKey === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Email */}
                  <div className="flex items-center justify-between p-4 bg-[#222524] border border-[#A68A64]/15">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#A68A64]" />
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[#A68A64]">
                          ELECTRONIC INQUIRY
                        </div>
                        <div className="text-sm font-mono text-[#FAF9F6]">
                          {BUSINESS_DATA.contact.email}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(BUSINESS_DATA.contact.email, 'email')}
                      className="p-2 text-[#D6CDBE]/60 hover:text-[#A68A64] transition-colors"
                      title="Copy email"
                    >
                      {copiedKey === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Facebook Official */}
                  <div className="flex items-center justify-between p-4 bg-[#222524] border border-[#A68A64]/15">
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-[#A68A64]" />
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-widest text-[#A68A64]">
                          PRIMARY DIGITAL PRESENCE
                        </div>
                        <div className="text-sm font-mono text-[#FAF9F6]">
                          {BUSINESS_DATA.contact.facebook.displayName}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy(BUSINESS_DATA.contact.facebook.url, 'fb')}
                      className="p-2 text-[#D6CDBE]/60 hover:text-[#A68A64] transition-colors"
                      title="Copy Facebook URL"
                    >
                      {copiedKey === 'fb' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#A68A64]/10 text-xs font-mono text-[#D6CDBE]/60">
                NOTICE: Update official contact details in <code className="text-[#A68A64]">src/data/businessData.js</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
