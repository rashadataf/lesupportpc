export default function ProgramCard(props) {
  return (
    <div className="p-7 border border-gray-300 bg-gray-50">
      <h4 className="text-gray-700 text-2xl mb-7">{props.title}</h4>
      <div>
        <img src={props.img} alt="program image" />
      </div>
      <div className="h-52">
        <span className="text-gray-900 font-extrabold">Description</span>
        <ul className="list-disc ml-7 text-gray-600 mt-4">
          {props.description.split("\\").map((li, index) => {
            return <li key={index} className="max-w-xs">{li}</li>;
          })}
        </ul>
      </div>
      <div className="text-gray-700 my-5 text-2xl">Price: <span className="font-extrabold text-gray-700">${props.price}</span></div>
      <button className="px-6 py-3 bg-blue-600 text-white">BUY NOW</button>
    </div>
  );
}
