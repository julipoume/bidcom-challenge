"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { CarouselImage } from "@/app/lib/definitions";
import Autoplay from "embla-carousel-autoplay";

interface CarouselProps {
  images: CarouselImage[];
}

export default function ImageCarousel({ images }: CarouselProps) {
  return (
    <div className="w-full md:max-w-xl mx-auto px-4">
      <Carousel
        plugins={[
          Autoplay({
            delay: 8000,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={image.image} className="flex justify-center">
              <Image
                src={image.image}
                alt={"Image Carousel"}
                width={700}
                height={820}
                priority={index === 0}
                className="flex justify-center border-4 border-transparent overflow-hidden rounded-tl-[100px] rounded-br-[100px] rounded-tr-[40px] rounded-bl-[40px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
