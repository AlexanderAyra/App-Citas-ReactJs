import React from 'react'

const Formulario = () => {
	return (
		<div>
			<h2>Crear Cita</h2>

			<form>
				<label>Nombre Mascota</label>
				<input
					type='text'
					name='nombre'
					className='u-full-width'
					placeholder='Nombre Mascota'
				/>

				<label>Nombre Dueño</label>
				<input
					type='text'
					name='propietario'
					className='u-full-width'
					placeholder='Nombre Dueño'
				/>

				<label>Fecha</label>
				<input type='date' name='fecha' className='u-full-width' />

				<label>Hora</label>
				<input type='time' name='hora' className='u-full-width' />

				<label>Síntomas</label>
				<textarea name='sintomas' className='u-full-width'></textarea>

				<button className='u-full-width button-primary'>Agregar</button>
			</form>
		</div>
	)
}

export default Formulario
