const ABOUT_COLUMNS = [
  {
    label: 'Then',
    text: 'I started by turning school requirements and small freelance opportunities into working software. Each project taught me to look beyond the code, understand the real problem, and build something people could actually use.',
  },
  {
    label: 'Now',
    text: 'I am a fourth-year college student and aspiring software developer building web products, client systems, and cloud infrastructure. My work now supports thousands of users, mall branches, students, and local businesses.',
  },
];

function AboutPanel() {
  return (
    <div className="overflow-hidden rounded-[18px] border border-[#dadada] bg-white shadow-[0_24px_50px_rgba(0,0,0,0.08)]">
      <div className="relative flex h-11 items-center border-b border-[#dadada] bg-[#f5f5f5] px-4 sm:h-12 sm:px-5">
        <div className="flex gap-2" aria-hidden="true">
          <span className="h-3.5 w-3.5 rounded-full bg-[#ff5f57]" />
          <span className="h-3.5 w-3.5 rounded-full bg-[#febc2e]" />
          <span className="h-3.5 w-3.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="absolute left-1/2 -translate-x-1/2 text-[12px] font-medium text-[#777] sm:text-[13px]">
          about-me.txt
        </span>
      </div>

      <div className="grid gap-10 px-6 py-10 sm:px-10 sm:py-12 md:grid-cols-2 md:gap-x-14 lg:px-14 lg:py-14">
        {ABOUT_COLUMNS.map((column) => (
          <div key={column.label}>
            <h3 className="m-0 text-[12px] font-bold uppercase tracking-[0.22em] text-[#a0a0a0]">
              {column.label}
            </h3>
            <p className="mb-0 mt-4 text-[15px] leading-[1.75] text-[#707070] sm:text-[16px]">
              {column.text}
            </p>
          </div>
        ))}

        <div className="border-t border-[#e7e7e7] pt-8 md:col-span-2 md:text-center">
          <h3 className="m-0 text-[12px] font-bold uppercase tracking-[0.22em] text-[#a0a0a0]">
            The Future <span className="ml-1 text-lg leading-none">+</span>
          </h3>
          <p className="mx-auto mb-0 mt-4 max-w-2xl text-[15px] leading-[1.75] text-[#707070] sm:text-[16px]">
            I want to keep learning with a team that values thoughtful engineering, contribute to products with real users, and grow into a developer trusted to build useful, reliable systems at scale.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPanel;
