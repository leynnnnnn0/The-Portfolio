import { FaAws, FaJava } from 'react-icons/fa';
import {
  SiDocker,
  SiGithub,
  SiLaravel,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiPhp,
  SiReact,
} from 'react-icons/si';

const TECHNOLOGIES = [
  { name: 'PHP', Icon: SiPhp, tile: 'bg-white', icon: 'text-[#777bb4]' },
  { name: 'Laravel', Icon: SiLaravel, tile: 'bg-white', icon: 'text-[#ff2d20]' },
  { name: 'React', Icon: SiReact, tile: 'bg-[#20232a]', icon: 'text-[#61dafb]' },
  { name: 'Next.js', Icon: SiNextdotjs, tile: 'bg-black', icon: 'text-white' },
  { name: 'Docker', Icon: SiDocker, tile: 'bg-white', icon: 'text-[#2496ed]' },
  { name: 'GitHub', Icon: SiGithub, tile: 'bg-[#181717]', icon: 'text-white' },
  { name: 'AWS', Icon: FaAws, tile: 'bg-[#232f3e]', icon: 'text-[#ff9900]' },
  { name: 'Java', Icon: FaJava, tile: 'bg-white', icon: 'text-[#e76f00]' },
  { name: 'MySQL', Icon: SiMysql, tile: 'bg-white', icon: 'text-[#4479a1]' },
  { name: 'Linux', Icon: SiLinux, tile: 'bg-[#fcc624]', icon: 'text-black' },
];

function TechStackPanel() {
  return (
    <aside
      className="mx-auto mt-10 w-fit rounded-[20px] bg-white/85 p-3 shadow-[0_18px_45px_rgba(0,0,0,0.14)] backdrop-blur-xl xl:absolute xl:bottom-24 xl:right-5 xl:mt-0"
      aria-label="Technology stack"
    >
      <div className="grid grid-cols-5 gap-2">
        {TECHNOLOGIES.map(({ name, Icon, tile, icon }) => (
          <div key={name} className="group/tech relative">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-[11px] border border-black/5 shadow-[0_4px_9px_rgba(0,0,0,0.13)] transition duration-200 group-hover/tech:-translate-y-1 group-hover/tech:scale-105 group-hover/tech:shadow-[0_8px_14px_rgba(0,0,0,0.16)] ${tile}`}
              aria-hidden="true"
            >
              <Icon className={`h-7 w-7 ${icon}`} />
            </div>
            <span className="pointer-events-none absolute bottom-[calc(100%+9px)] left-1/2 z-20 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-[#333] px-2.5 py-1.5 text-[11px] font-medium text-white opacity-0 shadow-lg transition duration-150 group-hover/tech:translate-y-0 group-hover/tech:opacity-100">
              {name}
            </span>
            <span className="sr-only">{name}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default TechStackPanel;
