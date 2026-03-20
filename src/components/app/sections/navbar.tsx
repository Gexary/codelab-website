export interface NavLinkProps {
  scrollId?: string;
  href?: string;
  name: string;
}

export function NavBar({ links }: { links: NavLinkProps[] }) {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  };

  return (
    <div
      className="flex items-center gap-4
    z-50 bg-gradient-to-t from-blue-300/20 to-blue-300/10 backdrop-blur-md border-b border-blue-300/30 inner-glow shadow-md after:w-[90%]!
    rounded-none sm:rounded-full py-2 px-4 w-max left-1/2 transform -translate-x-1/2"
    >
      {links.map((navLink) => (
        <a
          key={navLink.name}
          {...(navLink.href ? { href: navLink.href } : { onClick: () => scrollTo(navLink.scrollId ?? "") })}
          className="flex items-center gap-2 rounded-full px-4 py-2 text-blue-100 text-sm outline-none cursor-pointer hover-animation hover:text-blue-100" // hover:bg-blue-300/5
        >
          <span className="leading-6">{navLink.name}</span>
        </a>
      ))}
      <div className="absolute w-full dots top-2 left-0 h-0" />
      <div className="absolute w-full dots bottom-2 left-0 h-0" />
    </div>
  );
}
