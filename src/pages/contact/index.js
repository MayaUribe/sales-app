import React, { Component } from 'react';
import SubHeader from "../../components/subHeader";

import '../../App.css';
import '../../index.css';

class Contact extends Component {
  render() {
    return (
      <div>
        <SubHeader title="Información de Contacto" />
        <section id="contact">
          <div className="container">
            <div>
              <strong>Persona de contacto: </strong>Carlos De Sousa
            </div>
            <div>
              <strong>Correo: </strong>carlosdsv@gmail.com
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Contact;
