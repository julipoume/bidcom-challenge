import { INFO_API_URL, IMAGES_API_URL } from "./constants";
import { CarouselImage, DataInfo } from "./definitions";

export async function fetchInfo(): Promise<DataInfo> {
  const res = await fetch(INFO_API_URL);
  if (!res.ok) throw new Error("Failed to fetch personal info");
  return res.json();
}

export async function fetchImages(): Promise<CarouselImage[]> {
  const res = await fetch(IMAGES_API_URL);
  if (!res.ok) throw new Error("Failed to fetch images");
  return res.json();
}