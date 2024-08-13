import React from 'react';
import '../css/IndexWeb.css';
import menuIcon from '../images/menu.png';
import generalMedicine from '../images/general_medicine.png';
import pediatricsMedicine from '../images/pedriatics_medicine.png';
import dentistryMedicine from '../images/dentistry_medicine.png';
import calendarIcon from '../images/calendar-icon.png';
import medicalLeave from '../images/medical-leave.png';
import checkedIcon from '../images/checked-icon.png';
import blog1 from '../images/blog1.jpg';
import blog2 from '../images/blog2.jpg';
import blog3 from '../images/blog3.jpg';

const App = () => {
  return (
    <>
      <header className="header">
        <div className="menu container">
          <a href="#" className="logo">Logo</a>
          <input type="checkbox" id="menu" />
          <label htmlFor="menu">
            <img src={menuIcon} className="menu-icono" alt="Menu Icon" />
          </label>
          <nav className="navbar">
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Registrate!</a></li>
              <li><a href="#">Inicia sesión</a></li>
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
              <h3>Servicio 1</h3>
            </div>
            <div className="services-1">
              <img src={medicalLeave} alt="Servicio 2" />
              <h3>Servicio 2</h3>
            </div>
            <div className="services-1">
              <img src={checkedIcon} alt="Servicio 3" />
              <h3>Servicio 3</h3>
            </div>
          </div>
          <p>
            Nuestra plataforma de agendamiento en línea está diseñada para ofrecerte comodidad y eficiencia. Puedes programar, reprogramar o cancelar tus citas médicas de manera rápida y sencilla desde cualquier lugar y en cualquier momento. Olvídate de las llamadas telefónicas y disfruta de una experiencia libre de estrés.
          </p>
          <a href="#" className="btn-1">Información</a>
        </div>
      </main>

      <section className="general">
        <div className="general-1">
          <h2>Cualquier cosa</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut eius laboriosam corporis repudiandae voluptates nam cupiditate, necessitatibus quod obcaecati libero sint eaque consequuntur temporibus ipsa! Suscipit voluptatibus in tempora repudiandae.</p>
          <a href="#" className="btn-1">Información</a>
        </div>
        <div className="general-2"></div>
      </section>

      <section className="general">
        <div className="general-3"></div>
        <div className="general-1">
          <h2>Cualquier cosa</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut eius laboriosam corporis repudiandae voluptates nam cupiditate, necessitatibus quod obcaecati libero sint eaque consequuntur temporibus ipsa! Suscipit voluptatibus in tempora repudiandae.</p>
          <a href="#" className="btn-1">Información</a>
        </div>
      </section>

      <section className="blog container">
        <h2>Blog</h2>
        <p>Loreee</p>
        <div className="blog-content">
          <div className="blog-1">
            <img src={blog1} alt="Blog 1" />
            <h3>Blog 1</h3>
            <p>m ipsum dolor, sit amet</p>
          </div>
        </div>
        <div className="blog-content">
          <div className="blog-1">
            <img src={blog2} alt="Blog 2" />
            <h3>Blog 2</h3>
            <p>m ipsum dolor, sit amet</p>
          </div>
        </div>
        <div className="blog-content">
          <div className="blog-1">
            <img src={blog3} alt="Blog 3" />
            <h3>Blog 3</h3>
            <p>m ipsum dolor, sit amet</p>
          </div>
        </div>
        <a href="#" className="btn-1">Información</a>
      </section>

      <footer className="footer">
        <div className="footer-content container">
          <div className="link">
            <h3>lorem</h3>
            <ul>
              <li><a href="#">lorem</a></li>
              <li><a href="#">lorem</a></li>
              <li><a href="#">lorem</a></li>
              <li><a href="#">lorem</a></li>
            </ul>
          </div>
          <div className="link">
            <h3>lorem</h3>
            <ul>
              <li><a href="#">lorem</a></li>
              <li><a href="#">lorem</a></li>
              <li><a href="#">lorem</a></li>
              <li><a href="#">lorem</a></li>
            </ul>
          </div>
          <div className="link">
            <h3>lorem</h3>
            <ul>
              <li><a href="#">lorem</a></li>
              <li><a href="#">lorem</a></li>
              <li><a href="#">lorem</a></li>
              <li><a href="#">lorem</a></li>
            </ul>
          </div>
          <div className="link">
            <h3>lorem</h3>
            <ul>
              <li><a href="#">lorem</a></li>
              <li><a href="#">lorem</a></li>
              <li><a href="#">lorem</a></li>
              <li><a href="#">lorem</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
