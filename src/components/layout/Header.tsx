import { Link } from 'react-router-dom'

const links = [
  { name: 'Inicio', href: '/' },
  { name: 'Experiencia', href: '/experiencia' },
  { name: 'Proyectos', href: '/proyectos' },
  { name: 'Sobre mí', href: '/sobre-mi' },
  { name: 'Contacto', href: '/contacto' },
]

export function Header() {
  return (
    <header className="z-50 h-[10vh] w-full bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155] shadow-[0_2px_10px_rgba(55,161,164,0.25)]">
      <div className="h-full w-full">
        <nav className="h-full flex items-center justify-center w-full">
          <ul className="flex gap-[25px] justify-center items-center w-full text-white">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.href}
                  className="flex justify-center text-sm md:text-xl items-center leading-none hover:text-[#37a1a4] transition-colors font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
} 