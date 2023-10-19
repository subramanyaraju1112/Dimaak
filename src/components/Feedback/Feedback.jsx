import Image from "next/image";
import React from "react";
import travel from "/public/images/svg/travel.svg";
import quote from "/public/images/svg/quote.svg";
import userPicture from "/public/images/svg/user-picture.svg";
import googlereviews from "/public/images/svg/google-reviews.svg";
import "./Feedback.style.css";
import Link from "next/link";

const Feedback = () => {
  return (
    <section className="feedback-section">
      <div className="container mx-auto px-4">
        <div className="flex justify-center gap-6 py-[72px] review-wrapper">
          <div className="image-wrapper">
            <Image src={travel} alt="travel" />
          </div>
          <div className="flex flex-col gap-9">
            <div className="review-box flex flex-col">
              <div className="pl-[26px] mb-[33px]">
                <Image src={quote} alt="quote" />
              </div>
              <div className="flex flex-col gap-5 pl-[42px] pr-[44px]">
                <div className="max-w-[549px]">
                  <p className="review text-lg font-light">
                    We just went to Phuket, Pattaya and Bangkok and had a great
                    experience and memories in Thailand. Thank you Team Dimaak
                    and Thai Tour Team for ur excellent support and coordinating
                    the trip in a superb way. I want to really want to thank
                    Anirudh for his excellent coordination and prompt responses
                    to our queries and requests.
                  </p>
                </div>
                <div className="flex items-center gap-3 mb-[40px]">
                  <Image
                    src={userPicture}
                    alt="user-picture"
                    width={77}
                    height={77}
                  />
                  <span className="user-name text-lg font-semibold">
                    -Subash Raj Anandhan
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-8 justify-end items-center">
              <div>
                <Image src={googlereviews} alt="google-reviews" />
              </div>
              <Link href="/">
                <button className="review-btn text-white text-base font-semibold">
                  View more Reviews
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
