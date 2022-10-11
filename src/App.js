import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Random from "./pages/Random";
import OffCanvas from "./components/offcanvas/OffCanvas";
import ParticlesBackground from "./components/Particles/ParticlesBackground";

function App() {
  return (
    <div>
      <Container className="App">
        <ParticlesBackground />
        <OffCanvas />
        <Random />
      </Container>
    </div>
  );
}

export default App;
