export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  link?: string;
  number: string;
}

export const projects: Project[] = [
  {
    id: "inferno-creative",
    title: "INFERNO CREATIVE",
    category: "",
    description:
      "One-stop creative service yang menggabungkan photography, videography, photobooth, digital invitation, dan web design.",
    technologies: ["Branding", "Web Development", "Photography", "Videography", "Business"],
    image: "/images/projects/inferno creative.png",
    link: "https://www.inferno-production.com",
    number: "",
  },
  {
    id: "inferno-photobooth",
    title: "INFERNO PHOTOBOOTH",
    category: "",
    description:
      "Inferno Photobooth adalah layanan photobooth dari Inferno Creative yang menyediakan dokumentasi foto instan untuk berbagai acara, seperti pernikahan, ulang tahun, graduation, gathering, dan event perusahaan. Konsepnya menggabungkan fotografi digital + pengalaman interaktif, sehingga tamu bisa mengambil foto dengan mudah dan mendapatkan hasil yang menarik.",
    technologies: ["Next.js", "Database", "n8n", "Google Calendar", "Automation"],
    image: "/images/projects/inferno photobooth.png",
    link: "https://www.inferno-production.com/photobooth",
    number: "",
  },
];
