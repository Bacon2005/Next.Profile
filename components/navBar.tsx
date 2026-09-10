"use client";
import Image from "next/image";
import NavLink from "@/components/navLinks";

export default function NavBar() {
  return (
    <div className="flex flex-row items-center justify-between w-full mt-5 px-8 py-0">
      <div>
        <h1 className="text-1xl font-serif">
          Tyrone
          <br /> Niere
        </h1>
      </div>
      <div>
        {/* Add areas to navigate to */}
        <ul className="flex flex-row gap-20 text-lg">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="">Projects</NavLink>
          <NavLink href="">Contact</NavLink>
        </ul>
      </div>
      <div className="profile">
        <Image
          src="/assets/photos/Ty_White.png"
          alt="Ty Logo"
          width={50}
          height={50}
          className="rounded-full transition-transform duration-300 ease-in-out hover:scale-120"
        />
      </div>
    </div>
  );
}
