import React from 'react';
import '../css/IndexWeb.css';
import { Link } from 'react-router-dom';
import menuIcon from '../images/menu.png';
import generalMedicine from '../images/general_medicine.png';
import pediatricsMedicine from '../images/pedriatics_medicine.png';
import dentistryMedicine from '../images/dentistry_medicine.png';
import calendarIcon from '../images/calendar-icon.png';
import medicalLeave from '../images/medical-leave.png';
import checkedIcon from '../images/checked-icon.png';
import logoImage from '../images/logoMediWeb.png';
import facebookLogo from '../images/facebook_logo.png';
import xLogo from '../images/x_logo.png';
import instagramLogo from '../images/instagram_logo.png';
import '@fontsource/poppins';
import '@fontsource/poppins/400.css';  
import '@fontsource/poppins/600.css'; 
import '@fontsource/poppins/800.css';  



const IndexWeb = () => {
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
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Servicios</a></li>
              <li><Link to="/IndexWeb2" href="#">Acerca de nosotros </Link></li>
              <li><Link to="/Signup">Registrate!</Link></li>
              <li><Link to="/Login">Inicia sesión</Link></li>
            </ul>
          </nav>
        </div>
        <div className="header-content container">
          <h1>Conecta con tu Bienestar</h1>
          <p>Tu salud, nuestra prioridad: Encuentra y agenda tu consulta médica en un solo clic.</p>
          <a href="#" className="btn-1">Información</a>
        </div>
      </header>

      <section className="medic-main">
        <div className="medic-content container">
          <h2>¿Qué es MediWeb?</h2>
          <p className="txt-p">
            Es una plataforma innovadora diseñada para facilitar el proceso de agendar citas médicas de manera rápida, sencilla y segura. Nuestra misión es conectar a pacientes con profesionales de la salud, brindando acceso a una amplia red de médicos y especialistas desde la comodidad de tu hogar.
          </p>
          <div className="medic-group">
            <div className="medic-1">
              <img src={generalMedicine} alt="Medicina General" />
              <h3>Medicina general</h3>
              <p>
                La medicina general es el primer punto de contacto para el cuidado de la salud. Nuestros médicos generales están capacitados para evaluar y tratar una amplia variedad de condiciones médicas, proporcionando un enfoque integral y preventivo.
              </p>
            </div>
            <div className="medic-1">
              <img src={pediatricsMedicine} alt="Pediatría" />
              <h3>Pediatría</h3>
              <p>
                Nuestros servicios de pediatría están diseñados para apoyar el crecimiento y desarrollo saludable de su hijo, desde el nacimiento hasta la adolescencia. Ofrecemos atención médica especializada para asegurar que su pequeño reciba el mejor cuidado posible.
              </p>
            </div>
            <div className="medic-1">
              <img src={dentistryMedicine} alt="Odontología" />
              <h3>Odontología</h3>
              <p>
                Cuidar de su salud bucal es esencial para su bienestar general. Nuestros odontólogos ofrecen una amplia gama de servicios, desde limpiezas rutinarias hasta tratamientos dentales avanzados.
              </p>
            </div>
          </div>
          <a href="#" className="btn-1">Agenda tu cita ahora mismo!</a>
        </div>
      </section>

      <main className="services">
        <div className="services-content container">
          <h2>Conoce los beneficios</h2>
          <div className="services-group">
            <div className="services-1">
              <img src={calendarIcon} alt="Servicio 1" />
              <h3>Un flexible horario para tus citas</h3>
            </div>
            <div className="services-1">
              <img src={medicalLeave} alt="Servicio 2" />
              <h3>Protegete a ti y a tu familia</h3>
            </div>
            <div className="services-1">
              <img src={checkedIcon} alt="Servicio 3" />
              <h3>Obten una cita fácil y a tiempo</h3>
            </div>
          </div>
          <p>
            Nuestra plataforma de agendamiento en línea está diseñada para ofrecerte comodidad y eficiencia. Puedes programar, reprogramar o cancelar tus citas médicas de manera rápida y sencilla desde cualquier lugar y en cualquier momento. Olvídate de las llamadas telefónicas y disfruta de una experiencia libre de estrés.
          </p>
          <a href="#" className="btn-1">Información</a>
        </div>
      </main>

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

export default IndexWeb;
