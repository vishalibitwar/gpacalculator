import React, { Fragment, useState } from 'react';
import Emoji from './Emoji';

const Modal = () => {
  const [show, showModal] = useState(false);
  return (
    <Fragment>
      <button className="openModalBtn" onClick={() => showModal(true)}>i</button>
      <div style={{ display: show ? 'block' : 'none' }} className="modal zoomInUp">
        <div className="modal-content">
          <span onClick={() => showModal(false)} className="close">&times;</span>
          <p className="text-center lead"> <span className="primary-text">Hola amigos</span> , If you found any issues related with Credits and Subjects you can mail me <span className="font-weight-bold"> <Emoji symbol="📧" label="mail" /> 2017bit019@sggs.ac.in</span></p>
            Curriculum is updated accordingly
          <a href="https://sggs.ac.in/curriculum-and-syllabus/">Sggs curriculum</a>
        </div>
      </div>
    </Fragment>
  )
}

export default Modal
