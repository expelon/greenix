export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/918590010011?text=Hello%20Greenix%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/60 transition hover:scale-105"
    >
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg"
        alt="WhatsApp"
        className="h-7 w-7 invert"
      />
    </a>
  );
}
