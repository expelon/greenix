export default function WhatsAppButton() {
  return (
    <button
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/60 transition hover:scale-105 cursor-default"
    >
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg"
        alt="WhatsApp"
        className="h-7 w-7 invert"
      />
    </button>
  );
}
