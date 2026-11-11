import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Extracts a Google Drive File ID from either a raw ID or a full Google Drive share URL.
 */
export function extractDriveId(idOrUrl: string): string {
  const match =
    idOrUrl.match(/\/d\/([a-zA-Z0-9_-]+)/) ||
    idOrUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  return match ? match[1] : idOrUrl.trim();
}

/**
 * Generates a direct high-res image / thumbnail URL from a Google Drive File ID or share link.
 */
export function driveImageUrl(idOrUrl: string, width = 2000): string {
  if (idOrUrl.startsWith("/")) return idOrUrl;
  const id = extractDriveId(idOrUrl);
  return `https://lh3.googleusercontent.com/d/${id}=w${width}`;
}

/**
 * Generates a Google Drive embed player URL (/preview) for smooth video streaming.
 */
export function driveVideoPreviewUrl(idOrUrl: string): string {
  if (idOrUrl.startsWith("/")) return idOrUrl;
  const id = extractDriveId(idOrUrl);
  return `https://drive.google.com/file/d/${id}/preview`;
}

