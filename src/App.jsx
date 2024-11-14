import './App.css'
import Calculate from './components/Calculate'
import Header from './components/Header'
import News from './components/News'
import Advantages from './components/Advantages'
import Guarantee from './components/Guarantee'

function App() {

  return (
    <>
      <Header />
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <News />
        <Calculate />
      </div>
      <Advantages />
      <Guarantee />
    </>
  )
}

export default App
