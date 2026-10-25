import { FolderIcon } from '../icons/DesktopIcons';

function FolderShortcut({ label, href, selected, onSelect }) {
  const className = "group flex w-[104px] flex-col items-center gap-1 rounded-xl p-2 no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0874dd]";
  const content = (
    <>
      <FolderIcon className="w-[60px] transition duration-200 group-hover:-translate-y-1 group-hover:drop-shadow-[0_8px_8px_rgba(0,0,0,0.12)]" />
      <span className={`max-w-full rounded-md px-2 py-1 text-center text-[12px] font-medium leading-tight transition ${selected ? 'bg-[#0874dd] text-white' : 'text-[#404040] group-hover:bg-black/5'}`}>
        {label}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        onClick={onSelect}
        className={className}
        aria-label={`${label} — open live project`}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onSelect} className={className} aria-pressed={selected}>
      {content}
    </button>
  );
}

export default FolderShortcut;
