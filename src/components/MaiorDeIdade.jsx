const MaiorDeIdade = ({ idade }) => {
  return (
    <>
      <h3>Você tem {idade} anos</h3>
      {idade >= 18
        ? <p>✅  Já pode dirigir!</p>
        : <p>❌ Não pode dirigir ainda Não! . Faltam {18 - idade} anos.</p>}
    </>
  )
}

export default MaiorDeIdade