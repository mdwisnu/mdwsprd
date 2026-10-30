export interface FilmCategory {
  id: string;
  label: string;
}

export const filmCategories: FilmCategory[] = [
  { id: "all", label: "ALL" },
  { id: "wedding", label: "WEDDING" },
  { id: "event", label: "EVENT" },
  { id: "film", label: "FILM" },
];

export interface FilmItem {
  id: string;
  title: string;
  category: "wedding" | "event" | "film";
  thumbnail?: string;
  videoUrl: string;
  width: number;
  height: number;
  featured?: boolean;
}

export const films: FilmItem[] = [
  // ================= WEDDING =================
  {
    id: "wedding-1",
    title: "Wedding Pandu & Dayu",
    category: "wedding",
    thumbnail: "/images/film/wedding pandu satya dan dayu sintya.png",
    videoUrl: "/videos/Wedding/INFERNOCREATIVE-WEDDING PANDU SATYA & DAYU SINTYA.mp4",
    width: 1920,
    height: 1080,
    featured: true,
  },
  {
    id: "wedding-2",
    title: "Wedding Yande & Melly",
    category: "wedding",
    thumbnail: "/images/film/wedding yande dan melly.png",
    videoUrl: "/videos/Wedding/INFERNOCREATIVE WEDDING YANDE & MELLY.mp4",
    width: 1920,
    height: 1080,
  },
  {
    id: "wedding-3",
    title: "Prewedding Pandu & Dayu",
    category: "wedding",
    thumbnail: "/images/film/prewedding pandu satya dan dayu sintya.png",
    videoUrl: "/videos/Wedding/prewed 1.mp4",
    width: 1920,
    height: 1080,
  },
  {
    id: "wedding-4",
    title: "Wedding Edi & Sutari",
    category: "wedding",
    videoUrl: "/videos/Wedding/INFERNOCREATIVE WEDDING EDI & SUTARI.mp4",
    width: 1920,
    height: 1080,
  },
  {
    id: "wedding-5",
    title: "Wedding Jodi & Erna",
    category: "wedding",
    videoUrl: "/videos/Wedding/INFERNOCREATIVE WEDDING JODI & ERNA.mp4",
    width: 1920,
    height: 1080,
  },
  {
    id: "wedding-6",
    title: "Wedding Junet & Fenny",
    category: "wedding",
    videoUrl: "/videos/Wedding/INFERNOCREATIVE REVISI 3.mp4",
    width: 1920,
    height: 1080,
  },

  // ================= EVENT =================
  {
    id: "event-1",
    title: "Desa Celuk Documentary",
    category: "event",
    videoUrl: "/videos/Event/INFERNOCREATIVE-DESA CELUK.mp4",
    width: 1920,
    height: 1080,
    featured: true,
  },
  {
    id: "event-2",
    title: "Pengabenan Ni Made Rinanti",
    category: "event",
    videoUrl: "/videos/Event/INFERNOCREATIVE-PENGABENAN SAUDARA MOMET.mp4",
    width: 1920,
    height: 1080,
  },
  {
    id: "event-3",
    title: "Pengaben I Made Sidia",
    category: "event",
    videoUrl: "/videos/Event/Revised.mp4",
    width: 1920,
    height: 1080,
  },

  // ================= FILM =================
  {
    id: "film-1",
    title: "Two Side of Bali",
    category: "film",
    thumbnail: "/images/film/twosideofbalibaru.png",
    videoUrl: "/videos/Film/Two Side Of Bali _ Short Movie.mp4",
    width: 1280,
    height: 720,
    featured: true,
  },
];
