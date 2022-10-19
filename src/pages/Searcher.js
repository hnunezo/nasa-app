import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Imgcard from "../components/Imgcard/Imgcard";
import ModalEl from "../components/ModalEl/ModalEl";

const Searcher = () => {
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState([]);
  const [selected, setSelected] = useState("");
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    if (search) {
      axios
        .get(`https://images-api.nasa.gov/search?q=${search}`)
        .then((response) => {
          setSearched(response.data.collection.items);
          console.log(response.data.collection.items);
        });
    }
  }, [search]);

  return (
    <div className="container-general">
      <section className="container-cards">
        {searched && search
          ? searched
              .slice(0, 32)
              .map((el) => (
                <Imgcard
                  key={el.data[0].nasa_id}
                  el={el}
                  setSelected={setSelected}
                  setModalShow={setModalShow}
                />
              ))
          : null}
      </section>
      <div className="searcher">
        <h2 className="container-title">Search</h2>
        <Form>
          <Form.Group className="text-center">
            <Form.Control
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Form.Text>{!search ? "What do you want?" : "Results"}</Form.Text>
          </Form.Group>
        </Form>
      </div>
      {selected ? (
        <ModalEl
          show={modalShow}
          onHide={() => setModalShow(false)}
          selected={selected}
        />
      ) : null}
    </div>
  );
};

export default Searcher;
