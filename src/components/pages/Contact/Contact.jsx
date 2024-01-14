import React from 'react';
import emailjs from 'emailjs-com';
import styles from './Contact.module.css'

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    const service_id = 'iaw_portafolio';
    const template_id = 'template_gpwfeyp';
    const user_id = 'D5cKw83dfCeB74Jma';

    emailjs.sendForm(service_id, template_id, e.target, user_id)
      .then((result) => {
        console.log(result.text);
        alert('Solicitud enviada con éxito');
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.text);
        alert('Error al enviar el correo. Inténtalo de nuevo más tarde.');
      });
  };

  return (
    <article id='contactPage' className={styles.contactBox}>
      <form onSubmit={sendEmail}>
        <div className={styles.contactInfo}>
          <h1>Envía tu mensaje</h1>

          <div>
            <p>Nombre</p>
            <input className={styles.inputArea} type="text" name="name" placeholder="Nombre" required />
          </div>

          <div>
            <p>Apellidos</p>
            <input className={styles.inputArea} type="text" name="surnames" placeholder="Apellidos" required />
          </div>

          <div>
            <p>Correo electrónico</p>
            <input className={styles.inputArea} type="email" name="email" placeholder="ejemplo@gmail.com" required />
          </div>

          <div>
            <p>Mensaje</p>
            <input className={styles.textMessage} name="message" placeholder="Deja tu Mensaje..."></input>
          </div>

          <div>
            <button  className={styles.sendInfo} type="submit">Enviar</button>
          </div>
        </div>
      </form>
    </article>
  );
};

export default Contact;
