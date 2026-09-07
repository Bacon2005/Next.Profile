import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans bg-background">
      {/* Navigation Bar */}
      <div className="flex flex-row items-center justify-between w-full mt-5 px-8 py-0">
        <div>
          <h1 className="text-2xl">
            Tyrone
            <br /> Niere
          </h1>
        </div>
        <div>
          {/* Add areas to navigate to */}
          <ul className="flex flex-row gap-20 text-lg">
            <li className="font-bold">About</li>
            <li className="font-bold">Projects</li>
            <li className="font-bold hover:cursor-pointer">Contact</li>
          </ul>
        </div>
        <div className="profile">
          <Image
            src="/assets/Ty_White.png"
            alt="Ty Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
      </div>

      {/* Design */}
      <div className="grid grid-cols-2 grid-rows-1 gap-40 mt-24">
        <div>
          <h1 className="text-5xl font-extrabold">
            Full-stack
            <br />
            Software Engineer <br />
            with <span className="text-red-900">Tyrone</span>
            <br />
            <span className="text-red-900">Niere</span>
          </h1>

          <p className="mt-6 max-w-md">
            My goal is to write maintainable, clean, and understandable code
            while building meaningful digital experiences. I enjoy working
            across the stack, from crafting intuitive interfaces to developing
            reliable backend systems.
          </p>

          {/* TODO: Simplify it so that you dont have to copy paste it everytime */}
          <div className="flex flex-row justify-between mt-6">
            <a
              href="https://github.com/"
              className="group flex items-center gap-2 rounded-full border px-5 py-2
              transition-all duration-300
            hover:bg-black hover:text-white hover:scale-[1.03] hover:shadow-md
            dark:hover:bg-white dark:hover:text-black"
            >
              <Image
                src="/assets/icons/github.svg"
                alt="GitHub"
                width={0}
                height={0}
                className="size-4"
              />
              Github
            </a>
            <a
              href="https://github.com/"
              className="group flex items-center gap-2 rounded-full border px-5 py-2
              transition-all duration-300
            hover:bg-black hover:text-white hover:scale-[1.03] hover:shadow-md
            dark:hover:bg-white dark:hover:text-black"
            >
              <Image
                src="/assets/icons/facebook.svg"
                alt="facebook"
                width={0}
                height={0}
                className="size-4"
              />
              Facebook
            </a>
            <a
              href="https://github.com/"
              className="group flex items-center gap-2 rounded-full border px-5 py-2
              transition-all duration-300
            hover:bg-black hover:text-white hover:scale-[1.03] hover:shadow-md
            dark:hover:bg-white dark:hover:text-black"
            >
              <Image
                src="/assets/icons/instagram.svg"
                alt="instagram"
                width={0}
                height={0}
                className="size-4"
              />
              Instagram
            </a>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-3 grid-rows-3 w-95 h-95">
            <div className="bg-red-500 rounded-tl-[70px] rounded-br-[70px]" />

            <div className="flex items-center justify-center">
              <div className="bg-red-100 size-20 rotate-45" />
            </div>

            <div className="bg-[#21191d] rounded-tr-[100px] rounded-br-[100px] row-span-2" />

            <div className="border-14 border-red-950" />

            <div className="bg-red-500 rounded-full" />

            <div className="bg-red-950 rounded-tl-[50px] rounded-br-[50px]" />

            <div className="flex items-center justify-center">
              <div className="w-0 h-0 border-l-60 border-r-60 border-b-120 border-l-transparent border-r-transparent border-b-red-500" />
            </div>

            <div className="bg-red-950 rounded-tr-[50px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
