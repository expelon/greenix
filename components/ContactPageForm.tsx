'use client';

import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactPageForm() {
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
      className="mt-8 space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
            placeholder="Enter your last name"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
          placeholder="Enter your email"
          required
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="mt-2 block w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
          placeholder="+91 00000 00000"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-2 block w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20"
          placeholder="Enter your message"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/25 transition hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Form'}
      </button>
    </form>
  );
}
