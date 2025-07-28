import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/rishu-kumar-08b531341/',
  },
  {
    title: 'Twitter',
    href: 'https://x.com/RishuKu61732102',
  },
  {
    title: 'Github',
    href: 'https://github.com/zlatan-05',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/rishukr05/',
  },
]

export const Footer = () => {
  return (
  <footer className="relative z-0 overflow-x-clip">
    <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 
    [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
    <div className="container">
      <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
        <div className="text-white/40">&copy; 2025. All rights reserved.</div>
        <div>
        <nav className="flex flex-col md:flex-row items-center gap-8">
          {footerLinks.map(link => (
            <a href={link.href} key={link.title} className="inline-flex items-center gap-1.5">
              <span className="font-semibold">{link.title}</span>
              <ArrowUpRight className="size-4"/>
            </a>
          ))}
        </nav>
        </div>
      </div>
    </div>
  </footer>
  );
};
