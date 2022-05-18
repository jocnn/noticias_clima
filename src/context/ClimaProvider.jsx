import { createContext, useState } from 'react'
import axios from 'axios'

const ClimaContext = createContext()

const ClimaProvider = ({children}) => {

  const [ noResultado, setNoResultado ] = useState(false)
  const [ cargando, setCargando ] = useState(false)
  const [ resultado, setResultado ] = useState({})
  const [ busqueda, setBusqueda ] = useState({
    ciudad: '',
    pais: ''
  })

  const datosBusqueda = e => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value
    })
  }

  const consultarClima = async datos => {
    setCargando(true)
    setNoResultado(false)
    setResultado({})
    try {
      const { ciudad, pais } = datos

      const appId = import.meta.env.VITE_API_KEY

      const urlGeo = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`
      //console.info(urlGeo)

      const { data } = await axios(urlGeo)
      //console.info(data)

      const { lat, lon } = data[0]
      // console.info(lat)
      // console.info(lon)

      const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=metric`
      //console.info(urlClima)

      const { data: clima } = await axios(urlClima)
      //console.info(clima)

      setResultado(clima)

    } catch (error) {
      //console.error(error)
      setNoResultado(true)
    } finally {
      setCargando(false)
    }
  }

  return (
    <ClimaContext.Provider 
      value={{
        busqueda,
        datosBusqueda,
        consultarClima,
        resultado,
        cargando,
        noResultado
      }}
    >
      {children}
    </ClimaContext.Provider>
  )
}

export {
  ClimaProvider
}

export default ClimaContext