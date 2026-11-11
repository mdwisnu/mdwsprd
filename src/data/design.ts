import { driveImageUrl } from "@/lib/utils";

export interface DesignCategory {
  id: string;
  label: string;
}

export const designCategories: DesignCategory[] = [
  { id: "all", label: "ALL" },
  { id: "desain-sosmed", label: "DESAIN SOSMED" },
  { id: "poster-flyer", label: "POSTER & FLYER" },
];

export interface DesignItem {
  id: string;
  category: "desain-sosmed" | "poster-flyer";
  image: string;
  width: number;
  height: number;
  featured?: boolean;
}

// Folder Google Drive Utama (Desain): https://drive.google.com/drive/folders/1XFz9mIzji_gNkaqpq2IW_YSO46tZiWm8
export const designs: DesignItem[] = [
  // ================= DESAIN SOSMED (Folder: 1azUR5jdi_RTEYLQM1kkizKz32mGrF18d) =================
  // Seri 1: 1.png, 2.png, 3.png (Nyambung)
  {
    id: "sosmed-1",
    category: "desain-sosmed",
    image: driveImageUrl("1vzqNVvO4Q-jVOt31NJARmNBT49MVlJgR"), // 1.png
    width: 1080,
    height: 1359,
  },
  {
    id: "sosmed-2",
    category: "desain-sosmed",
    image: driveImageUrl("1mnaON2svcHgGFibbPjfPyAPBL3mtzFIk"), // 2.png
    width: 1080,
    height: 1359,
  },
  {
    id: "sosmed-3",
    category: "desain-sosmed",
    image: driveImageUrl("1HrtlwgPPyIErXRIU2nUu49BWx1zHJ5Pi"), // 3.png
    width: 1080,
    height: 1359,
  },

  // Seri 2: desain ke 2 1.png, desain ke 2 2.png, desain ke 2 3.png (Nyambung)
  {
    id: "sosmed-4",
    category: "desain-sosmed",
    image: driveImageUrl("1uRo7iUnMVkoPlEk7kZdRBWdRgHCitaau"), // desain ke 2 1.png
    width: 1080,
    height: 1359,
  },
  {
    id: "sosmed-5",
    category: "desain-sosmed",
    image: driveImageUrl("1maHF7921o4qv9Ct-RHYcp-dqqGWrTEgQ"), // desain ke 2 2.png
    width: 1080,
    height: 1359,
  },
  {
    id: "sosmed-6",
    category: "desain-sosmed",
    image: driveImageUrl("19naTbZ1YFTL85h63WQNPXK3gaHok5aog"), // desain ke 2 3.png
    width: 1080,
    height: 1359,
  },

  // Seri 3: Artboard 1 - 5
  {
    id: "sosmed-7",
    category: "desain-sosmed",
    image: driveImageUrl("15lq4wF-6cRSuH1u4aL_Pl8mN9ehia_VR"), // Artboard 1.png
    width: 1080,
    height: 1380,
  },
  {
    id: "sosmed-8",
    category: "desain-sosmed",
    image: driveImageUrl("1RpyP8SDq91fpx8GLN9g714fIYQX0tKHT"), // Artboard 2.png
    width: 1080,
    height: 1380,
  },
  {
    id: "sosmed-9",
    category: "desain-sosmed",
    image: driveImageUrl("1-HN71eFqQqRTe7BzB4CTecBlO7PzBqSZ"), // Artboard 3.png
    width: 1080,
    height: 1380,
  },
  {
    id: "sosmed-10",
    category: "desain-sosmed",
    image: driveImageUrl("1A7wpWGH5KLMENrcCHoQPLXQhyYv-Xqxl"), // Artboard 4.png
    width: 1080,
    height: 1380,
  },
  {
    id: "sosmed-11",
    category: "desain-sosmed",
    image: driveImageUrl("1DMeZVimYimbk68EO-t4pmeo79byEXmK-"), // Artboard 5.png
    width: 1080,
    height: 1380,
  },

  // ================= POSTER DAN FLYER (Folder: 1srNLLVhm9p9ephc2z3k6vz68UrGJQdMy) =================
  {
    id: "poster-1",
    category: "poster-flyer",
    image: driveImageUrl("1V4ylRl3NsjnMvYflhH2-kgLsjjVCHvDk"), // poster Pre Event.png
    width: 1080,
    height: 1350,
  },
  {
    id: "poster-2",
    category: "poster-flyer",
    image: driveImageUrl("1ZkKBDqwCbwSPv1SECPc2ns1JfRM6baQQ"), // First desain.png
    width: 1080,
    height: 1350,
  },
  {
    id: "poster-3",
    category: "poster-flyer",
    image: driveImageUrl("11RPQgLYCLCz_5GDBHmutmToFkDfpn7G7"), // Second desain.png
    width: 1080,
    height: 1380,
  },
  {
    id: "poster-4",
    category: "poster-flyer",
    image: driveImageUrl("1S4sL9ZJQyLvEeuwIm2aAHVS6p82RhGJm"), // dsain ke 3.png
    width: 1080,
    height: 1380,
    featured: true,
  },
  {
    id: "poster-5",
    category: "poster-flyer",
    image: driveImageUrl("1BsaI49LIPLKUNSXdVE0_BMRqhoKhc1P-"), // desain ke 4.png
    width: 1080,
    height: 1380,
    featured: true,
  },
  {
    id: "poster-6",
    category: "poster-flyer",
    image: driveImageUrl("186y1hdWYS4VjJh_CF_hZkb9hzNShyLfV"), // Frame Wedding Putih.png
    width: 1200,
    height: 1800,
  },
  {
    id: "poster-7",
    category: "poster-flyer",
    image: driveImageUrl("1RQwfJWtoCmOinPAw4hVjtHVQfi-Vuvi9"), // Qr Photobooth.png
    width: 437,
    height: 613,
    featured: true,
  },
];
