"use client";

import Navbar from '@/components/Navbar';

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#000000] text-light font-sans">
      <Navbar />
      
      <section className="pt-24 pb-16">
        <div className="container-custom">
          <h1 className="section-title text-primary">Get in Touch</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-darkAlt p-8 rounded-lg shadow border border-primary">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-primary">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border border-primary bg-darkAlt text-light focus:border-accent focus:ring-accent shadow-sm"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border border-primary bg-darkAlt text-light focus:border-accent focus:ring-accent shadow-sm"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border border-primary bg-darkAlt text-light focus:border-accent focus:ring-accent shadow-sm"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary via-secondary to-accent text-white rounded-lg shadow hover:shadow-[0_0_16px_4px_rgba(0,255,247,0.3)] font-semibold transition-transform duration-300 hover:scale-105 animate-glow"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-darkAlt p-6 rounded-lg shadow border border-secondary mb-8">
                <h2 className="text-2xl font-bold mb-4 text-primary">Contact Information</h2>
                <p className="text-light mb-6">
                  Feel free to reach out to me through any of the following channels. I'm always open to discussing new projects, 
                  creative ideas, or opportunities to be part of your vision.
                </p>
                
                <div className="space-y-4">
                  <a 
                    href="mailto:arangupta86@gmail.com"
                    className="flex items-center text-white hover:text-primary"
                  >
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    arangupta86@gmail.com
                  </a>
                  <a 
                    href="tel:9082340817"
                    className="flex items-center text-white hover:text-primary"
                  >
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.3 1.2a2 2 0 01-.45 1.95l-1.1 1.1a16.001 16.001 0 006.586 6.586l1.1-1.1a2 2 0 011.95-.45l1.2.3A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2h2z" />
                    </svg>
                    9082340817
                  </a>
                  <a 
                    href="https://github.com/Arangupta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white hover:text-primary"
                  >
                    <svg className="w-6 h-6 mr-3" fill="white" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub Profile
                  </a>
                </div>
              </div>
              
              <div className="bg-darkAlt p-6 rounded-lg shadow border border-accent">
                <h3 className="text-xl font-bold mb-4 text-primary">Location</h3>
                <p className="text-light">
                  Based in Mumbai, Mira Road<br />
                  Available for remote work worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 