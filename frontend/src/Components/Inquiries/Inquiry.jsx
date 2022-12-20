import React from 'react'

const Inquiry = () => {
  return (
    <div>
    <form>
        <br></br>
        <div className="mb-3">
          <label>Brand</label>
          <input
            type="text"
            className="form-control"
            placeholder="Brand"
          />
        </div>
        <div className="mb-3">
          <label>Brand Availibility </label>
          <input
            type="text"
            className="form-control"
            placeholder="Brand Availibility"
          />
        </div>
        <div className="mb-3">
      <select className="form-control" >
      <option value="1">Brand or Model</option>
          <option value="2">Brand Availibility</option>
          <option value="3">Order Number</option>
          <option value="4">Order Number</option>
          <option value="5">Inquiry ID</option>
          <option value="6">Staus Remark</option>     
      </select>
      </div>
      <div className="mb-3">
          <label>Action</label>
          <input
            type="text"
            className="form-control"
            placeholder="Action"
          />
        </div>
      <div className="mb-3">
      <select className="form-control" >
          <option value="1">Follow Up</option>
          <option value="2">Close Up</option>    
      </select>
      </div>
        <div className="mb-3">
          <label>Status Remark</label>
          <input
            type="text"
            className="form-control"
            placeholder="Status Remark"
          />
        </div>
        <div className="mb-3">
          <label>Feedback</label>
          <input
            type="text"
            className="form-control"
            placeholder="Feedback"
          />
        </div>
        <div className="mb-3">
          <label>Product Catagory</label>
          <input
            type="text"
            className="form-control"
            placeholder="Product Catagory"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Next
          </button>
        </div>
      </form>
      </div>
  )
}

export default Inquiry;