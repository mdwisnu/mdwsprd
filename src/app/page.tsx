"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { InitialScreen } from "@/components/layout/InitialScreen";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { SelectedWork } from "@/sections/SelectedWork";
import { Photography } from "@/sections/Photography";
import { Film } from "@/sections/Film";
import { Experience } from "@/sections/Experience";
import { AchievementsExploring } from "@/sections/AchievementsExploring";
import { ResumeContact } from "@/sections/ResumeContact";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-black">
      {!introComplete && (
        <InitialScreen onComplete={() => setIntroComplete(true)} />
      )}
      
      {/* We only render the rest of the site once the intro is complete 
          or we can render it behind and let the intro cover it.
          Rendering it behind allows images to preload. */}
      
      <div className={`transition-opacity duration-1000 ${introComplete ? 'opacity-100' : 'opacity-0 overflow-hidden h-screen'}`}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <SelectedWork />
        <Photography />
        <Film />
        <Experience />
        <AchievementsExploring />
        <ResumeContact />
        <Footer />
      </div>
    </main>
  );
}
