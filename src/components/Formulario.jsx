import React, { useState } from 'react'

const Formulario = () => {
	const [citas, setCitas] = useState({
		mascota: '',
		propietario: '',
		fecha: '',
		hora: '',
		sintomas: '',
	})

	const handleChange = (e) => {
		setCitas({
			...citas,
			[e.target.name]: e.target.value,
		})
	}

	const { mascota, propietario, fecha, hora, sintomas } = citas

	return (
		<div>
			<h2>Crear Cita</h2>

			<form>
				<label>Nombre Mascota</label>
				<input
					type='text'
					name='mascota'
					className='u-full-width'
					placeholder='Nombre Mascota'
					onChange={handleChange}
					value={mascota}
				/>

				<label>Nombre Dueño</label>
				<input
					type='text'
					name='propietario'
					className='u-full-width'
					placeholder='Nombre Dueño'
					onChange={handleChange}
					value={propietario}
				/>

				<label>Fecha</label>
				<input
					type='date'
					name='fecha'
					className='u-full-width'
					onChange={handleChange}
					value={fecha}
				/>

				<label>Hora</label>
				<input
					type='time'
					name='hora'
					className='u-full-width'
					onChange={handleChange}
					value={hora}
				/>

				<label>Síntomas</label>
				<textarea
					name='sintomas'
					className='u-full-width'
					onChange={handleChange}
					value={sintomas}
				></textarea>

				<button className='u-full-width button-primary'>Agregar</button>
			</form>
		</div>
	)
}

export default Formulario
