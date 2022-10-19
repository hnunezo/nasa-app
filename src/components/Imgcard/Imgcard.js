import React from "react";
import "./styles.css";

const Imgcard = ({ el, setSelected, setModalShow }) => {
  const handleClick = () => {
    setSelected(el);
    setModalShow(true);
  };
  return (
    <div
      className="container-img-list"
      onClick={() => handleClick()}
      target="_blank"
      rel="noreferrer"
    >
      <img
        key={el.data[0].nasa_id}
        src={
          el.links
            ? el.links[0].href
            : "https://cdn.sanity.io/images/0vv8moc6/formularywatch/d198c3b708a35d9adcfa0435ee12fe454db49662-640x400.png/no-image-available-icon-6.jpg?fit=crop&auto=format"
        }
        alt={el.data[0].title}
        className="img-card"
      />
      <p className="text-inside">{el.data[0].title}</p>
    </div>
  );
};

export default Imgcard;
