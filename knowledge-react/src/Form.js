import ClayForm, { ClayInput } from "@clayui/form";
import React, { useState , useCallback} from "react";
import { addBlog } from "./request";
import Populate from "./Populate";
function Form() {
 // const [headline, setheadline] = useState("");
  const [title, setdescription] = useState("");
  const [articleBody, setarticleBody] = useState("");

  const onButtonSubmit = useCallback(() => {
    
    
        addBlog({
     // headline,
      title,
      articleBody,
    }).then(() => {
     // setheadline("");
      setdescription("");
      setarticleBody("");
    });
  }, [addBlog,  title, articleBody]);

  return (
    <div className="col-4 m-6">
      
      <ClayForm.Group>
        <label htmlFor="articlebody">Title</label>
        <ClayInput
          component="textarea"
          id="articlebody"
          onChange={(event) => setarticleBody(event.target.value)}
          placeholder="Insert your article here"
          type="text"
        />
      </ClayForm.Group>
      <ClayForm.Group>
        <label htmlFor="description">Article Body</label>
        <ClayInput
          component="textarea"
          id="description"
          onChange={(event) => setdescription(event.target.value)}
          placeholder="Insert your description here"
          type="text"
        />
      </ClayForm.Group>

      <button className="btn btn-primary" onClick={() => onButtonSubmit()}>
        Add Blog
      </button>
      <button className="btn btn-primary m-2" onClick={() => location.reload()}>
        Refresh
      </button>

      
    </div>
  );
}

export default Form;