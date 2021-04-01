import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="flex p-2 items-center w-screen md:h-96 justify-between"
      style={{
        background:
          "linear-gradient(to bottom,#3b82f6bb,#3b82f6bb),url(/background.jpg) no-repeat center center/cover",
      }}
    >
      <div className="w-7/12 md:w-5/12 text-center text-white">
        <h3 className="text-xs md:text-sm">Welcome to Depannage Ordi</h3>
        <hr className="m-4" />
        <h1 className="text-sm md:text-base font-bold">
          Only the best software for home & business
        </h1>
        <hr className="m-4" />
        <h3 className="text-xs md:text-sm">
          With only the name brands you trust.
        </h3>
      </div>
      <div className="w-5/12 md:w-3/12">
        <Image
          src="/hero.png"
          alt="Hero Image"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </div>
    </div>
  );
}
