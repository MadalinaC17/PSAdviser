
import React from 'react';
//import '../../App.css';
import '../DesignCSS/Comments.css';
import {Form,Button} from 'react-bootstrap';


export default function Comments() {
  return (
<div className ="comments">
<div className = "font">
<Form>


<Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label className = "text">Adviser notes</Form.Label>
    <Form.Control className= "label" as="textarea" rows={5} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label className = "text" >Client notes</Form.Label>
    <Form.Control className= "label" as="textarea" rows={5} />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label className = "text">Comments</Form.Label>
    <Form.Control className= "label" as="textarea" rows={5} />
  </Form.Group>
  
  <Button  className=' btnsubmit btn-outline-secondary '  type="submit">
    Submit
  </Button>
</Form>
</div>
</div>
  );
};