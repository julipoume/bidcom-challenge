import { validateImages } from "@/lib/utils";
import ButtonLink from "../components/ButtonLink/ButtonLink";
import ImageCarousel from "../components/Carousel/Carousel";
import SideDescription from "../components/SideDescription/SideDescription";
import UpArrow from "../components/UpArrow/UpArrow";

import { fetchInfo, fetchImages } from "../lib/api";

export default async function Page() {
  const data = await fetchInfo();
  const images = await fetchImages();

  // The image validator was implemented, but was commented out for performance reasons.
  // const validImages = await validateImages(images);

  const ButtonSection = ({ showIn }: { showIn: "desktop" | "mobile" }) => {
    if (!data?.button) return null;
    return (
      <ButtonLink
        link={data.button.link}
        title={data.button.title}
        showIn={showIn}
      />
    );
  };

  return (
    <>
      <main className="flex flex-col md:flex-row justify-center items-center px-4 max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center">
          <SideDescription data={data} />
          <ButtonSection showIn="desktop" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          {images?.length > 10 ? (
            <ImageCarousel images={images} />
          ) : (
            <img
              src="/assets/personal-image.png"
              alt="Default image"
              className="mx-auto w-full max-w-[320px] md:max-w-full h-auto"
            />
          )}
          <ButtonSection showIn="mobile" />
        </div>
      </main>

      <UpArrow />
    </>
  );
}
