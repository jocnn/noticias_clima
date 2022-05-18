import { useState } from "react"
import useClima from "../hooks/useClima"

const Formulario = () => {

  const [ alerta, setAlerta ] = useState('')

  const { busqueda, datosBusqueda, consultarClima } = useClima()
  const { ciudad, pais } = busqueda

  const handeSubmit = e => {
    e.preventDefault()

    if (Object.values(busqueda).includes('')) {
      setAlerta('Todos los campos sin obligatorios')
      return
    }

    consultarClima(busqueda)
  }

  return (
    <div className="contenedor">

      { 
        alerta && <p>{alerta}</p>
      }

      <form
        onSubmit={handeSubmit}
      >
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input 
            id="ciudad"
            type="text"
            name="ciudad" 
            value={ciudad}
            onChange={datosBusqueda}
          />
        </div>

        <div className="campo">
          <label htmlFor="pais">País</label>
          <select 
            name="pais"
            id="pais"
            value={pais}
            onChange={datosBusqueda}
          >
            <option value="">-- Seleccione un país</option>
            <option value="US">ESTADOS UNIDOS</option>
            <option value="MX">MÉXICO</option>
            <option value="AR">ARGENTINA</option>
            <option value="CO">COLOMBIA</option>
            <option value="CR">COSTA RICA</option>
            <option value="ES">ESPAÑA</option>
            <option value="PE">PERÚ</option>
          </select>
        </div>

        <input type="submit" value="Consultar Clima" />
      </form>
    </div>
  )
}

export default Formulario