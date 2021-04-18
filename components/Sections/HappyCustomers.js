import Slider from "../Slider/Slider";

export default function HappyCustomers() {
  return (
    <div className="relative">
      <h2 className="absolute left-2/4 top-8 transform text-3xl -translate-x-2/4 text-white z-30">
        Our Happy Customers
      </h2>
      <Slider autoPlay={true} />
      <button
        className="absolute right-3 top-2/4 transform -rotate-45 border-t-0 border-r-8 border-b-8 border-l-0 border-solid border-white inline-block p-2"
        onClick={Slider.mobileNext}
      ></button>
      <button
        className="absolute left-3 top-2/4 transform rotate-135 border-t-0 border-r-8 border-b-8 border-l-0 border-solid border-white inline-block p-2"
        onClick={Slider.mobilePrev}
      ></button>
    </div>
  );
}
