import React from 'react'

const Types = () => {
  return (
    <form>
    <div className="mb-3">
  <select className="form-control" >
    <option value="1">Product Inquiry</option>
    <option value="2">Special Daily Weekend Promotion</option>
    <option value="3">Delivery Complalint</option>
    <option value="4">Ac Instraliation</option>
    <option value="5">Refund</option>
    <option value="6">E-Invoice</option>
    <option value="7">DOA</option>
    <option value="8">Warranty Claim</option>
    <option value="9">Payment Error</option>
    <option value="10">Site Error</option>
    <option value="11">Order Confirmation</option>
    <option value="12">Quotation Inquiry</option>
    <option value="13">Service Inquiry</option>
    <option value="14">Showroom Inquiry</option>
    <option value="15">Hire Purchasing</option>
    <option value="16">Cash on Delivry</option>
    <option value="17">Installments Plan Inquiry</option>
    <option value="18">Wrong Number</option>        
  </select>
  </div>
  <div className="mb-3">
    <label>Comment</label>
    <input
      type="text"
      className="form-control"
      placeholder=""
      style={{ height: "100px" }}
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

export default Types;
