import React from 'react'
import { formatearFecha } from '../helpers'

const Gasto = ({gasto}) => {

    //se puede aplicar distracción para no usar gasto.categoria en el párrafo a imprimir
    const { categoria, nombre, cantidad, id, fecha } = gasto

  return (
    <div className='gasto sombra'>
      <div className='contenido-gasto'>
        {/* Imagen */}
        <div className='descripcion-gasto'>
            <p className='categoria'>{categoria}</p>
            <p className='nombre-gasto'>{nombre}</p>
            <p className='fecha-gasto'>
                Agregado el: {''}
                <span>{formatearFecha(fecha)}</span>
            </p>
        </div>
        

      </div>
      <p className='cantidad-gasto'>${cantidad}</p>
    </div>
  )
}

export default Gasto
