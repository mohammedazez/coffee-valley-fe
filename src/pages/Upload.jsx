import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setUploadActions } from "../redux/actions/beansActions";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const FormButton = styled.button`
  cursor: pointer;
  background: #ffcb77;
  font-size: 14px;
  border-radius: 5px;
  border: 3px solid #ffcb77;
  padding: 0.25em 0.5em;
  transition: 0.2s all ease-out;
  color: #212227;
  font-weight: bold;
  width: 100%;

  &:hover {
    background-color: #f4f4f6;
    color: #212227;
  }
`;

const Upload = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [upload, setUpload] = useState({
    id: 0,
    title: "",
    document_file: null,
    author: "",
  });

  const handleChange = (e) => {
    setUpload({
      ...upload,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      style={{
        paddingTop: "200px",
        paddingLeft: 100,
        paddingRight: 100,
        paddingBottom: 100,
      }}
    >
      <div className="col-md-9">
        <div className="card-body">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              dispatch(setUploadActions(upload, event, history));
            }}
          >
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Ex: Ash Ketchum"
                name="title"
                value={upload.title}
                onChange={(e) => handleChange(e)}
                required
              />
              <label>Title</label>
            </div>
            <div className="form-floating">
              <input
                type="file"
                className="form-control"
                id="document_file"
                placeholder="ash@poke.info"
                name="document_file"
                value={upload.document_file}
                onChange={(e) => handleChange(e)}
                required
              />
              <label>Document File</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                placeholder="author"
                name="author"
                value={upload.author}
                onChange={(e) => handleChange(e)}
                required
              />
              <label>author</label>
            </div>
            <div className="btn-form-container">
              <FormButton type="submit">Add document</FormButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
