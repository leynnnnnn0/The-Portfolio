import { useEffect, useRef, useState } from 'react';
import { ContactIcon, FolderIcon, HeartIcon, MarkIcon, SparklesIcon } from '../icons/DesktopIcons';

const DOCK_ITEMS = [
  { label: 'Home', target: 'home', color: 'bg-white text-black', icon: <MarkIcon className="h-9 w-9" /> },
  { label: 'Achievements', target: 'achievements', color: 'bg-gradient-to-br from-[#c887ff] to-[#7925ed] text-white', icon: <SparklesIcon className="h-11 w-11" /> },
  { label: 'Projects', target: 'projects', color: 'bg-gradient-to-b from-[#5db3ff] to-[#257def]', icon: <FolderIcon className="w-11" /> },
  { label: 'About Me', target: 'about', color: 'bg-gradient-to-b from-[#ff7187] to-[#fb3155] text-white', icon: <HeartIcon className="h-10 w-10" /> },
  { label: 'Contact', target: 'contact', color: 'bg-gradient-to-b from-[#4bd771] to-[#1dbb49] text-white', icon: <ContactIcon className="h-10 w-10" /> },
];

function Dock() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeItem, setActiveItem] = useState('Home');
  const [hasReachedSecondSection, setHasReachedSecondSection] = useState(false);
  const [magnifications, setMagnifications] = useState(() => DOCK_ITEMS.map(() => 0));
  const itemRefs = useRef([]);
  const baseCentersRef = useRef([]);
  const pointerXRef = useRef(null);
  const animationFrameRef = useRef(null);

  const resetMagnification = () => {
    pointerXRef.current = null;
    baseCentersRef.current = [];
    setHoveredIndex(null);
    setMagnifications(DOCK_ITEMS.map(() => 0));
  };

  const updateMagnification = () => {
    const pointerX = pointerXRef.current;
    if (pointerX === null) return;

    let closestIndex = null;
    let closestDistance = Number.POSITIVE_INFINITY;
    const nextMagnifications = baseCentersRef.current.map((center, index) => {
      if (center === null) return 0;
      const distance = Math.abs(pointerX - center);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }

      const proximity = Math.max(0, 1 - distance / 135);
      return proximity * proximity;
    });

    setMagnifications(nextMagnifications);
    setHoveredIndex(closestIndex);
  };

  const handlePointerMove = (event) => {
    if (event.pointerType && event.pointerType !== 'mouse') return;
    if (baseCentersRef.current.length === 0) {
      baseCentersRef.current = itemRefs.current.map((item) => {
        if (!item) return null;
        const bounds = item.getBoundingClientRect();
        return bounds.left + bounds.width / 2;
      });
    }
    pointerXRef.current = event.clientX;
    window.cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = window.requestAnimationFrame(updateMagnification);
  };

  const handleFocus = (index) => {
    setHoveredIndex(index);
    setMagnifications(DOCK_ITEMS.map((_, itemIndex) => {
      const distance = Math.abs(index - itemIndex);
      return distance === 0 ? 1 : distance === 1 ? 0.38 : 0;
    }));
  };

  const navigateTo = (item) => {
    setActiveItem(item.label);
    if (item.target) {
      document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const updateMobileVisibility = () => {
      const secondSection = document.getElementById('achievements');
      setHasReachedSecondSection(Boolean(secondSection && secondSection.getBoundingClientRect().top <= 32));
    };

    updateMobileVisibility();
    window.addEventListener('scroll', updateMobileVisibility, { passive: true });
    window.addEventListener('resize', updateMobileVisibility);

    return () => {
      window.cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('scroll', updateMobileVisibility);
      window.removeEventListener('resize', updateMobileVisibility);
    };
  }, []);

  return (
    <nav
      className={`fixed left-1/2 top-10 z-50 w-max max-w-[calc(100vw-16px)] -translate-x-1/2 rounded-[20px] bg-white/85 px-2 py-2.5 shadow-[0_18px_45px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-[opacity,transform,padding] duration-300 sm:px-3 sm:py-3 xl:absolute xl:bottom-16 xl:top-auto xl:z-30 xl:translate-y-0 xl:opacity-100 xl:pointer-events-auto ${hasReachedSecondSection ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-4 opacity-0 pointer-events-none'}`}
      style={{ paddingBottom: hoveredIndex === null ? undefined : '24px' }}
      aria-label="Portfolio navigation"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetMagnification}
    >
      <ul className="m-0 flex list-none items-start gap-1.5 p-0 sm:gap-2">
        {DOCK_ITEMS.map((item, index) => {
          const magnification = magnifications[index];
          const scale = 1 + magnification * 0.5;
          const transition = pointerXRef.current === null
            ? '420ms cubic-bezier(0.34, 1.56, 0.64, 1)'
            : '80ms cubic-bezier(0.2, 0.8, 0.2, 1)';

          return (
            <li
              key={item.label}
              ref={(itemElement) => { itemRefs.current[index] = itemElement; }}
              className="relative flex shrink-0 items-start justify-center will-change-[margin]"
              style={{
                marginInline: `${magnification * 11}px`,
                transition: `margin ${transition}`,
              }}
            >
              {hoveredIndex === index && (
                <span className="pointer-events-none absolute bottom-[calc(100%+18px)] left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#3d3d3d] px-3 py-2 text-[12px] font-medium text-white shadow-lg">
                  {item.label}
                </span>
              )}
              <button
                type="button"
                onFocus={(event) => {
                  if (event.currentTarget.matches(':focus-visible')) handleFocus(index);
                }}
                onBlur={resetMagnification}
                onClick={() => navigateTo(item)}
                className={`flex h-10 w-10 shrink-0 will-change-transform items-center justify-center rounded-[11px] shadow-[0_5px_10px_rgba(0,0,0,0.18)] motion-reduce:transition-none sm:h-11 sm:w-11 sm:rounded-[12px] ${item.color} ${activeItem === item.label ? 'ring-2 ring-black/15 ring-offset-2' : ''}`}
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: 'center top',
                  transition: `transform ${transition}`,
                }}
                aria-label={item.label}
                aria-current={activeItem === item.label ? 'page' : undefined}
              >
                {item.icon}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Dock;
