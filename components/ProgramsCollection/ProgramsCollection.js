export default function ProgramsCollection(props) {
  return (
    <div className="p-5">
      <h2 className="text-green-500 text-xl mb-6">{props.title}</h2>
      <div className="flex flex-col space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6">{props.children}</div>
    </div>
  );
}
