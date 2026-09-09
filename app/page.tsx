//Components
import SocialLink from "@/components/socialLink";
import { Alfa_Slab_One } from "next/font/google";

const alfa_Slab_One = Alfa_Slab_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans bg-background">
      {/* Design */}
      <div className="grid grid-cols-2 grid-rows-1 gap-40 mt-24 mb-24">
        <div>
          <h1 className="text-5xl font-extrabold">
            Full-stack
            <br />
            Developer <br />
            with <span className="text-red-900">Tyrone</span>
            <br />
            <span className="text-red-900">Niere</span>
          </h1>

          <p className="mt-6 max-w-md">
            I build clean, maintainable software and meaningful digital
            experiences from intuitive interfaces to reliable backend systems.
          </p>

          <div className="flex flex-row justify-between mt-6">
            <SocialLink
              href="https://github.com/"
              icon="/assets/icons/github.svg"
              label="Github"
            />
            <SocialLink
              href="https://facebook.com/"
              icon="/assets/icons/facebook.svg"
              label="Facebook"
            />
            <SocialLink
              href="https://github.com/"
              icon="/assets/icons/instagram.svg"
              label="Instagram"
            />
          </div>
        </div>
        {/* Square Design */}
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
      {/* Short About Me */}
      <div className="flex flex-row items-center justify-center gap-80 bg-coffee_bean px-8 py-12 w-12/12">
        <div>
          <h1
            className={`text-white font-extrabold text-5xl ${alfa_Slab_One.className}`}
          >
            About Me
          </h1>
          <p className="text-white mt-6 max-w-md">
            My goal is to write maintainable, clean, and understandable code
            while building meaningful digital experiences. I enjoy working
            across the stack, from crafting intuitive interfaces to developing
            reliable backend systems.
          </p>
        </div>

        <div>
          <div className="font-mono text-sm leading-6">
            <div className="flex gap-4">
              <span className="w-6 shrink-0 text-left text-gray-600 select-none border-r-2 border-gray-600 pr-2">
                1
              </span>
              <span className="text-gray-200">
                {" "}
                <span className="text-orange-300">const</span> developer = {"{"}
              </span>
            </div>
            <div className="flex gap-4">
              <span className="w-6 shrink-0 text-left text-gray-600 select-none border-r-2 border-gray-600 pr-2">
                2
              </span>
              <span className="text-gray-200 pl-4.5">
                name: {`"Tyrone Niere"`},
              </span>
            </div>
            <div className="flex gap-4">
              <span className="w-6 shrink-0 text-left text-gray-600 select-none border-r-2 border-gray-600 pr-2">
                3
              </span>
              <span className="text-gray-200 pl-4.5">
                role: {`"Fullstack developer"`},
              </span>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0 text-left text-gray-600 select-none border-r-2 border-gray-600 pr-2">
                4
              </span>
              <span className="text-gray-200 pl-4.5">
                focus:{" "}
                <span className="text-yellow-300">
                  {[`"Web",  "APIs", "UI/UX"`]}
                </span>
                ,
              </span>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0 text-left text-gray-600 select-none border-r-2 border-gray-600 pr-2">
                5
              </span>
              <span className="text-gray-200 pl-4.5">
                passion:{" "}
                <span className="text-yellow-300">{`"Clean Code"`}</span>,
              </span>
            </div>
            <div className="flex gap-4">
              <span className="w-6 shrink-0 text-left text-gray-600 select-none border-r-2 border-gray-600 pr-2">
                6
              </span>
              <span className="text-gray-200 pl-4.5">
                available: <span className="text-yellow-300">true</span>,
              </span>
            </div>

            <div className="flex gap-4">
              <span className="w-6 shrink-0 text-left text-gray-600 select-none border-r-2 border-gray-600 pr-2">
                7
              </span>
              <span className="text-gray-200">{"};"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
