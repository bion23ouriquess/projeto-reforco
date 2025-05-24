import './App.css';

function App() {

  function adivinhar() {
    let num = Math.ceil(Math.random()*10);
    let palpite = Number(prompt('Chute um número'));

      if(num < 1  && num > 10){
        alert('Digite um número entre 1 e 10');
      } else if(palpite === num){
        alert('Acertou!')
      }else{
        alert('Errou!')
      }

    console.log(num);
  }

  return (
    <>
      <h1>Exercicio 2</h1>
      <button onClick={adivinhar}>Adivinhe</button>
    </>
  )
}

export default App
