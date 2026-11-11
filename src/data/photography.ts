import { driveImageUrl } from "@/lib/utils";

export interface PhotoCategory {
  id: string;
  label: string;
}

export const photoCategories: PhotoCategory[] = [
  { id: "all", label: "ALL" },
  { id: "wedding", label: "WEDDING" },
  { id: "graduation", label: "GRADUATION" },
  { id: "photoshoot", label: "PHOTOSHOOT" },
  { id: "event", label: "EVENT" },
];

export interface Photo {
  id: string;
  title: string;
  category: "wedding" | "graduation" | "photoshoot" | "event";
  image: string;
  width: number;
  height: number;
  aspectRatio: "portrait" | "landscape";
  featured?: boolean;
}

// Folder Google Drive Utama (Foto): https://drive.google.com/drive/folders/1y-jAhE5yyXJ5iz6KmvorgpPasylBJ8Ov
export const photography: Photo[] = [
  // ================= WEDDING (Folder: 1Xk25Q6De251JNduak3_XzBJuFaBtvM9C) =================
  {
    id: "wedding-1",
    title: "Wedding Ceremony",
    category: "wedding",
    image: driveImageUrl("1Pq5IDl-LwSygnzWznIvxSeUfM-lrPAy2"), // DSC07522.jpg
    width: 3376,
    height: 6000,
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "wedding-2",
    title: "Wedding Ceremony",
    category: "wedding",
    image: driveImageUrl("1RU5hBmekQQdyPyq1FzoaTOZbACKaEal5"), // DSC07579.jpg
    width: 6000,
    height: 3376,
    aspectRatio: "landscape",
  },
  {
    id: "wedding-3",
    title: "Wedding Ceremony",
    category: "wedding",
    image: driveImageUrl("1xNkOJPLxBj0pV1a1on1oWGm3NM7azhVT"), // DSC07612-Enhanced-NR.jpg
    width: 3376,
    height: 6000,
    aspectRatio: "portrait",
  },
  {
    id: "wedding-4",
    title: "Wedding Ceremony",
    category: "wedding",
    image: driveImageUrl("1aZVhw5XtxGHrgcCoQY0S3D1RwFTr-wZR"), // DSC08732.jpg
    width: 6000,
    height: 3376,
    aspectRatio: "landscape",
  },
  {
    id: "wedding-5",
    title: "Wedding Ceremony",
    category: "wedding",
    image: driveImageUrl("1v9tHIzzKuUeGXVOXd_aeWbCPMnIRn_m-"), // DSC08767.jpg
    width: 3376,
    height: 6000,
    aspectRatio: "portrait",
  },
  {
    id: "wedding-6",
    title: "Wedding Ceremony",
    category: "wedding",
    image: driveImageUrl("11VdbbE1RjJO5CYXBbUmOuMB6yQ_ly6xM"), // Inferno_Photo (134).jpg
    width: 4000,
    height: 6000,
    aspectRatio: "portrait",
  },
  {
    id: "wedding-7",
    title: "Wedding Ceremony",
    category: "wedding",
    image: driveImageUrl("1qYzYcx_ulHxhZUAp6mNNS_RHu29S1ycA"), // Inferno_Photo (136).jpg
    width: 6000,
    height: 4000,
    aspectRatio: "landscape",
  },
  {
    id: "wedding-8",
    title: "Wedding Ceremony",
    category: "wedding",
    image: driveImageUrl("1JKHR2_VBk1aRp0v2z7fo0HTXElwk01zW"), // Inferno_Photo (138).jpg
    width: 6000,
    height: 4000,
    aspectRatio: "landscape",
  },
  {
    id: "wedding-9",
    title: "Wedding Ceremony",
    category: "wedding",
    image: driveImageUrl("1lbbaESBye7ieqN_yZRyoSAjBfRP8khrB"), // Inferno_Photo (142).jpg
    width: 6000,
    height: 4000,
    aspectRatio: "landscape",
  },
  {
    id: "wedding-10",
    title: "Wedding Ceremony",
    category: "wedding",
    image: driveImageUrl("1rUV5DBXj7RwIyG9S71aTy5wuOWAd-Hpu"), // Inferno_Photo (171).jpg
    width: 4000,
    height: 6000,
    aspectRatio: "portrait",
  },
  {
    id: "wedding-11",
    title: "Wedding Ceremony",
    category: "wedding",
    image: driveImageUrl("1eLcW4Og5HoAstsw4ZiwIbdiEz1-Tu2T3"), // Inferno_Photo (184).jpg
    width: 6000,
    height: 4000,
    aspectRatio: "landscape",
  },

  // ================= GRADUATION (Folder: 1Fo6CVatF2O3o_3QDsMez-pjFOwDTTtcd) =================
  {
    id: "graduation-1",
    title: "Graduation Session",
    category: "graduation",
    image: driveImageUrl("1OM1c1BT5zN1uA9Vq_z9uyJfzVj9juf9F"), // DSC01923.jpg
    width: 4000,
    height: 6000,
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "graduation-2",
    title: "Graduation Session",
    category: "graduation",
    image: driveImageUrl("10yjRFMI4NkBHsFtknF6gggSuh8YPBdXz"), // DSC01951.jpg
    width: 4000,
    height: 6000,
    aspectRatio: "portrait",
  },
  {
    id: "graduation-3",
    title: "Graduation Session",
    category: "graduation",
    image: driveImageUrl("1Gz4f_gCFUOZMmGAQayXSFUFKC9dqwKiO"), // DSC01955.jpg
    width: 4000,
    height: 6000,
    aspectRatio: "portrait",
  },
  {
    id: "graduation-4",
    title: "Graduation Session",
    category: "graduation",
    image: driveImageUrl("1WylzbJ24mw9lDAk19BGGB1AYfV5We2f0"), // DSC07077.jpg
    width: 3341,
    height: 5937,
    aspectRatio: "portrait",
  },
  {
    id: "graduation-5",
    title: "Graduation Session",
    category: "graduation",
    image: driveImageUrl("13PI_GhgwTVT9pQltNRp5EHEnNrcmKa9X"), // DSC07153.jpg
    width: 6000,
    height: 3376,
    aspectRatio: "landscape",
  },
  {
    id: "graduation-6",
    title: "Graduation Session",
    category: "graduation",
    image: driveImageUrl("15phkIlyl-FJtIaT6oavuhwAxn3VghC3A"), // DSC07175.jpg
    width: 3376,
    height: 6000,
    aspectRatio: "portrait",
  },
  {
    id: "graduation-7",
    title: "Graduation Session",
    category: "graduation",
    image: driveImageUrl("1vnb_XnmeEZ2zxSGkdHG3yDl75-EvsahX"), // DSC07181.jpg
    width: 3376,
    height: 6000,
    aspectRatio: "portrait",
  },
  {
    id: "graduation-8",
    title: "Graduation Session",
    category: "graduation",
    image: driveImageUrl("16Bnb1WxibbdhV341KqSRqjlHymqpCSaP"), // DSC07190.jpg
    width: 3376,
    height: 6000,
    aspectRatio: "portrait",
  },
  {
    id: "graduation-9",
    title: "Graduation Session",
    category: "graduation",
    image: driveImageUrl("1ai4ipmvCJsGDAAQ9oVccNIA1XiO-eTBq"), // DSC07192.jpg
    width: 3376,
    height: 6000,
    aspectRatio: "portrait",
  },
  {
    id: "graduation-10",
    title: "Graduation Session",
    category: "graduation",
    image: driveImageUrl("1q514deYvrdK5QkEXgQdBfwuB9A4YHVSi"), // DSC07334.jpg
    width: 3376,
    height: 6000,
    aspectRatio: "portrait",
  },
  {
    id: "graduation-11",
    title: "Graduation Session",
    category: "graduation",
    image: driveImageUrl("1RY9FKdnXZAZNIDwoavic1iVlY2rGSn9Y"), // DSC07370.jpg
    width: 5839,
    height: 3285,
    aspectRatio: "landscape",
  },
  {
    id: "graduation-12",
    title: "Graduation Session",
    category: "graduation",
    image: driveImageUrl("1Dhkbrbckfe6aaD2AJa6E9MA2Z4THxLWB"), // DSC07371.jpg
    width: 3337,
    height: 5930,
    aspectRatio: "portrait",
  },
  {
    id: "graduation-13",
    title: "Graduation Session",
    category: "graduation",
    image: driveImageUrl("1akAMrT0gMSoOYTx8pQ_zyaxk_ZGk344O"), // DSC07373.jpg
    width: 6000,
    height: 3376,
    aspectRatio: "landscape",
  },
  {
    id: "graduation-14",
    title: "Graduation Session",
    category: "graduation",
    image: driveImageUrl("11DkMhaZiUaXUTb8R1sSuKwO4xlbS6nw8"), // IMG_6278.jpg
    width: 5184,
    height: 3456,
    aspectRatio: "landscape",
  },
  {
    id: "graduation-15",
    title: "Graduation Session",
    category: "graduation",
    image: driveImageUrl("15Xj683WYo35RAN1Hc6ikQTp6014QvVji"), // IMG_6316-Enhanced-NR.jpg
    width: 3456,
    height: 5184,
    aspectRatio: "portrait",
  },
  {
    id: "graduation-16",
    title: "Graduation Session",
    category: "graduation",
    image: driveImageUrl("1BLcF5s7JMaapZOPxR5HROnLinhjcofun"), // IMG_6324-Enhanced-NR.jpg
    width: 5184,
    height: 3456,
    aspectRatio: "landscape",
  },
  {
    id: "graduation-17",
    title: "Graduation Session",
    category: "graduation",
    image: driveImageUrl("1yWUc-L0hKY13Ibyxpttmv6WsPkD6XvR6"), // IMG_6371-Enhanced-NR.jpg
    width: 3456,
    height: 5184,
    aspectRatio: "portrait",
  },
  {
    id: "graduation-18",
    title: "Graduation Session",
    category: "graduation",
    image: driveImageUrl("1Aw723DJluEhuyl8WdA_zpHUDPHtomb9C"), // IMG_6375 (2).jpg
    width: 3456,
    height: 5184,
    aspectRatio: "portrait",
  },

  // ================= PHOTOSHOOT (Folder: 13T35VtUiifG9t-xPz_2VdC-t5iK9BZll) =================
  {
    id: "photoshoot-1",
    title: "Photoshoot Session",
    category: "photoshoot",
    image: driveImageUrl("1LQwEnQXpzAeDHVhGtllsfz5XCiIDrD66"), // DSC08689.jpg
    width: 3376,
    height: 6000,
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "photoshoot-2",
    title: "Photoshoot Session",
    category: "photoshoot",
    image: driveImageUrl("15MitUE6kaiJAmoIiTYGzGzqRzsVufgQV"), // DSC08716.jpg
    width: 3376,
    height: 6000,
    aspectRatio: "portrait",
  },
  {
    id: "photoshoot-3",
    title: "Photoshoot Session",
    category: "photoshoot",
    image: driveImageUrl("1U1HFKTWDYmW1v5QKOogMwLU82W2vIZf6"), // DSC08800.jpg
    width: 3376,
    height: 6000,
    aspectRatio: "portrait",
  },
  {
    id: "photoshoot-4",
    title: "Photoshoot Session",
    category: "photoshoot",
    image: driveImageUrl("1GvwsjkC22jxjNiwpC1NHUsIG_roVmjPd"), // DSC08802.jpg
    width: 3376,
    height: 6000,
    aspectRatio: "portrait",
  },
  {
    id: "photoshoot-5",
    title: "Photoshoot Session",
    category: "photoshoot",
    image: driveImageUrl("1JbYhuPC4xjVCIx3lX6OIF6rXiC2npx1F"), // DSC08804.jpg
    width: 3376,
    height: 6000,
    aspectRatio: "portrait",
  },
  {
    id: "photoshoot-6",
    title: "Photoshoot Session",
    category: "photoshoot",
    image: driveImageUrl("1ZcejoIMHKdy_C98DqDVFqi1eZ9ELdSyd"), // DSC08808.jpg
    width: 3376,
    height: 6000,
    aspectRatio: "portrait",
  },

  // ================= EVENT (Folder: 1wKfEP_nZVM0DwJBmN38PgA_Bc8nQYe8n) =================
  {
    id: "event-1",
    title: "Event Highlight",
    category: "event",
    image: driveImageUrl("1iHSrL0gqhZPxHR9EBsUMPm8w-So-s_X9"), // _DSC0419.jpg
    width: 1080,
    height: 1616,
    aspectRatio: "portrait",
    featured: true,
  },
  {
    id: "event-2",
    title: "Event Coverage",
    category: "event",
    image: driveImageUrl("16wQ2cT6qzl6RkmWXVHkjGVPWPSbj8s_e"), // DSC04681.jpg
    width: 6000,
    height: 4000,
    aspectRatio: "landscape",
  },
  {
    id: "event-3",
    title: "Event Atmosphere",
    category: "event",
    image: driveImageUrl("1IQKTpIP52wz7T4WbyHQc2fy6QvOegUYn"), // _DSC0162.jpg
    width: 1616,
    height: 1080,
    aspectRatio: "landscape",
  },
  {
    id: "event-4",
    title: "Stage & Crowd",
    category: "event",
    image: driveImageUrl("12Xu2E6D_9s0slxKY22QQFMrfAVQuY_Oa"), // _DSC0578.jpg
    width: 1080,
    height: 1616,
    aspectRatio: "portrait",
  },
  {
    id: "event-5",
    title: "Live Performance",
    category: "event",
    image: driveImageUrl("1ZHX5afUq6eo1en__GfzngRX9i3ncQjKn"), // _DSC0832.jpg
    width: 1080,
    height: 1616,
    aspectRatio: "portrait",
  },
  {
    id: "event-6",
    title: "Event Moment",
    category: "event",
    image: driveImageUrl("1q4Yo3YkplB8eRTo7xYyu_fDn1MpEX4LY"), // _DSC1123.jpg
    width: 1616,
    height: 1080,
    aspectRatio: "landscape",
  },
  {
    id: "event-7",
    title: "Event Crowd",
    category: "event",
    image: driveImageUrl("1ikyNRKm7g-nz3yUF2_rM_pV7MgphNgAZ"), // _DSC1157.jpg
    width: 1616,
    height: 1080,
    aspectRatio: "landscape",
  },
];

