import HighlightedText from './HighlightedText';

function ProjectTitle({ project }) {
  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="group/link inline-flex items-center gap-1.5 rounded-sm text-[#111] underline-offset-4 transition-colors hover:text-[#555] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
        aria-label={`${project.title} — open live project`}
      >
        <span>{project.title}</span>
        <span aria-hidden="true" className="text-[13px] text-[#999] transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
      </a>
    );
  }

  return (
    <span className="group/private relative inline-flex cursor-help rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black" tabIndex="0">
      <span className="border-b border-dashed border-[#aaa]">{project.title}</span>
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-[calc(100%+10px)] left-0 z-20 w-max max-w-[260px] translate-y-1 rounded-lg bg-[#333] px-3 py-2 text-[12px] font-medium leading-snug text-white opacity-0 shadow-lg transition duration-200 group-hover/private:translate-y-0 group-hover/private:opacity-100 group-focus/private:translate-y-0 group-focus/private:opacity-100"
      >
        Private client system — access is restricted to protect business data.
      </span>
    </span>
  );
}

function ProjectRow({ project }) {
  return (
    <article className="grid gap-3 border-b border-[#e4e4e4] py-7 first:border-t md:grid-cols-[minmax(220px,0.72fr)_minmax(0,1.28fr)] md:items-start md:gap-10 lg:py-8">
      <h3 className="m-0 text-[16px] font-bold leading-snug tracking-[-0.015em] text-[#111]">
        <ProjectTitle project={project} />
      </h3>
      <p className="m-0 max-w-[620px] text-[15px] leading-[1.65] text-[#858585] md:justify-self-end md:text-right lg:text-[16px]">
        <HighlightedText text={project.description} highlights={project.highlights} />
      </p>
    </article>
  );
}

export default ProjectRow;
