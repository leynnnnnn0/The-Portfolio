import { MarkIcon } from '../icons/DesktopIcons';
import FooterIcon from './FooterIcon';

const CONTACTS = [
  {
    label: 'Email',
    detail: 'nathanielalvarez1234569@gmail.com',
    href: 'mailto:nathanielalvarez1234569@gmail.com',
    icon: 'email',
    color: 'bg-white',
  },
  {
    label: 'LinkedIn',
    detail: 'Nathaniel Alvarez',
    href: 'https://www.linkedin.com/in/nathaniel-alvarez-31a9682ab/',
    icon: 'linkedin',
    color: 'bg-[#0a66c2]',
  },
  {
    label: 'Facebook',
    detail: 'nathaniel.alvarez.777',
    href: 'https://www.facebook.com/nathaniel.alvarez.777/',
    icon: 'facebook',
    color: 'bg-[#1877f2]',
  },
  {
    label: 'Phone',
    detail: '0926 688 7267',
    href: 'tel:+639266887267',
    icon: 'phone',
    color: 'bg-[#24bf5a]',
  },
];

const AVAILABILITY = [
  { label: 'Internships', color: 'bg-[#327ff0]' },
  { label: 'Freelance', color: 'bg-[#8c45e8]' },
  { label: 'Collaboration', color: 'bg-[#20b75a]' },
];

function Footer() {
  return (
    <footer id="contact" className="scroll-mt-28 border-t border-[#e3e3e3] bg-white px-5 py-14 sm:px-8 lg:py-16 xl:scroll-mt-8">
      <div className="mx-auto grid max-w-[1050px] gap-12 md:grid-cols-[1.2fr_0.9fr_0.9fr] md:gap-10">
        <div>
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#dedede] bg-white shadow-[0_5px_10px_rgba(0,0,0,0.10)]">
              <MarkIcon className="h-8 w-8" />
            </span>
            <div>
              <p className="m-0 text-[16px] font-bold text-[#111]">Nathaniel Alvarez.</p>
              <p className="mb-0 mt-1 text-[14px] text-[#858585]">Building useful software for real people.</p>
            </div>
          </div>

          <div className="mt-7 flex flex-wrap gap-2.5" aria-label="Social and contact links">
            {CONTACTS.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                aria-label={`${contact.label}: ${contact.detail}`}
                title={`${contact.label}: ${contact.detail}`}
                className={`flex h-11 w-11 items-center justify-center rounded-[11px] border border-black/5 shadow-[0_4px_8px_rgba(0,0,0,0.12)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_8px_14px_rgba(0,0,0,0.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-black ${contact.color}`}
              >
                <FooterIcon type={contact.icon} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Contact details">
          <ul className="m-0 list-none space-y-3 p-0">
            {CONTACTS.map((contact) => (
              <li key={contact.label}>
                <a
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="group inline-flex max-w-full items-center gap-2 text-[14px] font-medium text-[#555] underline-offset-4 hover:text-black hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
                >
                  <span>{contact.label}</span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="m-0 text-[13px] font-bold uppercase tracking-[0.16em] text-[#999]">Open to</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {AVAILABILITY.map((item) => (
              <span key={item.label} className={`rounded-full px-3 py-2 text-[11px] font-semibold text-white ${item.color}`}>
                {item.label}
              </span>
            ))}
          </div>
          <p className="mb-0 mt-5 max-w-[240px] text-[14px] leading-relaxed text-[#777]">
            Looking for a developer? Let&apos;s build something useful together.
          </p>
          <p className="mb-0 mt-7 text-[13px] text-[#999]">© {new Date().getFullYear()} Nathaniel Alvarez</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
