'use client';

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

export default function WhatsAppButton() {
  const phoneNumber = '9349372050'; // WhatsApp number without spaces
  
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, '_blank');
    
    // Track WhatsApp button click event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'Social Media',
        event_label: 'WhatsApp Button',
        value: 1
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/60 transition hover:scale-105"
      aria-label="Contact us on WhatsApp"
    >
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg"
        alt="WhatsApp"
        className="h-7 w-7 invert"
      />
    </button>
  );
}
