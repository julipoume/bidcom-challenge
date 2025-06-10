"use client";

export default function HeaderMenu() {

  return (
    <div className="relative">
      <button
        onClick={() => { console.log("Clicked menu")}}
        className="p-2 text-gray-700 hover:text-gray-900 transition"
        aria-label="Toggle menu"
      >
        <img src="/assets/icons/hamburguer.png" alt="Menu" />
      </button>

    </div>
  );
}
