import React, { useRef } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { mdiPlus, mdiClose } from "@mdi/js";
import Icon from "@mdi/react";
import styles from "../css/NewRecipeForm.module.css";

function NewRecipeForm(props) {
  const titleInputRef = useRef();
  const descInputRef = useRef();
  const ingSelectRef = useRef();
  const sumInputRef = useRef();
  const unitInputRef = useRef();

  const allIngredientsList = Object.values(props.ingredientsList);

  function submitHandler(e) {
    e.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDesc = descInputRef.current.value;
    const enteredIng = ingSelectRef.current.value;
    const enteredSum = sumInputRef.current.value;
    const enteredUnit = unitInputRef.current.value;

    const formData = {
      title: enteredTitle,
      description: enteredDesc,
      ingredients: enteredIng,
      sum: enteredSum,
      unit: enteredUnit,
    };

    console.log(formData);

    titleInputRef.current.value = "";
    descInputRef.current.value = "";
    ingSelectRef.current.value = "";
    sumInputRef.current.value = "";
    unitInputRef.current.value = "";
  }

  return (
    <Modal show={props.onShow} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Vytvořit recept</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={submitHandler}>
          <Row className="align-items-center">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Název</Form.Label>
              <Form.Control ref={titleInputRef} type="text" placeholder="" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Postup</Form.Label>
              <Form.Control ref={descInputRef} as="textarea" rows={7} />
            </Form.Group>
            <Col xs={"7"}>
              <Form.Group className={styles.ing}>
                <Form.Label>Ingredience</Form.Label>
                <Form.Select
                  ref={ingSelectRef}
                  aria-label="Default select example"
                >
                  <option>Vybrat ingredience</option>
                  {allIngredientsList.map((ing, i) => {
                    return (
                      <option key={i} value={i}>
                        {ing}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Počet</Form.Label>
                <Form.Control ref={sumInputRef} type="number" placeholder="" />
              </Form.Group>{" "}
            </Col>
            <Col>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Jednotka</Form.Label>
                <Form.Control ref={unitInputRef} type="text" placeholder="" />
              </Form.Group>{" "}
            </Col>
          </Row>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.onClose}>
              <Icon path={mdiClose} size={1} />
              Zavřít
            </Button>
            <Button type={"submit"} variant="primary">
              <Icon path={mdiPlus} size={1} /> Vytvořit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default NewRecipeForm;
