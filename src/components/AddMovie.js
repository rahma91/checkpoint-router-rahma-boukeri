import React,{useState} from 'react'
import { Button,Modal,Form } from "react-bootstrap";
import movie7 from "../assets/movie7.jpg";

const AddMovie = ({addMovie}) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("1")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span variant="primary" onClick={handleShow}>
        [ + ]
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Group controlId="formBasicEmail">
   				 <Form.Label>Title</Form.Label>
    					<Form.Control type="text" placeholder="Enter title"
						 onChange={(e) => setTitle(e.target.value)} />
  						  
 					 </Form.Group>
				 <Form.Group controlId="formBasicEmail">
   				 <Form.Label>Rating</Form.Label>
    					<Form.Control type="number" placeholder="Enter rating" min="1" max="5" 
						 onChange={(e) => setRating (e.target.value)}
						 />
  						  
 					 </Form.Group>
            

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" 
			 onClick ={() => {addMovie({id: Math.random(), title ,img: movie7,rating }) ; handleClose()}}
			 >
            Add movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie