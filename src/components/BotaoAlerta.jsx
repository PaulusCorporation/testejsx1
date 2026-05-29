const BotaoAlerta = () => {

  const handleClick = () => {
    alert('AE! Você achou o botão on click!')
  }

  return (
    <div>
      <button onClick={handleClick}>Clica aí!</button>
    </div>
  )
}

export default BotaoAlerta