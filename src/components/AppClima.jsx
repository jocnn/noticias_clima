import useClima from "../hooks/useClima"

import Formulario from "./Formulario"
import Resultado from "./Resultado"

const AppClima = () => {

  const { resultado } = useClima()

  return (
    <>
      <main className="dos-columnas">
        <Formulario />

        {
          resultado?.name ? 
          <Resultado /> : <p>El clima se va a mostrar aquí</p>
        }
      </main>

    </>
  )
}

export default AppClima