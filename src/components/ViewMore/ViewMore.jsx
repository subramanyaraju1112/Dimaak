import React from "react";
import "./ViewMore.css";
import viewMore from "/public/images/svg/View more on Instagram.svg";
import image2 from "/public/images/png/image-2.png";
import image3 from "/public/images/png/image-3.png";
import image4 from "/public/images/png/image-4.png";
import image5 from "/public/images/png/image-5.png";
import image8 from "/public/images/png/image-8.png";
import image9 from "/public/images/png/image-9.png";
import image10 from "/public/images/png/image-10.png";
import image11 from "/public/images/png/image-11.png";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const ViewMore = () => {
  return (
    <section className="viewMore-section">
      <div className="flex flex-col gap-8">
        <>
          <Marquee direction="right">
            <div className="flex gap-4 pr-4">
              <Image src={image8} alt="image" />
              <Image src={image9} alt="image" />
              <Image src={image10} alt="image" />
              <Image src={image11} alt="image" />
              <Image src={image2} alt="image" />
              <Image src={image3} alt="image" />
              <Image src={image4} alt="image" />
              <Image src={image5} alt="image" />
            </div>
          </Marquee>
        </>

        <div className="lg:flex lg:flex-row lg:justify-center lg:gap-12 md:flex md:flex-col md:items-center md:gap-1 sm:flex sm:flex-col sm:gap-1 text-center">
          <h3 className="view-more-text font-bold">View more on Instagram</h3>

          <Link href="/">
            <button className="view-btn text-white font-semibold">
              View More
            </button>
          </Link>
        </div>
        <>
          <Marquee direction="left">
            <div className="flex gap-4 pr-4">
              <Image src={image2} alt="image" />
              <Image src={image3} alt="image" />
              <Image src={image4} alt="image" />
              <Image src={image5} alt="image" />
              <Image src={image8} alt="image" />
              <Image src={image9} alt="image" />
              <Image src={image10} alt="image" />
              <Image src={image11} alt="image" />
            </div>
          </Marquee>
        </>
      </div>
    </section>
  );
};

export default ViewMore;
