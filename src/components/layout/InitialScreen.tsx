"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

interface InitialScreenProps {
  onComplete: () => void;
}

export function InitialScreen({ onComplete }: InitialScreenProps) {
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"random" | "welcome" | "iam" | "name" | "done">("random");
  
  useEffect(() => {
    // 1 & 2: Random characters & scramble
    const interval = setInterval(() => {
      setText(Array.from({ length: 12 }).map(() => CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]).join(""));
    }, 50);

    // 3: Resolve to WELCOME HERE
    const timeout1 = setTimeout(() => {
      clearInterval(interval);
      setPhase("welcome");
    }, 1500);

    // 5: I AM appears
    const timeout2 = setTimeout(() => {
      setPhase("iam");
    }, 2500);

    // 6: Name resolves
    const timeout3 = setTimeout(() => {
      setPhase("name");
    }, 3200);

    // 8: Transition out
    const timeout4 = setTimeout(() => {
      setPhase("done");
      setTimeout(onComplete, 800); // Wait for exit animation
    }, 4500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] bg-[#0a0a0a] flex flex-col items-center justify-center font-mono text-neutral-400 select-none"
        >
          {phase === "random" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-base sm:text-xl md:text-3xl tracking-[0.5em] text-center px-4"
            >
              {text}
            </motion.div>
          )}

          {phase === "welcome" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-base sm:text-xl md:text-3xl tracking-[0.5em] text-center px-4"
            >
              WELCOME HERE
            </motion.div>
          )}

          {(phase === "iam" || phase === "name") && (
            <div className="flex flex-col items-center gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-base sm:text-xl md:text-3xl tracking-[0.5em] text-center px-4"
              >
                WELCOME HERE
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl tracking-widest text-white/50 mt-12"
              >
                I AM
              </motion.div>

              {phase === "name" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl sm:text-4xl md:text-7xl lg:text-9xl font-bold font-sans tracking-tighter text-white text-center leading-[0.9] px-4"
                >
                  WISNU<br />
                  PRADNYA
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
