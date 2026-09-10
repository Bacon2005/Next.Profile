import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center font-sans bg-background">
      {/* Navigation Bar */}
      <div className="flex flex-row items-end justify-around w-full px-8 py-0 gap-4 ">
        <Image
          src="/assets/ESPNlogo.png"
          alt="ESPN Logo"
          width={150}
          height={150}
        />
        <div className="flex flex-row items-end justify-around w-full px-4 py-2 gap-4">
          <ul className="flex flex-row items-center gap-20 text-lg font-bold text-black dark:text-white">
            <li className="text-red">Player Card</li>
            <li className="text-red">Stats</li>
            <li className="text-red">Contact</li>
          </ul>
        </div>
        <div className="profile"></div>
      </div>

      <div className="relative w-full h-[500px] sm:h-[650px] lg:h-[850px] overflow-hidden bg-white">
        {/* Diagonal-clipped background image */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: "polygon(0 0, 25% 0, 35% 100%, 0 100%)",
          }}
        >
          <Image
            src="/assets/bg.avif"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-full gap-40 lg:gap-40 px-4">
          <Image
            src="/assets/profile.jpg"
            alt="Tyrone Pic"
            width={350}
            height={350}
            className="rounded-3xl w-40 h-40 sm:w-60 sm:h-60 lg:w-[350px] lg:h-[350px] object-cover"
          />

          <div className="max-w-md text-center lg:text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-black">
              Tyrone Niere
            </h1>
            <p className="mt-2 text-base sm:text-lg font-medium text-red-600">
              Software Engineer
            </p>
            <p className="mt-4 text-sm sm:text-base text-gray-700 max-w-sm mx-auto lg:mx-0">
              I build clean, scalable web applications with a focus on great
              user experience and solid engineering fundamentals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
