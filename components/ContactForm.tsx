'use client';

import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      // Create a hidden form and submit it
      const hiddenForm = document.createElement('form');
      hiddenForm.method = 'POST';
      hiddenForm.action = 'https://formsubmit.co/arjun.kc@thegreenix.com';
      hiddenForm.target = '_self';
      
      // Copy all form data to hidden form
      formData.forEach((value, key) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value as string;
        hiddenForm.appendChild(input);
      });
      
      // Add custom fields to prevent redirect
      const nextField = document.createElement('input');
      nextField.type = 'hidden';
      nextField.name = '_next';
      nextField.value = window.location.href;
      hiddenForm.appendChild(nextField);
      
      const captchaField = document.createElement('input');
      captchaField.type = 'hidden';
      captchaField.name = '_captcha';
      captchaField.value = 'false';
      hiddenForm.appendChild(captchaField);
      
      document.body.appendChild(hiddenForm);
      hiddenForm.submit();
      document.body.removeChild(hiddenForm);
      
      // Show success message and reset form
      toast.success('Thank you for contacting us! We will get back to you soon.');
      form.reset();
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label htmlFor="cta-name" className="sr-only">
          Full Name
        </label>
        <input
          id="cta-name"
          name="name"
          type="text"
          placeholder="Enter your Full Name"
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
          required
        />
      </div>
      <div>
        <label htmlFor="cta-phone" className="sr-only">
          Phone Number
        </label>
        <input
          id="cta-phone"
          name="phone"
          type="tel"
          placeholder="Enter your Phone Number"
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
          required
        />
      </div>
      <div>
        <label htmlFor="cta-email" className="sr-only">
          Email
        </label>
        <input
          id="cta-email"
          name="email"
          type="email"
          placeholder="Enter your Email ID"
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
          required
        />
      </div>
      <div>
        <label htmlFor="cta-message" className="sr-only">
          Message
        </label>
        <textarea
          id="cta-message"
          name="message"
          rows={4}
          placeholder="Message"
          className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20"
          required
        />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-sky-600 px-4 py-3 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-sky-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}
