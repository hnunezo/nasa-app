import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalEl = (props) => {
  console.log(props.selected.data);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.selected.data[0].title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-center gap-3">
        <img
          key={props.selected.data[0].nasa_id}
          src={
            props.selected.links
              ? props.selected.links[0].href
              : "https://cdn.sanity.io/images/0vv8moc6/formularywatch/d198c3b708a35d9adcfa0435ee12fe454db49662-640x400.png/no-image-available-icon-6.jpg?fit=crop&auto=format"
          }
          alt={props.selected.data[0].title}
          style={{ width: "50%" }}
        />
        <p>{props.selected.data[0].description}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalEl;
