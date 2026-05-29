import { useState } from 'react'

const TrocaTexto = () => {

  const [texto, setTexto] = useState('Opa!')

  return (
    <div>
      <h1>{texto}</h1>
      <button onClick={() => setTexto('Valeu FLW!')}>
        Trocar
      </button>
    </div>
  )
}

export default TrocaTexto