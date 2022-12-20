import React from 'react'

const CustomerAdd = () => {
  return (
    <form>
        <br></br>
        <div className="mb-3">
          <label>Phone Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
          />
        </div>
        <div className="mb-3">
          <label>Customer Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Customer Name"
          />
        </div>
        <div className="mb-3">
          <label>Customer Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Customer Address"
          />
        </div>
        <div className="mb-3">
          <label>Location</label>
          <input
            type="text"
            className="form-control"
            placeholder="Location"
          />
        </div>
        <div className="mb-3">
          <label>E-mail</label>
          <input
            type="email"
            className="form-control"
            placeholder="Customer E-mail"
          />
        </div>
        <div className="mb-3">
          <label>Comment</label>
          <input
            type="text"
            className="form-control"
            placeholder=""
            style={{ height: '100px' }}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Next
          </button>
        </div>
      </form>
  )
}

export default CustomerAdd;