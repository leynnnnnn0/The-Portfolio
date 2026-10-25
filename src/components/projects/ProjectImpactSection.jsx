import projects from '../../data/projects';
import ProjectRow from './ProjectRow';

function ProjectImpactSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 bg-white px-5 pb-24 pt-12 sm:px-8 lg:pb-32 lg:pt-20 xl:scroll-mt-8"
      aria-labelledby="projects-title"
    >
      <div className="mx-auto max-w-[1050px]">
        <header className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between lg:mb-12">
          <h2 id="projects-title" className="m-0 text-[32px] font-extrabold tracking-[-0.04em] text-black">
            Built to solve. Shipped to scale.
          </h2>
          <p className="m-0 text-[14px] font-medium text-[#929292] sm:pb-1 sm:text-right">
            Products, infrastructure &amp; client systems
          </p>
        </header>

        <div>
          {projects.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectImpactSection;
