export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: "inferno-creative",
    company: "Inferno Creative",
    role: "Founder & Creative",
    period: "2024 — Present",
    description: "Photography, videography, photobooth & digital invitation.",
  },

  {
    id: "freelance-creative",
    company: "Freelance Visual Creator",
    role: "Photographer & Videographer",
    period: "2023 — Present",
    description: "Wedding, graduation, event, and commercial visual projects.",
  },
  {
    id: "primakara-university",
    company: "Primakara University",
    role: "Informatics Student",
    period: "2023 - Present",
    description: "Software development, creative technology & computer vision.",
  },
  {
    id: "blu-zea-resort",
    company: "Blu-Zea Resort by Double Six",
    role: "IT Support Intern",
    period: "September 2026 - Desember 2026",
    description: "System maintenance, hardware & network infrastructure.",
  },
];
