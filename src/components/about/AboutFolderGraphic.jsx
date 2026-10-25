function AboutFolderGraphic() {
  return (
    <span className="relative inline-block h-[76px] w-[108px] shrink-0 sm:h-[104px] sm:w-[148px]" aria-hidden="true">
      <span className="absolute left-1 top-1 h-[58px] w-[92px] rounded-[16px] bg-[#cfd3da] sm:h-[78px] sm:w-[124px] sm:rounded-[20px]" />

      <span className="absolute left-[22px] top-[5px] h-[45px] w-[40px] overflow-hidden rounded-t-md border border-white/70 bg-gradient-to-br from-[#5b8f54] via-[#d8bd89] to-[#30362f] sm:left-[30px] sm:h-[60px] sm:w-[53px]">
        <span className="absolute -left-1 top-1 h-7 w-5 rounded-full bg-[#e9c5a6] opacity-80" />
      </span>
      <span className="absolute left-[52px] top-[8px] flex h-[43px] w-[42px] items-end justify-center rounded-t-md bg-[#ffd84d] pb-1 text-[5px] font-semibold text-[#7a6411] sm:left-[71px] sm:h-[57px] sm:w-[56px] sm:text-[7px]">
        IDEAS
      </span>
      <span className="absolute right-1 top-[6px] h-[48px] w-[40px] rounded-t-md bg-[#fb5745] sm:h-[64px] sm:w-[53px]">
        <span className="absolute left-1 top-1 text-[4px] font-bold text-[#35633f] sm:text-[6px]">BUILD / LEARN</span>
      </span>

      <span className="absolute inset-x-0 bottom-0 h-[58px] rounded-[13px] bg-gradient-to-b from-[#f1f2f4] to-[#dfe1e5] shadow-[0_8px_16px_rgba(0,0,0,0.10)] sm:h-[78px] sm:rounded-[18px]" />
    </span>
  );
}

export default AboutFolderGraphic;
