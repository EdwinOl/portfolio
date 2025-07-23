export function Footer() {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Información personal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Edwin Ordoñez</h3>
            <p className="text-white/70 text-sm">
              Analista Operativo y Sistema especializado en WordPress y desarrollo web.
            </p>
          </div>
          
          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-white/70 hover:text-white text-sm transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#experiencia" className="text-white/70 hover:text-white text-sm transition-colors">
                  Experiencia
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-white/70 hover:text-white text-sm transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="text-white/70 hover:text-white text-sm transition-colors">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-white/70 hover:text-white text-sm transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          {/* Redes sociales */}
          <div>
            <h3 className="text-white font-semibold mb-4">Sígueme</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/edwin-ordonez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white visited:text-white/70 transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/edwin-ordonez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white visited:text-white/70 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-white/50 text-sm">
            © 2025 Edwin Ordoñez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
} 