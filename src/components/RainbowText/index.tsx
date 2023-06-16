function RainbowText({ text = "" }) {
  const textArray = text.split("");
  const defaultColors = [
    "group-hover/korok:text-red-400",
    "group-hover/korok:text-orange-400",
    "group-hover/korok:text-yellow-400",
    "group-hover/korok:text-lime-400",
    "group-hover/korok:text-green-400",
    "group-hover/korok:text-teal-400",
    "group-hover/korok:text-cyan-400",
    "group-hover/korok:text-sky-400",
    "group-hover/korok:text-blue-400",
    "group-hover/korok:text-indigo-400",
    "group-hover/korok:text-violet-400",
  ];
  defaultColors.forEach(
    (val, i) => val + `delay-[${(i % defaultColors.length) * 25 + 50}ms]`
  );
  return (
    <span className="group/korok inline-flex   lg:font-medium lg:text-slate-200">
      {textArray.map((val, i) => (
        <span
          key={val + i}
          className={`whitespace-pre ${
            defaultColors[i % defaultColors.length]
          } transition duration-75 group-hover/korok:-translate-y-px delay-[${
            (i % defaultColors.length) * 25 + 50
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
