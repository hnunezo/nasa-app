import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Random from "./pages/Random";
import OffCanvas from "./components/offcanvas/OffCanvas";
import ParticlesBackground from "./components/Particles/ParticlesBackground";
import Searcher from "./pages/Searcher";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./components/Loader/Loader";
import { useEffect } from "react";
import { changeLoading } from "./states/page";

function App() {
  const loading = useSelector((state) => state.page.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        dispatch(changeLoading(false));
      }, 2000);
    }
  }, [loading]); // eslint-disable-line

  return (
    <div>
      <Container className="App">
        <ParticlesBackground />
        {loading ? (
          <Loader />
        ) : (
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Searcher />} />
              <Route path="/daily" element={<Random />} />
            </Routes>
            <OffCanvas />
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
