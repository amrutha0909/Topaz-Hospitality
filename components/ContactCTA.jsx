"use client";

import { useState } from "react";
import DividerOrnament from "./DividerOrnament";

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    project: ""
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { firstName, lastName, email, project } = formData;
    
    // Simple validation
    if (!firstName.trim() || !lastName.trim() || !email.trim() || !project.trim()) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "All fields are required. Please fill in all details."
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please enter a valid email address."
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: "" });

    try {
      const recipient = "info@topazhospitality.com";
      const subject = encodeURIComponent(`Legacy Project Inquiry from ${firstName} ${lastName}`);
      const body = encodeURIComponent(
        `Hello Topaz Hospitality Team,\n\n` +
        `You have received a new custom legacy project inquiry from the website contact form.\n\n` +
        `--- CLIENT INQUIRY DETAILS ---\n` +
        `Name: ${firstName} ${lastName}\n` +
        `Email: ${email}\n\n` +
        `--- PROJECT DESCRIPTION & OVERVIEW ---\n` +
        `${project}\n\n` +
        `Best regards,\n` +
        `${firstName} ${lastName}`
      );

      // Construct mailto link and redirect
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

      setStatus({ submitting: false, submitted: true, error: "" });

      // Reset form fields after 4 seconds
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          project: ""
        });
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 4000);

    } catch (err) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "An error occurred while launching your email client. Please try again."
      });
    }
  };

  return (
    <section id="contact" className="relative bg-secondary py-24 md:py-40 px-5 md:px-12 scroll-mt-24 mt-8 md:mt-16">
      <div className="absolute top-0 left-0 w-full flex justify-center -translate-y-1/2 z-20 pointer-events-none">
        <DividerOrnament className="drop-shadow-2xl scale-[1.5] md:scale-[2.5]" />
      </div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-gradient text-3xl sm:text-4xl md:text-6xl font-serif mb-6 md:mb-8">Let's Build Your Legacy</h2>
        <p className="text-base md:text-lg text-white/60 font-light mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          If you’re planning a custom hospitality project, facility overhaul, or operational restructuring, we’d like to hear about it.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-7 md:space-y-8 text-left bg-orange-mid p-8 md:p-14 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 relative overflow-hidden backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-8">
            <div>
              <label className="block text-xs tracking-widest text-white/70 uppercase mb-2">First Name</label>
              <input 
                type="text" 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors" 
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest text-white/70 uppercase mb-2">Last Name</label>
              <input 
                type="text" 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors" 
                placeholder="Doe"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs tracking-widest text-white/70 uppercase mb-2">Email Address</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors" 
              placeholder="john.doe@example.com"
            />
          </div>
          <div>
            <label className="block text-xs tracking-widest text-white/70 uppercase mb-2">Tell us about your project</label>
            <textarea 
              rows="4" 
              name="project"
              value={formData.project}
              onChange={handleChange}
              className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors resize-none"
              placeholder="Describe your hospitality concept, timeline, and goals..."
            ></textarea>
          </div>

          {status.error && (
            <div className="text-red-400 text-sm mt-2 border border-red-500/20 bg-red-950/20 px-4 py-3 rounded-lg flex items-center gap-2 animate-pulse">
              <span className="text-red-500">✕</span> {status.error}
            </div>
          )}

          {status.submitted && (
            <div className="text-accent text-sm mt-2 border border-accent/20 bg-accent/5 px-4 py-3 rounded-lg flex flex-col gap-1">
              <div className="flex items-center gap-2 font-semibold">
                <span className="text-emerald-500">✓</span> Inquiry Form Validated!
              </div>
              <p className="text-white/60 font-light text-xs">
                Your email client is launching to send the message to <strong>info@topazhospitality.com</strong>. Please hit send in your email client to finalize the inquiry.
              </p>
            </div>
          )}

          <div className="pt-8 text-center">
            <button 
              type="submit" 
              disabled={status.submitting}
              className="w-full sm:w-auto bg-accent text-[#0C0C0C] font-serif px-12 py-4 hover:bg-[#0C0C0C] hover:text-accent transition-colors duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
            >
              {status.submitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-[#0C0C0C]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Launching Email Client...
                </span>
              ) : (
                "Submit Inquiry"
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-center translate-y-1/2 z-20 pointer-events-none">
        <DividerOrnament className="drop-shadow-2xl scale-[1.25] md:scale-[1.75]" />
      </div>
    </section>
  );
}
