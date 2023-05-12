import React from "react";
import ReactDOM from "react-dom";
import { upload } from "./request";
import { useState, useEffect } from "react";
import { gettingdata } from "./request";
import { delDocs } from "./request";
import { update } from "./request";

function AppComponent() {

  const [docs, setDocs] = useState([]);

  useEffect(() => {
    gettingdata().then((response) => {
      setDocs(response.items);
    });
  }, []);

  const uploaddata = () => {
    var data = new FormData();
    console.log("data", data);
    var input = document.querySelector('input[type="file"]');
    console.log("input", input);
    data.append("file", input.files[0]);

    

    upload(data);
    console.log("data", data);
    location.reload();
  };


  const updatedata = (id) => {

    var data = new FormData();
    console.log("data", data);
    var input = document.querySelector('input[type="file"]');
    console.log("input", input);
    data.append("file", input.files[0]);

    //var filenaam = input.files[0].name;
    data.append("title","ohhyeahhhh" );
    console.log("daaaaaaaaaaaaata", data);
    update(data , id);
    location.reload();
    

  }

  return (
    <div className="m-4 p-2 w-50 mx-auto" >
      <h3>Upload a File</h3>
      <div className="input-group mb-3">
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="inputGroupFile02" />
          <label className="custom-file-label" for="inputGroupFile02">
            Choose file
          </label>
        </div>
        {console.log(docs)}
        <div className="input-group-append">
          <span className="input-group-text" id="" onClick={() => uploaddata()}>
            Upload
          </span>
        </div>
      </div>

      
      <h4>Files List</h4>

      <div>
        <div className="card">
          <ul className="list-group list-group-flush">
            {docs.map((doc) => (
              <li className="list-group-item m-4" key={doc.id}>
                <h5>Title: {doc.title}</h5>
                <h6>Size: {doc.sizeInBytes / 1024}</h6>
                 <div className="row">
                <a
                  name=""
                  id=""
                  className="btn btn-primary col m-2"
                  href={doc.contentUrl}
                  role="button"
                >
                  Download
                </a>
<button type="button" className="btn btn-primary col m-2" onClick={()=> updatedata(doc.id)}>Update</button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-recycle float-right col m-2"
                  viewBox="0 0 16 16"
                  onClick={() => delDocs(doc.id)}
                >
                  <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242-2.532-4.431zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24l2.552-4.467zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.498.498 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244l-1.716-3.004z" />
                </svg>
                </div>
              </li>
            ))}

            <li className="list-group-item">
              
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
}
export default AppComponent;