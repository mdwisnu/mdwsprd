import { driveImageUrl, driveVideoPreviewUrl } from "@/lib/utils";

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

// Folder Google Drive Utama (Video): https://drive.google.com/drive/folders/1ESF0nbPAjRNIEAFYwRh_NTIJ9HsOw-cV
export const films: FilmItem[] = [
  // ================= WEDDING (Folder: 1ymESJr2sSpW6DJ8oANiZHWIwWjnZZJD6) =================
  {
    id: "wedding-1",
    title: "Wedding Pandu & Dayu",
    category: "wedding",
    thumbnail: "/images/film/wedding pandu satya dan dayu sintya.png",
    videoUrl: driveVideoPreviewUrl("15dUYYQfyu-QPZQjAWMZ30uXrWzvv_eGi"), // INFERNOCREATIVE-WEDDING PANDU SATYA & DAYU SINTYA.mp4
    width: 1920,
    height: 1080,
    featured: true,
  },
  {
    id: "wedding-2",
    title: "Wedding Yande & Melly",
    category: "wedding",
    thumbnail: "/images/film/wedding yande dan melly.png",
    videoUrl: driveVideoPreviewUrl("1arUJz8BZVkdTy6UOQiuFUZz9j87caczE"), // INFERNOCREATIVE WEDDING YANDE & MELLY.mp4
    width: 1920,
    height: 1080,
  },
  {
    id: "wedding-3",
    title: "Prewedding Pandu & Dayu",
    category: "wedding",
    thumbnail: "/images/film/prewedding pandu satya dan dayu sintya.png",
    videoUrl: driveVideoPreviewUrl("1cmSzBYJ8RwB4LmB7NbVei0kKG5ZodkpN"), // prewed 1.mp4
    width: 1920,
    height: 1080,
  },
  {
    id: "wedding-4",
    title: "Wedding Edi & Sutari",
    category: "wedding",
    thumbnail: driveImageUrl("1ZmyqMjyUQfWdt-GawuERbBTrgJ52Yybx", 1280),
    videoUrl: driveVideoPreviewUrl("1ZmyqMjyUQfWdt-GawuERbBTrgJ52Yybx"), // INFERNOCRREATIVE WEDDING EDI AND SUTARI.mp4
    width: 1920,
    height: 1080,
  },
  {
    id: "wedding-5",
    title: "Wedding Jodi & Erna",
    category: "wedding",
    thumbnail: driveImageUrl("1xZmWsw0cC5aiXBZlNxbHTqgFdNZGBMoB", 1280),
    videoUrl: driveVideoPreviewUrl("1xZmWsw0cC5aiXBZlNxbHTqgFdNZGBMoB"), // INFERNOCREATIVE WEDDING JODI & ERNA.mp4
    width: 1920,
    height: 1080,
  },
  {
    id: "wedding-6",
    title: "Wedding Junet & Fenny",
    category: "wedding",
    thumbnail: driveImageUrl("1GxXkqasjoKGpq2Nv57kAGVAFptBASbsZ", 1280),
    videoUrl: driveVideoPreviewUrl("1GxXkqasjoKGpq2Nv57kAGVAFptBASbsZ"), // INFERNOCREATIVE REVISI 3.mp4
    width: 1920,
    height: 1080,
  },

  // ================= EVENT (Folder: 1lkyazXW_cf1xcJTYtOX4ldROCOOLXIHe) =================
  {
    id: "event-1",
    title: "Desa Celuk Documentary",
    category: "event",
    thumbnail: "/images/film/desa-celuk.jpg",
    videoUrl: driveVideoPreviewUrl("168OnLPr-V0E3ypjFUM26xRtHuYD9I1Q6"), // INFERNOCREATIVE-DESA CELUK.mp4
    width: 1920,
    height: 1080,
    featured: true,
  },
  {
    id: "event-2",
    title: "Pengabenan Ni Made Rinanti",
    category: "event",
    thumbnail: driveImageUrl("1pJKc-7aSMEbJ1bvfQ7YPBz1DQV2IHHp3", 1280),
    videoUrl: driveVideoPreviewUrl("1pJKc-7aSMEbJ1bvfQ7YPBz1DQV2IHHp3"), // INFERNOCREATIVE-PENGABENAN SAUDARA MOMET.mp4
    width: 1920,
    height: 1080,
  },
  {
    id: "event-3",
    title: "Pengaben I Made Sidia",
    category: "event",
    thumbnail: driveImageUrl("16h4XRYEAItX9Vukf9WYRfWC-X94wtefn", 1280),
    videoUrl: driveVideoPreviewUrl("16h4XRYEAItX9Vukf9WYRfWC-X94wtefn"), // Revised.mp4
    width: 1920,
    height: 1080,
  },

  // ================= FILM (Folder: 1yHey5wMF8Yh4sur8TTiIFZ0zt6SQmRq1) =================
  {
    id: "film-1",
    title: "Two Side of Bali",
    category: "film",
    thumbnail: "/images/film/twosideofbalibaru.png",
    videoUrl: driveVideoPreviewUrl("1QnzNznbjH_wkF37rEOz3zU429u05jxJ8"), // Two Side Of Bali _ Short Movie.mp4
    width: 1280,
    height: 720,
    featured: true,
  },
];

