import Image from "next/image";
import React from "react";
import "./Footer.css";
import friends from "/public/images/svg/friends.svg";
import facebook from "/public/images/svg/facebook.svg";
import instagram from "/public/images/svg/instagram.svg";
import linkedIn from "/public/images/svg/linkedin.svg";
import youtube from "/public/images/svg/youtube.svg";
import whatsapp from "/public/images/svg/whatsapp-small.svg";
import dimaak from "/public/images/svg/dimaak-logo-small.svg";
import leafSmall from "/public/images/png/leaf-small.png";
import leafBig from "/public/images/png/leaf-big.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer pt-[70px]">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col gap-12 py-[74px]">
          <div className="box-wrapper">
            <div className="absolute">
              <Image src={leafSmall} alt="leaf" />
            </div>
            <div className="content-wrapper flex justify-around items-center">
              <div className="enquiry-info flex flex-col gap-4 items-start">
                <h2 className="text-white text-4xl font-bold">
                  The great gateway, your way
                </h2>
                <span className="text-white text-base">
                  Save at least 15% on stays worldwide, from relaxing retreats
                  to off-grid adventures
                </span>
                <Link href="/">
                  <button className="enquiry-btn text-white text-base font-semibold">
                    Send Enquiry
                  </button>
                </Link>
              </div>
              <div className="flex">
                <Image src={friends} alt="friends" />
              </div>
            </div>
            {/* <div className="">
              <Image src={leafBig} alt="leaf" />
            </div> */}
          </div>
          <div className="flex flex-col">
            <div className="popular-wrapper flex flex-col gap-2 pb-4">
              <h4 className="list-title text-base font-medium">
                Popular Destination
              </h4>
              <ul className="nav-list lg:flex items-center gap-3 text-base sm:flex">
                <Link href="/thailand">
                  <li className="list-items">Thailand</li>
                </Link>
                <span className="disc" />
                <Link href="/bali">
                  <li className="list-items">Bali</li>
                </Link>
                <span className="disc" />
                <Link href="/singapore">
                  <li className="list-items">Singapore</li>
                </Link>
                <span className="disc" />
                <Link href="/maldives">
                  <li className="list-items">Maldives</li>
                </Link>
                <span className="disc" />
                <Link href="/dubai">
                  <li className="list-items">Dubai</li>
                </Link>
              </ul>
            </div>

            <div className="packages-wrapper flex flex-col gap-2 py-4">
              <h4 className="list-title text-base font-medium">
                Packages based on Theme
              </h4>
              <ul className="nav-list lg:flex items-center gap-3 text-base sm:flex">
                <li className="list-items">
                  <Link href="/bachelor">Budget / Bachelor</Link>
                </li>
                <span className="disc" />
                <li className="list-items">
                  <Link href="/honeymoon">Honey Moon</Link>
                </li>
                <span className="disc" />
                <li className="list-items">
                  <Link href="/family">Family</Link>
                </li>
                <span className="disc" />
                <li className="list-items">
                  <Link href="/group">Group Tours</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="flex lg:col-span-3 flex-col gap-4 items-start md:col-span-3 sm:col-span-2">
              <div className="flex flex-col contact-info gap-4">
                <span className="list-title text-base">Contact</span>
                <p className="address text-base">
                  Dimaak Tours, Workflo by OYO,Greeta Tower Phase1, Industrial
                  Estate, Perungudi, OMR, Chennai, Tamil Nadu 600096.
                </p>
                <Link href="/">
                  <button className="directions-btn text-white text-base font-semibold">
                    Get Directions
                  </button>
                </Link>
                <p className="address text-base">
                  Dimaak tours, Good Works Infinity Park,21, 2nd Main Rd,
                  Electronics City Phase 1, Electronic City, Bengaluru,
                  Karnataka 560100
                </p>
                <div className="flex flex-col gap-3">
                  <div>
                    <span className="list-title text-base">Social Links</span>
                  </div>
                  <div className="flex gap-2">
                    <Link href="https://www.facebook.com/" target="_blank">
                      <Image src={facebook} alt="facebook" />
                    </Link>
                    <Link
                      href="https://www.instagram.com/accounts/login/"
                      target="_blank"
                    >
                      <Image src={instagram} alt="instagram" />
                    </Link>
                    <Link href="https://www.linkedin.com/" target="_blank">
                      <Image src={linkedIn} alt="linkedIn" />
                    </Link>
                    <Link href="https://www.youtube.com/" target="_blank">
                      <Image src={youtube} alt="youtube" />
                    </Link>
                    <Link href="https://web.whatsapp.com/" target="_blank">
                      <Image src={whatsapp} alt="whatsapp" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex lg:col-span-1 flex-col gap-4 sm:col-span-12 md:col-span-3">
              <span className="list-title text-base">Call Us</span>
              <ul className="call-list text-base flex flex-col gap-4 ">
                <Link href="tel:+91960-009-9777">
                  <li className="list-items">Sales: +91 960-009-9777</li>
                </Link>
                <Link href="tel:+91988-688-3456">
                  <li className="list-items">COO: +91 988-688-3456</li>
                </Link>
                <Link href="tel:+91936-112-7954">
                  <li className="list-items">HCX: +91 936-112-7954</li>
                </Link>
                <Link href="tel:+91961-168-0883">
                  <li className="list-items">CEO: +91 961-168-0883</li>
                </Link>
              </ul>
            </div>
            <div className="flex lg:col-span-1 flex-col gap-4 sm:col-span-12 md:col-span-6">
              <span className="list-title text-base">Resources</span>
              <ul className="flex flex-col gap-4 ">
                <li className="list-items">
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li className="list-items">
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                <li className="list-items">
                  <Link href="/reviews">Customers Reviews</Link>
                </li>
                <li className="list-items">
                  <Link href="/thailand-group">Thailand Group Tours</Link>
                </li>
              </ul>
            </div>
            <div className="flex lg:col-span-1 flex-col gap-4 sm:col-span-12 md:col-span-6">
              <span className="list-title text-base">Legal</span>
              <ul className="flex flex-col gap-4">
                <li className="list-items">
                  <Link href="/privacy">Privacy policy</Link>
                </li>
                <li className="list-items">
                  <Link href="/terms">Terms & Conditions</Link>
                </li>
                <li className="list-items">
                  <Link href="/cancellation">Cancellation Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyrights-wrapper flex justify-between items-center pt-4">
            <a href="/">
              {" "}
              <Image src={dimaak} alt="dimaak" />
            </a>
            <span className="text-white text-sm">
              Dimaak Tours © 2023. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
