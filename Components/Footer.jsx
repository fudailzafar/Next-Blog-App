import { assets } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center">
      <Link href="/">
        <h1 className="text-white">StockHub</h1>
      </Link>
      <p className="text-sm text-white">
        All rights reserved. Copyright @StockHub
      </p>
      <div className="flex">
        <Link href="https://www.facebook.com/">
          <Image src={assets.facebook_icon} alt="" width={40} />
        </Link>
        <Link href="https://www.google.com/">
          <Image src={assets.googleplus_icon} alt="" width={40} />
        </Link>
        <Link href="https://x.com/">
          <Image src={assets.twitter_icon} alt="" width={40} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
