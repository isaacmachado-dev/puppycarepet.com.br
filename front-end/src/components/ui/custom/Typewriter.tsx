import React, { useEffect, useState } from "react";

interface TypewriterProps {
  texts: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseBetween?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  typeSpeed = 50,
  deleteSpeed = 100,
  pauseBetween = 50,
  className,
}) => {
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [finished, setFinished] = useState(false);

  const currentText = texts[0]; // Só o primeiro texto

  useEffect(() => {

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentText.length) {
      delay = pauseBetween;
      setTimeout(() => setIsDeleting(true), delay);
      return;
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      return;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, finished, currentText, typeSpeed, deleteSpeed, pauseBetween]);

  return (
    <span className={className}>
      {!finished && currentText.substring(0, charIndex)}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};
