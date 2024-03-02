import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import './sass/mainApp.scss'

function App() {
  const [advice, setAdvie] = useState('')
  const [quote, setQuote] = useState('')
  const [dividerImg, setDividerImg] = useState('../images/pattern-divider-mobile.svg')

  const divideImg = () => {
    if ( window.innerWidth >= 900 ) {
      setDividerImg('../images/pattern-divider-desktop.svg')
    }
    else {
      setDividerImg('../images/pattern-divider-mobile.svg')
    }
  }

  const randomQuote = () => {
    axios.get('https://api.adviceslip.com/advice')
    .then( res => {
      const data = res.data.slip
      setAdvie(data.id)
      setQuote(data.advice)
    })
  }

  useEffect(() => {
    window.addEventListener('resize', divideImg)
  },[])

  return (
    <div className='main-container'>
      <main className='main'>
      {/* header */}
        <header className="main__head">
          <h1>
            { !advice ? 
              `ADVICE GENERATOR` :
              `ADVICE #${advice}`
            }
          </h1>
        </header>

      {/* quotes block */}
        <article className="main__quotes">
          <p>
            { quote &&
              `"${quote}"`
            }
          </p>
        </article>

      {/* divide line */}
        <div className="main__divider">
          <img src={dividerImg} alt="divider-line" />          
        </div>        
      </main>
      {/* dice */}
      <div 
        className='dice-container'
        onClick={randomQuote}
      >
        <img src="../images/icon-dice.svg" alt="dice" />
      </div>
    </div>
  )
}
export default App