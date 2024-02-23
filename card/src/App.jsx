import Nabvar from "./compo/Nabvar"
import Footer from "./compo/Footer"
import Card from "./compo/card"

function App() {
  return (
    
  <>
    <Nabvar/>
    <div className="cards">
        <Card title="card 1" description="card 1 desc" />
      
       
      </div>
    <Footer/>
    
  </>
  )
}

export default App
