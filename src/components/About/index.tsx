import { getMarkDownData } from "@/services/getMarkDownData";
import RainbowText from "../RainbowText";

async function About() {
  const about = await getMarkDownData("about");
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-10 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <article
          className="mb-4"
          dangerouslySetInnerHTML={{ __html: about.contentHtml }}
        ></article>
        <p>
          When I’m not at the computer, I’m usually working out, hanging out
          with my friends, or running around Super Mario searching for{" "}
          <RainbowText text="Super Stars ." />
        </p>
      </div>
    </section>
  );
}

export default About;
