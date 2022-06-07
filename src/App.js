import './App.css';
import { useState } from 'react';

function App() {

  const [jogadorDaVez, setJogadorDaVez] = useState("Amanda");

  const [tabuleiro, setTabuleiro] = useState(
    [
      ["","",""],
      ["","",""],
      ["","",""] 
    ]
  );

  const [valor, setValor] = useState("X");

  const verificaSeGanhou = () => {

    
    if ( tabuleiro[0][0] !== "" && ( tabuleiro[0][0] === tabuleiro[0][1] && tabuleiro[0][1] === tabuleiro[0][2] )) {
      alert("Você ganhou!")
    }
    if ( tabuleiro[1][0] !== "" && ( tabuleiro[1][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[1][2] )) {
      alert("Você ganhou!")
    }
    if ( tabuleiro[2][0] !== "" && ( tabuleiro[2][0] === tabuleiro[2][1] && tabuleiro[2][1] === tabuleiro[2][2] )) {
      alert("Você ganhou!")
    }
    if ( tabuleiro[0][0] !== "" && ( tabuleiro[0][0] === tabuleiro[1][0] && tabuleiro[1][0] === tabuleiro[2][0] )) {
      alert("Você ganhou!")
    }
    if ( tabuleiro[0][1] !== "" && ( tabuleiro[0][1] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][1] )) {
      alert("Você ganhou!")
    }
    if ( tabuleiro[0][2] !== "" && ( tabuleiro[0][2] === tabuleiro[1][2] && tabuleiro[1][2] === tabuleiro[2][2] )) {
      alert("Você ganhou!")
    }
    if ( tabuleiro[0][0] !== "" && ( tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2] )) {
      alert("Você ganhou!")
    }
    if ( tabuleiro[0][2] !== "" && ( tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0] )) {
      alert("Você ganhou!")
    }


  }

  const handleClick = ( linha, coluna ) => {

    if ( tabuleiro[linha-1][coluna-1] !== "" ) {
      return;
    }

    tabuleiro[linha-1][coluna-1] = valor

    setTabuleiro(tabuleiro);

    verificaSeGanhou();

    if (jogadorDaVez === "Amanda" ) {
      setJogadorDaVez("Artur")
    } else {
      setJogadorDaVez("Amanda")
    }

    if(valor === 'X'){
      setValor('O')
    } else {
        setValor('X')
    }    

  }


  return (
    <div className="App">
      <header className="App-header">
        
        <h1 className="jogador-da-vez">Jogador da vez: {jogadorDaVez}</h1>

        <div className="linha">
          <div className="quadrado" onClick={() => {handleClick(1,1)}}>
            {tabuleiro[0][0]}
          </div>
          <div className="quadrado" onClick={() => {handleClick(1,2)}}>
            {tabuleiro[0][1]}
          </div>
          <div className="quadrado" onClick={ () => { handleClick(1,3)}}>
            {tabuleiro[0][2]}
          </div>
        </div>

        <div className="linha">
          <div className="quadrado" onClick={() => {handleClick(2,1)}}>
            {tabuleiro[1][0]}
          </div>
          <div className="quadrado" onClick={() => {handleClick(2,2)}}>
            {tabuleiro[1][1]}
          </div>
          <div className="quadrado" onClick={() => {handleClick(2,3)}}>
            {tabuleiro[1][2]}
          </div>
        </div>
        <div className="linha">
          <div className="quadrado" onClick={() => {handleClick(3,1)}}>
          {tabuleiro[2][0]}
          </div>
          <div className="quadrado" onClick={() => {handleClick(3,2)}}>
          {tabuleiro[2][1]}
          </div>
          <div className="quadrado" onClick={() => {handleClick(3,3)}}>
          {tabuleiro[2][2]}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
