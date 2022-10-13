import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Imgcard from "../components/Imgcard/Imgcard";

const Searcher = () => {
  const [search, setSearch] = useState("");
  const [searched, setSearched] = useState([]);

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
      <section
        style={{ display: "flex", flexWrap: "wrap", overflow: "hidden" }}
      >
        {searched && search
          ? searched.slice(0, 32).map((el) => <Imgcard el={el} />)
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
    </div>
  );
};

export default Searcher;
