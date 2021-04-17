export default function Services() {
  return (
    <div className="bg-blue-600 flex flex-col items-center py-3">
      {/* image */}
      <div className="mt-10">
        <img src="/services.png" alt="an image" className="w-64 lg:w-96" />
      </div>
      {/* Content */}
      <div className="mt-10 text-center text-white">
        <h2 className="text-3xl lg:text-5xl">Protect Your Digital Life</h2>
        <h3 className="mt-6 leading-relaxed lg:text-xl">
          Keep your data safe with our award winning antivirus titles and backup
          services. <br />
          We will help you choose the best software strategy for protecting all
          of your important files.{" "}
        </h3>
        <button className="mt-8 border rounded-full py-3 px-6 border-white">
          Get Started Now
        </button>
      </div>
    </div>
  );
}
