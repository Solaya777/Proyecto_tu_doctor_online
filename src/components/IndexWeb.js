/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import background from '../images/background.jpg';
import services from '../images/c1.png';
import { Link } from 'react-router-dom';
import '../css/IndexWeb.css';

export default function () {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="index.css" />
      <title>Document</title>
      <header className="header">
        <div className="menu container">
          <a className="logo">
            Logo
          </a>
          <input type="checkbox" id="menu" />
          <label htmlFor="menu">
            <img src={background} className="menu-icono" alt="Imagén de fondo" />
          </label>
          <nav className="navbar">
            <ul>
              <li>
                <a href="#medi-web">Mediweb</a>
              </li>
              <li>
                <a href="#">Inicio</a>
              </li>
              <li>
                <a href="#">Servicios</a>
              </li>
              <li><Link to="/Login">Registrate!</Link></li>
              <li>
                <a href="#">Inicia sesión</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header-content container">
          <h1>Conecta con tu Bienestar</h1>
          <p>
            Tu salud, nuestra prioridad: Encuentra y agenda tu consulta médica
            en un solo clic.
          </p>
          <a href="#" className="btn-1">
            Información
          </a>
        </div>
      </header>
      <section className="medic-main">
        <div className="medic-content container" id="medi-web">
          <h2>¿Qué es MediWeb?</h2>
          <p className="txt-p">
            es una plataforma innovadora diseñada para facilitar el proceso de
            agendar citas médicas de manera rápida, sencilla y segura. Nuestra
            misión es conectar a pacientes con profesionales de la salud,
            brindando acceso a una amplia red de médicos y especialistas desde
            la comodidad de tu hogar.
          </p>
          <div className="medic-group">
            <div className="medic-1">
              <img src={services} alt="" />
              <h3>Cafe Lorem</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                quasi deleniti eveniet repellat, voluptates porro ipsa excepturi
                tempora autem magni repellendus dolores suscipit dolor impedit
                quis perspiciatis exercitationem reprehenderit et!
              </p>
            </div>
            <div className="medic-1">
              <img src="../images/c2.png" alt />
              <h3>Cafe Lorem</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                quasi deleniti eveniet repellat, voluptates porro ipsa excepturi
                tempora autem magni repellendus dolores suscipit dolor impedit
                quis perspiciatis exercitationem reprehenderit et!
              </p>
            </div>
            <div className="medic-1">
              <img src="../images/c3.png" alt />
              <h3>Cafe Lorem</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                quasi deleniti eveniet repellat, voluptates porro ipsa excepturi
                tempora autem magni repellendus dolores suscipit dolor impedit
                quis perspiciatis exercitationem reprehenderit et!
              </p>
            </div>
          </div>
          <a href="#" className="btn-1">
            Información
          </a>
        </div>
      </section>
      <main className="services">
        <div className="services-content container">
          <h2>Cafetería servicios</h2>
          <div className="services-group">
            <div className="services-1">
              <img src="../images/i1.svg" alt />
              <h3>Servicio 1</h3>
            </div>
          </div>
          <div className="services-group">
            <div className="services-1">
              <img src="../images/i2.svg" alt />
              <h3>Servicio 1</h3>
            </div>
          </div>
          <div className="services-group">
            <div className="services-1">
              <img src="../images/i3.svg" alt />
              <h3>Servicio 1</h3>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            dolore maiores facere, voluptates voluptatum, perspiciatis error
            unde, quae quod commodi dicta non earum! Ratione, quam ut vitae rem
            ducimus omnis?
          </p>
          <a href="#" className="btn-1">
            Información
          </a>
        </div>
      </main>
      <section className="general">
        <div className="general-1">
          <h2>Cualquier cosa</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut eius
            laboriosam corporis repudiandae voluptates nam cupiditate,
            necessitatibus quod obcaecati libero sint eaque consequuntur
            temporibus ipsa! Suscipit voluptatibus in tempora repudiandae.
          </p>
          <a href="#" className="btn-1">
            Información
          </a>
        </div>
        <div className="general-2" />
      </section>
      <section className="general">
        <div className="general-3" />
        <div className="general-1">
          <h2>Cualquier cosa</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut eius
            laboriosam corporis repudiandae voluptates nam cupiditate,
            necessitatibus quod obcaecati libero sint eaque consequuntur
            temporibus ipsa! Suscipit voluptatibus in tempora repudiandae.
          </p>
          <a href="#" className="btn-1">
            Información
          </a>
        </div>
      </section>
      <section className="blog container">
        <h2>Blog</h2>
        <p>Loreee</p>
        <div className="blog-content">
          <div className="blog-1">
            <img src="../images/blog1.jpg" alt />
            <h3>Blog 1</h3>
            <p>m ipsum dolor, sit amet </p>
          </div>
        </div>
        <div className="blog-content">
          <div className="blog-1">
            <img src="../images/blog2.jpg" alt />
            <h3>Blog 1</h3>
            <p>m ipsum dolor, sit amet </p>
          </div>
        </div>
        <div className="blog-content">
          <div className="blog-1">
            <img src="../images/blog3.jpg" alt />
            <h3>Blog 1</h3>
            <p>m ipsum dolor, sit amet </p>
          </div>
        </div>
        <a href className="btn-1">
          Información
        </a>
      </section>
      <footer className="footer">
        <div className="footer-content container">
          <div className="link">
            <h3>lorem</h3>
            <ul>
              <li>
                <a href="#">lorem</a>
              </li>
              <li>
                <a href="#">lorem</a>
              </li>
              <li>
                <a href="#">lorem</a>
              </li>
              <li>
                <a href="#">lorem</a>
              </li>
            </ul>
          </div>
          <div className="link">
            <h3>lorem</h3>
            <ul>
              <li>
                <a href="#">lorem</a>
              </li>
              <li>
                <a href="#">lorem</a>
              </li>
              <li>
                <a href="#">lorem</a>
              </li>
              <li>
                <a href="#">lorem</a>
              </li>
            </ul>
          </div>
          <div className="link">
            <h3>lorem</h3>
            <ul>
              <li>
                <a href="#">lorem</a>
              </li>
              <li>
                <a href="#">lorem</a>
              </li>
              <li>
                <a href="#">lorem</a>
              </li>
              <li>
                <a href="#">lorem</a>
              </li>
            </ul>
          </div>
          <div className="link">
            <h3>lorem</h3>
            <ul>
              <li>
                <a href="#">lorem</a>
              </li>
              <li>
                <a href="#">lorem</a>
              </li>
              <li>
                <a href="#">lorem</a>
              </li>
              <li>
                <a href="#">lorem</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
