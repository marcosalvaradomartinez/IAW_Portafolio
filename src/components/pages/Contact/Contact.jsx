import React from 'react'

const Contact = () => {
  return (
    <article id='contactPage'>
		<form>
			<div class="contact-form-info">
				<h1>Escríbenos</h1>

				<div class="name">
					<p>Nombre</p>
					<input type="text" placeholder="Nombre" required/>
				</div>

				<div class="surnames">
					<p>Apellidos</p>
					<input type="text" placeholder="Apellidos" required/>
				</div>

                <div class="email">
					<p>Correo electrónico</p>
					<input type="email" placeholder="ejemplo@gmail.com" required/>
				</div>
                
				<div class="message">
					<p>Mensaje</p>
					<textarea name="message" rows="5" cols="30" placeholder="Deja tu Mensaje..."></textarea>
                </div>
                <div class="send">
				    <button><a href="#">Enviar</a></button>
                </div>
            </div>
		</form>
    </article>
  )
}

export default Contact