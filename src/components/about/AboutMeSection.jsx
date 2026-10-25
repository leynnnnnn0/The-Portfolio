import AboutFolderGraphic from './AboutFolderGraphic';
import AboutPanel from './AboutPanel';

function AboutMeSection() {
  return (
    <section
      id="about"
      className="scroll-mt-28 bg-white px-5 py-24 sm:px-8 lg:py-32 xl:scroll-mt-8"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-[1050px]">
        <header className="mb-16 text-center sm:mb-20">
          <h2
            id="about-title"
            className="m-0 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[clamp(3rem,7vw,5.4rem)] font-extrabold leading-none tracking-[-0.06em] text-black sm:gap-x-6"
          >
            <span>About</span>
            <AboutFolderGraphic />
            <span>Me</span>
          </h2>
          <p className="mx-auto mb-0 mt-9 max-w-xl text-[15px] leading-relaxed text-[#8d8d8d] sm:text-[17px]">
            The person behind the projects, what I am building now, and where I want to go next.
          </p>
        </header>

        <AboutPanel />
      </div>
    </section>
  );
}

export default AboutMeSection;
