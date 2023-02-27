import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from 'axios'


function App() {
  const [imagename, setImageName] = useState("");
  const [imagelogo, setImageLogo] = useState("");
  const handleSubmit = async(e) => {
 e.preventDefault()
 const formData = new FormData();
 formData.append("imglogo",imagelogo)
 formData.append("companyname",imagename)
 const config ={
  headers:{
    "Content-Type":"multipart/form-data"
  },
 };
 const api = await axios.post(
  'http://loclhost:8000/image'
 )
  }
  return (
    <>
      <Form  >
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Image logo</Form.Label>
          <Form.Control
            type="file"
            name="imglogo"
            onChange={(e) => setImageLogo(e.target.files)}
          />
        </Form.Group>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Image name </Form.Label>
          <Form.Control
            type="text"
            name="imagename"
            value={imagename}
            onChange={(e) => setImageName(e.target.value)}
          />
        </Form.Group>
        <button type="submit" onClick={handleSubmit} >
          Submit
        </button>
      </Form>
    </>
  );
}

export default App;
