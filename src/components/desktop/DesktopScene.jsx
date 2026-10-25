import { useState } from 'react';
import AboutMeSection from '../about/AboutMeSection';
import AchievementsSection from '../achievements/AchievementsSection';
import ProjectImpactSection from '../projects/ProjectImpactSection';
import AnalogClock from '../widgets/AnalogClock';
import CalendarWidget from '../widgets/CalendarWidget';
import MusicPlayer from '../widgets/MusicPlayer';
import ProfilePhoto from '../widgets/ProfilePhoto';
import WeatherWidget from '../widgets/WeatherWidget';
import Dock from './Dock';
import FolderShortcut from './FolderShortcut';
import TechStackPanel from './TechStackPanel';

const FOLDERS = [
  { label: 'Stampbayan', href: 'https://stampbayan.com' },
  { label: 'Bigoli Philippines', href: 'https://dev-rewards.bigoli.ph' },
  { label: 'BerryPanel Hosting', href: 'https://capstoneprototype.online' },
  { label: 'SOG Glass & Aluminum', href: 'https://sogglassandaluminum.com' },
];

function DesktopScene() {
  const [selectedFolder, setSelectedFolder] = useState(null);

  const handleFolderSelect = (folder) => setSelectedFolder(folder);

  return (
    <>
    <main id="home" className="relative mx-auto min-h-screen w-full max-w-[1800px] overflow-x-hidden px-4 pb-24 pt-6 sm:px-6 sm:pt-8 lg:px-8 xl:min-h-[900px] xl:overflow-hidden xl:pb-0 xl:pt-0">
      <section className="mx-auto flex max-w-4xl flex-col items-start rounded-[24px] bg-white px-6 py-10 text-left shadow-[0_16px_45px_rgba(0,0,0,0.08)] sm:px-10 sm:py-12 xl:absolute xl:left-1/2 xl:top-1/2 xl:w-[900px] xl:max-w-[calc(100vw-500px)] xl:-translate-x-1/2 xl:-translate-y-1/2 xl:items-center xl:rounded-none xl:bg-transparent xl:px-0 xl:py-0 xl:text-center xl:shadow-none" aria-labelledby="hero-title">
        <h1 id="hero-title" className="m-0 text-[clamp(2.4rem,2.85vw,3rem)] font-extrabold leading-[1.14] tracking-[-0.05em] text-black">
          I&apos;m Nathaniel.<br />
          I&apos;m an <span className="underline decoration-[#d3d3d3] decoration-[4px] underline-offset-[8px]">Aspiring Software Developer.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-[clamp(1rem,1.4vw,1.25rem)] leading-relaxed text-[#8d8d8d]">
          Building thoughtful software, exploring new ideas, and turning what I learn into useful experiences.
        </p>
      </section>

      <section className="mx-auto mt-8 max-w-[790px] xl:absolute xl:left-6 xl:top-16 xl:mt-0 xl:w-[660px]" aria-label="Desktop widgets">
        <div className="grid grid-cols-2 gap-4 sm:hidden">
          <CalendarWidget />
          <ProfilePhoto />
        </div>
        <div className="hidden sm:grid sm:grid-cols-[150px_150px_minmax(280px,1fr)] sm:gap-4 xl:grid-cols-[150px_150px_320px] xl:gap-5">
          <AnalogClock />
          <CalendarWidget />
          <MusicPlayer />
          <div className="col-span-2 max-w-[320px]"><WeatherWidget /></div>
          <div className="col-start-1 row-start-3">
            <ProfilePhoto />
          </div>
        </div>
      </section>

      <section className="mx-auto mt-12 grid max-w-3xl grid-cols-2 place-items-center gap-x-5 gap-y-5 sm:grid-cols-4 xl:absolute xl:right-5 xl:top-14 xl:mt-0 xl:flex xl:w-[130px] xl:flex-col xl:gap-2" aria-label="Portfolio folders">
        {FOLDERS.map((folder) => (
          <FolderShortcut
            key={folder.label}
            label={folder.label}
            href={folder.href}
            selected={selectedFolder === folder.label}
            onSelect={() => handleFolderSelect(folder.label)}
          />
        ))}
      </section>
      <TechStackPanel />
      <Dock />
    </main>
    <AchievementsSection />
    <ProjectImpactSection />
    <AboutMeSection />
    </>
  );
}

export default DesktopScene;
