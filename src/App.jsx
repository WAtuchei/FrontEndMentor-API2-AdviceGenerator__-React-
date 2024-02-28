import './App.css'
import './sass/mainApp.scss'

function App() {

  return (
    <div className='main-container'>
      <main className='main'>
      {/* header */}
        <header className="main__head">
          <h1>
            ADVICE #117
          </h1>
        </header>

        <article className="main__quotes">
          <p>
            {`"Some quotes here"`}
          </p>
        </article>

        <div className="main__divider">
          <img src="../images/pattern-divider-mobile.svg" alt="divider-line" />          
        </div>        
      </main>
      <div className='dice-container'>
        <img src="../images/icon-dice.svg" alt="dice" />
      </div>
    </div>
  )
}
export default App