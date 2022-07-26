import React from 'react'

const ListadoGastos = ({ gastos }) => {

    //{console.log(gastos.length)}

  return (
    <div className='listado-gastos contenerdor'>
        <h2>{ gastos.length ? 'Gastos' : 'No hay gastos aún' }</h2>
    </div>
  )
}

export default ListadoGastos
