import { laki1 } from "./assets/sprites";
import "./assets/style.css";
import Player from "./components/Player";
function App() {
  
  return (
    <div className="zone">
      <Player chara={laki1} />
    </div>
  );
}

export default App;
