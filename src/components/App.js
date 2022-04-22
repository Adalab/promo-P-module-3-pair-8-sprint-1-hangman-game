import '../styles/App.scss';
import { useState } from 'react';

function App() {
  const [numberOfErrors, setNumberOfErrors] = useState(0);
  const [lastLetter, setlastLetter] = useState('');
  const [word, setWord] = useState('elefante');
  const [userLetters, setUserLetters] = useState([]);

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    console.log(wordLetters);
    const html = wordLetters.map((letter, index) => {
    return (<li key={index} className="letter"></li>)
  });
  return html;
  }

  const handleClickBtn = () => {
    setNumberOfErrors(numberOfErrors + 1);
  };
  const handleLetter = (ev) => {
    const newValue = ev.currentTarget.value;
    const letters = /^[a-zA-Z\u00C0-\u00FF]?$/; /* ?? */ 
    if (letters.test(newValue)){
    setlastLetter(newValue);
    console.log(lastLetter)
    }
    // const newUserLetters = [...userLetters, lastLetter]
    // console.log(newUserLetters);
  }
  const handleForm = (ev) => {
    ev.preventDefault();
  }

  return (
    <div className='page'>
      <button className='btn-color' onClick={handleClickBtn}>
        Incrementar:
      </button>
      <header>
        <h1 className='header__title'>Juego del ahorcado</h1>
      </header>
      <main className='main'>
        <section>
          <div className='solution'>
            <h2 className='title'>Solución:</h2>
            <ul className='letters'>
            {renderSolutionLetters()}
            </ul>
          </div>
          <div className='error'>
            <h2 className='title'>Letras falladas:</h2>
            <ul className='letters'>
              <li className='letter'>f</li>
              <li className='letter'>q</li>
              <li className='letter'>h</li>
              <li className='letter'>p</li>
              <li className='letter'>x</li>
            </ul>
          </div>
          <form className='form' onSubmit={handleForm}>
            <label className='title' htmlFor='last-letter'>
              Escribe una letra:
            </label>
            <input
              autoComplete='off'
              className='form__input'
              maxLength='1'
              type='text'
              name='last-letter'
              id='last-letter'
              value={lastLetter}
              onChange={handleLetter}
            />
          </form>
        </section>
        <section className={`dummy error-${numberOfErrors}`}>
          <span className='error-13 eye'></span>
          <span className='error-12 eye'></span>
          <span className='error-11 line'></span>
          <span className='error-10 line'></span>
          <span className='error-9 line'></span>
          <span className='error-8 line'></span>
          <span className='error-7 line'></span>
          <span className='error-6 head'></span>
          <span className='error-5 line'></span>
          <span className='error-4 line'></span>
          <span className='error-3 line'></span>
          <span className='error-2 line'></span>
          <span className='error-1 line'></span>
        </section>
      </main>
    </div>
  );
}

export default App;
