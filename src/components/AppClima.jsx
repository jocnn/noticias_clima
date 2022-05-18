import useClima from "../hooks/useClima"

import Formulario from "./Formulario"
import Resultado from "./Resultado"
import Spinner from "./Spinner"

const AppClima = () => {

  const { resultado, cargando, noResultado } = useClima()

  return (
    <>
      <main className="dos-columnas">
        <Formulario />

        { 
          cargando ? <Spinner /> : 
          resultado?.name ? 
          <Resultado /> : noResultado ? 
          <p>No hay resultado</p> :
          <p>El clima se va a mostrar aquí</p>
        }
      </main>

    </>
  )
}

export default AppClima