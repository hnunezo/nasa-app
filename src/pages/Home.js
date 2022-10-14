const Home = () => {
  return (
    <div className="container-general">
      <div className="d-flex mb-5">
        <img
          src={require("../assets/img/logo.jpg")}
          alt={"logo.jpg"}
          style={{ width: "10rem" }}
        />
        <img
          src={require("../assets/img/nasa.png")}
          alt={"logo.jpg"}
          style={{ width: "10rem" }}
        />
      </div>

      <h1 className="animated-title d-flex mb-5">
        Imagination is more important than knowledge.
      </h1>
      <div className="d-flex">
        <div>
          <h2>Inspired</h2>
          <p>
            NASA-inspired web page, using the public APIs found on their site
            api.nasa.gov, I developed functionalities so that we can discover
            the universe together.
          </p>
        </div>
        <div>
          <h2>About</h2>
          <p>
            NASA stands for National Aeronautics and Space Administration. NASA
            is a U.S. government agency that is responsible for science and
            technology related to air and space. The Space Age started in 1957
            with the launch of the Soviet satellite Sputnik.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
