import { Link } from 'react-router-dom';
import '../css/IndexWeb.css';
import menuIcon from '../images/menu.png';
import doctor1 from '../images/doctor1.jpg';
import doctor2 from '../images/doctor2.avif';
import doctor3 from '../images/doctor3.avif';
import facebookLogo from '../images/facebook_logo.png';
import xLogo from '../images/x_logo.png';
import instagramLogo from '../images/instagram_logo.png';
import logoImage from '../images/logoMediWeb.png';

export default function IndexWeb2() {
  return (
    <div>
      <header className="header">
        <div className="menu container">
        <a href="#" className="logo">
          <img src={logoImage} alt="Logo" className="logo-image" />
          </a>
          <input type="checkbox" id="menu" />
          <label htmlFor="menu">
            <img src={menuIcon} className="menu-icono" alt="Menu Icon" />
          </label>
          <nav className="navbar">
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/">Servicios</Link></li>
              <li><Link to="/IndexWeb2">Acerca de nosotros</Link></li>
              <li><Link to="/login">Registrate!</Link></li>
              <li><Link to="/signup">Inicia sesión</Link></li>
            </ul>
          </nav>
        </div>
        <div className="header-content container">
          <h1>Conecta con tu Bienestar</h1>
          <p>Tu salud, nuestra prioridad: Encuentra y agenda tu consulta médica en un solo clic.</p>
          <Link to="/informacion" className="btn-1">Información</Link>
        </div>
      </header>

      <section className="blog container">
        <h2>Conoce a nuestros profesionales</h2>
        <p>Contamos con profesionales en las diferentes especialidades con más de 10 años de experiencia</p>

        <div className="blog-wrapper">
          <div className="blog-content">
            <div className="blog-item">
              <img src={doctor1} alt="Dr. Carlos Martínez" />
              <h3>Dr. Carlos Martínez</h3>
              <p>Lorem ipsum dolor, sit amet</p>
            </div>

            <div className="blog-item">
              <img src={doctor2} alt="Dra. Ana López" />
              <h3>Dra. Ana López</h3>
              <p>Lorem ipsum dolor, sit amet</p>
            </div>

            <div className="blog-item">
              <img src={doctor3} alt="Blog 3" />
              <h3>Dr. Wilson</h3>
              <p>Lorem ipsum dolor, sit amet</p>
            </div>
          </div>
        </div>

        <Link to="/informacion" className="btn-1">Información</Link>
      </section>

      <footer className="footer">
        <div className="footer-content container">
          <div className="link">
            <h3>MediWEB</h3>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/IndexWeb2">Sobre Nosotros</Link></li>
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div className="link">
            <h3>Especialidades</h3>
            <ul>
              <li><Link to="/medicina-general">Medicina general</Link></li>
              <li><Link to="/pediatria">Pediatría</Link></li>
              <li><Link to="/odontologia">Odontología</Link></li>
            </ul>
          </div>

          <div className="link">
            <h3>Recursos</h3>
            <ul>
              <li><Link to="/faq">Preguntas Frecuentes</Link></li>
              <li><Link to="/privacidad">Política de Privacidad</Link></li>
              <li><Link to="/terminos">Términos y Condiciones</Link></li>
              <li><Link to="/guia">Guía para Pacientes</Link></li>
              <li><Link to="/blog-medico">Blog Médico</Link></li>
            </ul>
          </div>

          <div className="link">
            <h3>Contacto</h3>
            <ul>
              <li><Link to="/contacto">Teléfono: +123 456 7890</Link></li>
              <li><Link to="/contacto">Email: info@mediweb.com</Link></li>
              <li><Link to="/contacto">Dirección: Calle Salud 123, Ciudad</Link></li>
              <li><Link to="/redes-sociales">Síguenos en Redes Sociales</Link></li>
              <li><a href="#"><img src={facebookLogo} alt="Facebook" /></a></li>
              <li><a href="#"><img src={xLogo} alt="X (Twitter)" /></a></li>
              <li><a href="#"><img src={instagramLogo} alt="Instagram" /></a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 MediWEB. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
