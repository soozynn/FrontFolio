"use client";

import selfieImage from "../../public/selfie.png";
import Image from "next/image";
import Link from "next/link";

export default function Header({
  isOpenedSidebar,
  handleClickSidebarButton,
}: {
  isOpenedSidebar: boolean;
  handleClickSidebarButton: () => void;
}) {
  return (
    <>
      <header className="header bg-black text-white flex fixed top-0 left-0 right-0 items-center z-10 p-5">
        <nav className="flex justify-between w-full">
          <Link href="/" className="flex gap-2">
            <Image
              src={selfieImage}
              alt="A photo of soozynn"
              width={30}
              height={30}
              priority={true}
              className="rounded-full"
              quality={95}
            />
            <span>soozynn.dev</span>
          </Link>

          <div className="hidden md:block">
            <ul className="flex gap-5">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div
            className="md:hidden flex items-center"
            onClick={() => handleClickSidebarButton()}
          >
            {isOpenedSidebar ? (
              <button
                className="text-white"
                onClick={() => handleClickSidebarButton()}
              >
                X
              </button>
            ) : (
              <button className="flex flex-col justify-center items-center w-6 h-6 focus:outline-none">
                <span className="w-5 h-[.125rem] bg-white mb-1"></span>
                <span className="w-5 h-[.125rem] bg-white mb-1"></span>
                <span className="w-5 h-[.125rem] bg-white"></span>
              </button>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}