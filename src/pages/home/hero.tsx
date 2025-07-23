import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Github } from '../../components/socialMedia/github';
import { Linkedin } from '../../components/socialMedia/linkedIn';
import { Email } from '../../components/socialMedia/email';

const projects = [
  {
    id: 1,
    name: 'E-commerce React',
    description: 'Tienda online con carrito de compras y pasarela de pago',
    image: 'home/ed2.webp',
    technologies: ['React', 'TypeScript', 'Tailwind'],
    link: '#',
  },
  {
    id: 2,
    name: 'Dashboard Analytics',
    description: 'Panel de control con gráficos y métricas en tiempo real',
    image: 'home/ed2.webp',
    technologies: ['Vue.js', 'Chart.js', 'API Rest'],
    link: '#',
  },
  {
    id: 3,
    name: 'Landing Page',
    description: 'Página de aterrizaje responsiva con animaciones suaves',
    image: 'home/ed2.webp',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    link: '#',
  }
]

const socialMedia = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/edwin-ordo%C3%B1ez/',
    icon: <Linkedin className="w-4 h-4" />
  },
  {
    name: 'GitHub',
    link: 'https://github.com/EdwinOl',
    icon: <Github className="w-4 h-4" />
  },
  {
    name: 'Email',
    link: 'mailto:edwin.julio.or@gmail.com',
    icon: <Email className="w-4 h-4" />
  }
]
export function Hero() {
  return (
    <section id="inicio" className="h-[90vh] bg-gradient-to-r from-[#0f172a] via-[rgb(30,41,59)] to-[#334155] flex items-center justify-center py-20 px-8">
      <div className="container mx-auto flex items-center justify-between max-w-7xl">

        {/* Columna 1: Descripción del perfil */}
        <div className="flex flex-col items-start justify-center w-1/2 pr-4">
          <div className="mb-6 flex flex-col-2 gap-4">
            <img
              src="home/ed2.webp"
              alt="Edwin Ordoñez"
              className="w-32 h-32 rounded-full border-4 border-[#37a1a4]/30 shadow-lg"
            />
            <div className="flex flex-col-2 gap-4 items-end">
              <h1 className="text-white text-3xl md:text-5xl font-bold leading-tight">
                Hola, soy <span className="text-[#37a1a4]">Edwin Ordoñez</span>
              </h1>
            </div>
          </div>
          <p className="text-gray-300 text-xl mb-6">Desarrollador de Software | Astro | React | Tailwind CSS | Hosting | Wordpress | Web Developer | Analista Operativo</p>
          <p className="text-gray-400 text-left text-base leading-relaxed">
            Dessarrollador frontend developer con experiencia en React, Astro, TypeScript, Tailwind CSS, Wordpress, entre otros.
            Desarrollo de interfas modernas, consumo de API's, animaciones con GSAP y foco en rendimiento. Capacidad de adaptación rápida
            y entrega de soluciones sólidas en entornos colaborativos.
          </p>
          <div className="flex gap-4 items-center justify-center w-full mt-4">
            {socialMedia.map((item) => (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="social-button text-xs md:text-base min-w-[100px] bg-[#37a1a4]/20 text-[#37a1a4] hover:text-white visited:text-[#37a1a4] transition-colors px-2 py-1 rounded-full flex items-center justify-center gap-2">
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Columna 2: Carrusel de proyectos */}
        <div className="w-1/2 pl-8">
          <div className="mb-8">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">Proyectos Destacados</h2>
            <div className="w-28 h-1 bg-[#37a1a4] rounded"></div>
          </div>

          {/* Contenedor del Swiper con altura fija */}
          <div className="relative overflow-hidden rounded-xl h-[280px]">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{
                clickable: true,
                el: '.swiper-pagination'
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="projects-swiper w-full h-full px-10"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id} className="h-full">
                  <div className="bg-gradient-to-br from-[#1e293b] to-[#334155] rounded-xl p-6 border border-[#37a1a4]/20 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-16 h-16 rounded-lg object-cover border-2 border-[#37a1a4]/30"
                      />
                      <div className="ml-4">
                        <h3 className="text-white text-xl font-semibold">{project.name}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="text-xs bg-[#37a1a4]/20 text-[#37a1a4] px-2 py-1 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    <a
                      href={project.link}
                      className="inline-flex items-center text-[#37a1a4] hover:text-white transition-colors font-medium mt-auto"
                    >
                      Ver proyecto
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Botones de navegación personalizados */}
            <div className="swiper-button-prev absolute left-1 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-[#37a1a4]/20 rounded-full flex items-center justify-center hover:bg-[#37a1a4]/40 transition-colors cursor-pointer">
              <svg className="w-4 h-4 text-[#37a1a4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="swiper-button-next absolute right-1 top-1/2 transform -translate-y-1/2 z-10 w-8 h-8 bg-[#37a1a4]/20 rounded-full flex items-center justify-center hover:bg-[#37a1a4]/40 transition-colors cursor-pointer">
              <svg className="w-4 h-4 text-[#37a1a4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            {/* Paginación personalizada */}
            <div className="swiper-pagination mt-4 flex justify-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
