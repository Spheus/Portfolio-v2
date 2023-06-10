
const defaultColors = [
  "text-red-400",
  "text-orange-400",
  "text-yellow-400",
  "text-lime-400",
  "text-green-400",
  "text-teal-400",
  "text-cyan-400",
  "text-sky-400",
  "text-blue-400",
  "text-indigo-400",
  "text-violet-400",
];
function RainbowText({ text = "", colors = defaultColors }) {
  const textArray = text.split("");

  return (
    <span className="group/korok inline-flex   lg:font-medium lg:text-slate-200">
      {textArray.map((val, i) => (
        <span
          key={val + i}
          className={`whitespace-pre group-hover/korok:${
            colors[i % colors.length]
          } transition duration-75 group-hover/korok:-translate-y-px delay-[${
            (i % colors.length) * 25 + 50
          }ms]`}
          aria-hidden="true"
        >
          {val || " "}
        </span>
      ))}
    </span>
  );
}

export default RainbowText;
