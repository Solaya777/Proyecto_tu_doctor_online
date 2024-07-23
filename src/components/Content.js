import React from "react";
export default function Content() {
  return (
    <div className="content">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <h3 className="heading mb-4">Registrate aquí para tu cita!</h3>
                <p>
                  Tu salud, nuestra prioridad. Al registrarte en nuestra web de
                  citas médicas, estás dando el primer paso hacia una gestión
                  más eficiente de tu salud. Tu información personal estará
                  protegida y solo se usará para facilitar la programación de
                  tus citas médicas.
                </p>
                <p>
                  <img
                    src={`${process.env.PUBLIC_URL}/dist/img/imagen_doctor.png`}
                    alt="Imagen de un doctor"
                    className="img-fluid"
                  />
                </p>
              </div>
              <div className="col-md-6">
                <form
                  className="mb-5"
                  method="post"
                  id="contactForm"
                  name="contactForm"
                >
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder="Tu nombre"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Tu Email"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Horario de la cita"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <textarea
                        className="form-control"
                        name="message"
                        id="message"
                        cols={30}
                        rows={7}
                        placeholder="Motivo de la cita"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <input
                        type="submit"
                        defaultValue="Send Message"
                        className="btn btn-primary rounded-0 py-2 px-4"
                      />
                      <span className="submitting" />
                    </div>
                  </div>
                </form>
                <div id="form-message-warning mt-4" />
                <div id="form-message-success">
                  Your message was sent, thank you!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
