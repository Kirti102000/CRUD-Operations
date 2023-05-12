import ClayForm, { ClayInput } from "@clayui/form";
import React, { useState , useCallback} from "react";
import { addBlog } from "./request";
import PopulateBlog from "./PopulateBlog";



function FormBlog() {
  const [headline, setheadline] = useState("");
  const [description, setdescription] = useState("");
  const [articleBody, setarticleBody] = useState("");


  const onButtonSubmit = useCallback(() => {
    
    
        addBlog({
      headline,
      description,
      articleBody,
    }).then(() => {
      setheadline("");
      setdescription("");
      setarticleBody("");
    });
  }, [addBlog, headline, description, articleBody]);

  return (
    <div className="col-4 m-2 ml-4">
      <h1 className="p-4">ADD AND UPDATE EMPLOYEE</h1>
      <ClayForm.Group>
        <label htmlFor="headline">Full Name</label>
        <ClayInput
          // component="text"
          id="headline"
          onChange={(event) => setheadline(event.target.value)}
          placeholder="Insert Your Name Here"
          type="text"
        />
      </ClayForm.Group>
      <ClayForm.Group>
        <label htmlFor="articlebody">Position</label>
        <ClayInput
          // component="text"
          id="articlebody"
          onChange={(event) => setarticleBody(event.target.value)}
          placeholder="Insert Your Position Here"
          type="text"
        />
      </ClayForm.Group>
      <ClayForm.Group>
        <label htmlFor="description">E-mail</label>
        <ClayInput
          // component="text"
          id="description"
          onChange={(event) => setdescription(event.target.value)}
          placeholder="Insert Your E-mail Here"
          type="text"
        />
      </ClayForm.Group>

      <button className="btn btn-success" onClick={() => onButtonSubmit()}>
        Add Blog
      </button>
      <button className="btn btn-primary  m-2" onClick={() => location.reload()}>
        Refresh
      </button>
     
    </div>
  );
}

export default FormBlog;