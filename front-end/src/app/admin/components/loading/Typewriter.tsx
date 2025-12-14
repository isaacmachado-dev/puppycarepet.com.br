import React, { useEffect, useState } from "react";
import "./animation-caret.css";

interface TypewriterProps {
  texts: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseAfterWrite?: number;
  pauseAfterDelete?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  typeSpeed = 50,
  deleteSpeed = 100,
  pauseAfterWrite = 2000,
  pauseAfterDelete = 1000,
  className,
  style,
}) => {
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [, setShowCursorOut] = useState(false);

  const currentText = texts[0];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let cursorOutTimer: NodeJS.Timeout;

    // PAUSA após digitar tudo
    if (!isDeleting && charIndex === currentText.length) {
      setShowCursorOut(true); // ativa animação saída

      // Tempo da animação do cursor saindo
      cursorOutTimer = setTimeout(() => {
        setShowCursorOut(false); // caret fica invisível
      }, 600); // tempo do cursor animando (combine com CSS @keyframes)

      // Espera pausa e inicia deleção depois
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseAfterWrite);

      return () => {
        clearTimeout(timer);
        clearTimeout(cursorOutTimer);
      };
    }
    // PAUSA após apagar tudo
    if (isDeleting && charIndex === 0) {
      timer = setTimeout(() => setIsDeleting(false), pauseAfterDelete);
      return () => clearTimeout(timer);
    }
    // Digitação e apagar normal
    timer = setTimeout(() => {
      setCharIndex(prev => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentText, typeSpeed, deleteSpeed, pauseAfterWrite, pauseAfterDelete]);

  return (
    <span className={`${className} block`} style={style}>
      {currentText.substring(0, charIndex)}

    </span>
  );
};
