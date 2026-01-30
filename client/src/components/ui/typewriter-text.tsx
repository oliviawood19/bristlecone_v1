import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  words: string[];
  className?: string;
  waitDuration?: number; // Time to wait after finishing typing before deleting
}

export function TypewriterText({ 
  words, 
  className = "", 
  waitDuration = 3000 
}: TypewriterTextProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  // Typing logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setIsWaiting(true);
      const timeout = setTimeout(() => {
        setIsWaiting(false);
        setReverse(true);
      }, waitDuration);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 75 : 150); // Faster delete, slower type

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, waitDuration]);

  return (
    <span className="text-[#1a3d35]">
      {words[index].substring(0, subIndex)}
      <motion.span
        initial={{ opacity: 1 }}
        animate={{ opacity: isWaiting ? 0 : [0, 1, 0] }}
        transition={{ 
          duration: 0.8, 
          repeat: isWaiting ? 0 : Infinity, 
          ease: "easeInOut" 
        }}
        className="inline-block w-[2px] h-[0.8em] bg-current ml-1 align-middle mb-1"
      />
    </span>
  );
}
