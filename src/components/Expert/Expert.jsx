import Image from "next/image";
import React from "react";
import "./Expert.css";
import Link from "next/link";
import figure1 from "/public/images/png/figure-1.png";
import figure2 from "/public/images/png/figure-2.png";
import figure3 from "/public/images/png/figure-3.png";
import figure4 from "/public/images/png/figure-4.png";
import figure5 from "/public/images/png/figure-5.png";

const Expert = () => {
  return (
    <section className="expert-section">
      <div className="expert-wrapper">
        <div className="flex gap-4 justify-end">
          <div className="flex flex-col gap-5">
            <Image src={figure1} alt="figure" />
            <Image src={figure2} alt="figure" />
            <Image src={figure3} alt="figure" />
          </div>
          <div className="flex flex-col gap-4">
            <Image src={figure4} alt="figure" />
            <Image src={figure5} alt="figure" />
          </div>
        </div>
        <div className="container px-4">
          <div className="content-box  flex flex-col gap-9 justify-center">
            <div className="content-info flex flex-col gap-3">
              <h3>Our Happy Experts</h3>
              <h2 className="text-white">
                Meet The Expert Travel Planners Dimaak Team
              </h2>
              <span className="text-white">
                Testimonial makes collecting text and video testimonials fast
                and easy for any business who needs social proof.
              </span>
            </div>
            <div>
              <Link href="/">
                <button className="expert-btn text-white">
                  Know Our Experts
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expert;
