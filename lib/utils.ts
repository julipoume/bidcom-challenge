import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: any[]) {
  return twMerge(clsx(...inputs));
}

export async function validateImages(images: { image: string }[]) {
  const validations = images.map(async (img) => {
    try {
      const res = await fetch(img.image, { method: "HEAD" });
      const contentType = res.headers.get("content-type") || "";
      const isImage = contentType.startsWith("image/");

      if (res.ok && isImage) {
        return img;
      }
      return null;
    } catch (error) {
      return null;
    }
  });

  const results = await Promise.all(validations);
  return results.filter((img): img is { image: string } => img !== null);
}
