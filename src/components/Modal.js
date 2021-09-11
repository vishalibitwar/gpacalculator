import React, { useState } from "react";
import Emoji from "./Emoji";
import logo from "../img/icon.png";
import info from "../img/Info.svg";

const Modal = () => {
  const [show, showModal] = useState(false);
  return (
    <div className='clearfix m-0'>
      <button className='openModalBtn' onClick={() => showModal(true)}>
        <img src={info} style={{ width: "30px", height: "30px" }} alt='i'></img>
      </button>
      <div style={{ display: show ? "block" : "none" }} className='modal'>
        <div className='modal-content bounceIn clearfix'>
          <span onClick={() => showModal(false)} className='close'>
            &times;
          </span>

          <div className=' d-flex flex-column justify-content-center align-items-center text-center'>
            <img
              src={logo}
              style={{ width: "50px", height: "50px" }}
              className='img-fluid'
              alt='Icon'
            />
            <h2 className='primary mt-1'>GPA Calculator</h2>
            <h4 className='lead'>Developed by vishal ibitwar</h4>
          </div>

          <p className='text-center text-muted text'>
            <span className='primary-text'>Hola amigos</span> , If you found any
            issues regarding Credits and Subjects you can mail me
            <span className='font-weight-bold'>
              <Emoji symbol='📧' label='mail' /> 2017bit019@sggs.ac.in
            </span>
          </p>
          <div>
            Curriculum is updated accordingly
            <a
              href='https://sggs.ac.in/home/page/Curriculum-and-Syllabus'
              target='_blank'
            >
              {"Sggs curriculum"}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
