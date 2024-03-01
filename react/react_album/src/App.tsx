import "./App.css";
import { RouteList } from "./routes/RoutList";
const App = () => { 

   return (    
    <div className="App">
      <div className="container">
        <h1>Galeria de fotos</h1>
          <hr />
          <RouteList />
      </div>      
    </div>
  )
}

export default App
