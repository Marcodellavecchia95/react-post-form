import axios from "axios";
import { useState } from "react";

const initialFormData = { author: "", title: "", body: "", public: false };

export default function App() {
  const [formData, setFormData] = useState(initialFormData);

  const handleInputData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormData = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="container">
      <h1 className="text-center">Form</h1>

      <form onSubmit={handleFormData}>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            onChange={handleInputData}
            value={initialFormData.name}
            name="author"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            onChange={handleInputData}
            value={initialFormData.name}
            name="title"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Body</label>
          <input
            onChange={handleInputData}
            value={initialFormData.name}
            name="body"
            type="text"
            className="form-control"
          />
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label" htmlFor="checkDefault">
            Public
          </label>
        </div>
        <button className="btn btn-primary mt-3">Invia il form</button>
      </form>
    </div>
  );
}
