import React, { useState } from 'react'
import { getId } from '../utils'

const Formulario = () => {
	const [citas, setCitas] = useState({
		mascota: '',
		propietario: '',
		fecha: '',
		hora: '',
		sintomas: '',
	})
	const [error, setError] = useState(false)

	const handleChange = (e) => {
		setCitas({
			...citas,
			[e.target.name]: e.target.value,
		})
	}

	const { mascota, propietario, fecha, hora, sintomas } = citas

	const handleSubmit = (e) => {
		e.preventDefault()

		// validar

		if (
			mascota.trim() === '' ||
			propietario.trim() === '' ||
			fecha.trim() === '' ||
			hora.trim() === '' ||
			sintomas.trim() === ''
		) {
			setError(true)
			return
		}

		setError(false)

		// Asignar id
		citas.id = getId()
		console.log(citas)
		// crear la cita

		// reiniciar el form
	}

	return (
		<div>
			<h2>Crear Cita</h2>

			{error ? (
				<p className='alerta-error'>Todos los campos son obligatorios</p>
			) : null}

			<form onSubmit={handleSubmit}>
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
