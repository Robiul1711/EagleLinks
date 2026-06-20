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
    <section className="bg-black py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-[#99A1AF] text-xl mb-10">
          Eagle Likes is seen on...
        </h3>

        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
          autoFill
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className="mx-10 flex items-center justify-center"
            >
              <Image
                src={brand}
                alt={`brand-${index}`}
                className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Brand;