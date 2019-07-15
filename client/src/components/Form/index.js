import React from "react";

function Form({ a, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={a}
          placeholder="War of the Worlds"
          name="a"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-warning float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
