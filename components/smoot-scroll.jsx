"use client";
import Link from "next/link";

export const SmoothScroll = ({ targetId, children, className }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Remove the animation class from all sections
      const sections = document.querySelectorAll("section");
      sections.forEach((section) =>
        section.classList.remove("section-animate")
      );

      // Add the animation class to the target section
      targetElement.classList.add("section-animate");

      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
        easing: "ease-in-out",
      });
    }
  };

  return (
    <Link
      href={`#${targetId.slice(1)}`}
      onClick={handleClick}
      className={className}
    >
      {children}
    </Link>
  );
};
