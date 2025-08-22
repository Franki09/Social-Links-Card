import Image from "next/image";
import Link from "next/link";
import React from "react";

function SocialLinksCard() {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg bg-Grey-Mid w-fit p-8">
      <Image src="/images/Foto2.jpeg" alt="mifoto" width={100} height={100} className="rounded-full mb-5" />
      <h1 className="text-white font-inter font-semibold text-2xl">Franco Gomez Rosell</h1>
      <h2 className="text-Green font-inter font-bold text-sm mt-1 mb-5">Argentina, Buenos Aires</h2>
      <h3 className="text-white font-inter font-normal text-base mb-5">"Front-End Developer and Cat Enjoyer"</h3>
      <ul className="w-full flex flex-col justify-center items-center gap-3">
        <li className="bg-Grey-Light w-full text-white font-inter font-semibold text-center text-sm py-3 rounded-md hover:bg-Green hover:text-Grey-Mid">
          <Link href="https://www.frontendmentor.io/profile/Franki09" target="_blank" rel="noopener noreferrer">
            FrontEnd Mentor
          </Link>
        </li>
        <li className="bg-Grey-Light w-full text-white font-inter font-semibold text-center text-sm py-3 rounded-md hover:bg-Green hover:text-Grey-Mid">
          <Link href="https://github.com/Franki09" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </li>
        <li className="bg-Grey-Light w-full text-white font-inter font-semibold text-center text-sm py-3 rounded-md hover:bg-Green hover:text-Grey-Mid">
          <Link href="https://www.linkedin.com/in/franco-g%C3%B3mez-rosell/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SocialLinksCard;
