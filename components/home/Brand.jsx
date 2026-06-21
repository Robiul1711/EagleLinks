"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

import b1 from "@/public/images/b1.png";
import b2 from "@/public/images/b2.png";
import b3 from "@/public/images/b3.png";
import b4 from "@/public/images/b4.png";
import b5 from "@/public/images/b5.png";
import b6 from "@/public/images/b6.png";

const brands = [b1, b2, b3, b4, b5, b6];

const Brand = () => {
  return (
    <section className="bg-black overflow-hidden ">
      <div className="container mx-auto px-4 sm:px-6">
        <h3 className="mb-6 sm:mb-8 xl:mb-10 text-center text-sm sm:text-base md:text-lg xl:text-xl text-Secondary">
          Eagle Likes is seen on...
        </h3>

        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover
          autoFill
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className="mx-5 sm:mx-8 md:mx-10 flex items-center justify-center"
            >
              <Image
                src={brand}
                alt={`brand-${index}`}
                className="
                  h-6
                  sm:h-8
                  md:h-9
                  xl:h-10
                  w-auto
                  object-contain
                  opacity-90
                  transition
                  hover:opacity-100
                "
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Brand;