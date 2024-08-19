import './App.css'
import animate from "./assets/animate.ts";

function App() {

    animate();
  return (
    <div>
        <canvas className={'canvas'}></canvas>
    </div>
  )
}

export default App
