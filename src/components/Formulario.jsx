const Formulario = () => {
  return (
    <div className="contenedor">
      <form>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input 
            id="ciudad"
            type="text"
            name="ciudad" 
          />
        </div>

        <div className="campo">
          <label htmlFor="pais">País</label>
          <select 
            name="pais"
            id="pais"
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