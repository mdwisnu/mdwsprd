export interface SkillCategory {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: "camera" | "video" | "scissors";
  items: string[];
  tags: string[];
}

export const skills: SkillCategory[] = [
  {
    id: "photography",
    number: "01",
    title: "PHOTOGRAPHY",
    tagline: "Commercial, Editorial & Drone",
    description: "Capturing striking stills with intentional lighting, composition, and emotional resonance for brands, models, and personal projects.",
    icon: "camera",
    items: [
      "Commercial Photography",
      "Editorial & Portraiture",
      "Drone Aerial Stills",
      "Landscape & Architecture",
      "Studio & Natural Lighting",
      "Adobe Lightroom",
      "Adobe Photoshop",
      "Composition & Directing",
    ],
    tags: [""],
  },
  {
    id: "videography",
    number: "02",
    title: "VIDEOGRAPHY",
    tagline: "Cinematic Film & Directing",
    description: "Directing and filming high-impact moving visuals with dynamic camera movement, cinematic framing, and authentic storytelling.",
    icon: "video",
    items: [
      "Short Film Direction",
      "Commercial Video Ads",
      "Event Aftermovies",
      "Drone Cinematography",
      "Music Videos",
      "Gimbal & Handheld Motion",
      "Sound & Field Audio",
      "Location Scouting",
    ],
    tags: [""],
  },
  {
    id: "editing",
    number: "03",
    title: "VIDEO EDITING",
    tagline: "Post-Production & Color Grading",
    description: "Transforming raw footage into rhythmically engaging visual stories with precise pacing, sound design, and signature color grading.",
    icon: "scissors",
    items: [
      "Adobe Premiere Pro",
      "DaVinci Resolve",
      "CapCut Pro",
      "Cinematic Color Grading",
      "Sound Design & Audio Mix",
      "Motion Graphics & Titles",
      "Pacing & Story Flow",
      "Format Optimization (Reels/YouTube)",
    ],
    tags: [""],
  },
];
