import Image from "next/image";
import About from "../components/About";
import ExperienceCard from "../components/ExperienceCard";
import Header from "../components/Header/Header";
import PageLink from "../components/PageLink";
import ProjectCard from "../components/ProjectCard";
import { AnimatedCanvas } from "../components/canvas";
import { getSubFolderNames } from "../services/getMarkDownData";
import { Suspense } from "react";

async function Home() {
  const jobs = await getSubFolderNames("jobs");
  const projects = await getSubFolderNames("projects");

  return (
    <>
      <AnimatedCanvas
        name="w-full h-screen  fixed top-0	 inset-0	z-0"
        background="transparent"
        play={true}
      />
      <div className="mx-auto min-h-screen max-w-screen-xl relative px-6 z-10 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <Suspense fallback={<p>Loading feed...</p>}>
              {/* @ts-expect-error Server Component */}

              <About />
            </Suspense>
            <section
              id="experience"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
              aria-label="Work experience"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Experience
                </h2>
              </div>
              <div>
                <ol className="group/list">
                  {jobs.fileNames.map((job, index) => (
                    <Suspense key={job + index}>
                      {/* @ts-expect-error Server Component */}

                      <ExperienceCard jobName={job} />
                    </Suspense>
                  ))}
                </ol>
                <PageLink text="View Full Résumé" href="/resume.pdf" />
              </div>
            </section>
            <section
              id="projects"
              className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            >
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                  Projects
                </h2>
              </div>
              <div>
                <ul className="group/list">
                  <Suspense fallback={<p>Loading feed...</p>}>
                    {projects.fileNames.map((project) => (
                      <>
                        {/* @ts-expect-error Server Component */}
                        <ProjectCard projectName={project} key={project} />
                      </>
                    ))}
                  </Suspense>
                </ul>
                <PageLink
                  text="View Full Project Archive"
                  href="https://github.com/Spheus"
                />
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
