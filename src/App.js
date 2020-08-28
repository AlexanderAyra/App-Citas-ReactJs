import React, { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {
	// Citas en local Storage

	let citaInical = JSON.parse(localStorage.getItem('citas'))
	if (!citaInical) {
		citaInical = []
	}

	const [citax, setCitax] = useState(citaInical)

	useEffect(() => {
		if (citaInical) {
			localStorage.setItem('citas', JSON.stringify(citax))
		} else {
			localStorage.setItem('citas', JSON.stringify([]))
		}
	}, [citax, citaInical])

	const addCita = (cita) => {
		setCitax([...citax, cita])
	}

	const deleteCitas = (id) => {
		const nuevasCitas = citax.filter((cit) => cit.id !== id)
		setCitax(nuevasCitas)
	}

	// Mensaje Condicional

	const Titulo = citax.length === 0 ? 'No hay Citas' : 'Administrar tus Citas'

	return (
		<div>
			<h1>Administrador de Pacientes</h1>
			<div className='container'>
				<div className='row'>
					<div className='one-half column'>
						<Formulario addCita={addCita} />
					</div>
					<div className='one-half column'>
						<h2>{Titulo}</h2>
						{citax.map((cita) => (
							<Cita key={cita.id} cita={cita} deleteCitas={deleteCitas} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
