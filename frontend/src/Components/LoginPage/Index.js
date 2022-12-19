import React from 'react'
import { useState } from 'react'
import {FaRegEyeSlash } from 'react-icons/fa';

const eye = <FaRegEyeSlash icon ={FaRegEyeSlash}/>

function Index() {

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword =() =>{
      setPasswordShown(!passwordShown);
  };

  return (
    <div>
       <form>
          <h3> Login </h3>

          <div className="mb-3"> 
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
        
          <div className="mb-3">
            <label>Password</label>
            <input
              type={passwordShown ? "text":"password"}
              className="form-control"
              placeholder="Enter password"
            />
            <i onClick={togglePassword}>{eye}</i>{" "}
          </div>
          
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>

       </form>
    </div>
  )
}

export default Index