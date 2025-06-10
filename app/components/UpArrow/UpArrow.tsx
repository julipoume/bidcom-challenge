"use client";

export default function UpArrow() {
  return (
    <div className="w-full flex justify-center mt-5 md:ml-4">
      <div
        className="cursor-pointer"
        role="button"
        tabIndex={0}
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
      >
        <img
          src="/assets/icons/up-arrow.png"
          alt="UpArrow"
          className="w-8 h-8" 
        />
      </div>
    </div>
  );
}
