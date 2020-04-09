import React, { useState } from 'react';
import Sgpa from './Sgpa';
import Cgpa from './Cgpa';

const Home = () => {
  const [sgpaBtn, setBtn] = useState(true);
  return (
    <div className=" container d-flex justify-content-center align-items-center text-center flex-column my-sm-5  my-2 clearfix">
      <div className="text-light">
        <h1>GPA Calculator</h1>
        <p className="lead">Calculate your Semester GPA, Cummulative GPA and check how much you need next semester to cross that legendary GPA Mark</p>
      </div>
      <div className="box p-3 mt-sm-2 container bg-white ">
        <div className="row">
          <div className="col">
            <button onClick={() => setBtn(true)} className={`sgpaBtn  ${sgpaBtn ? 'activeBtn' : ''}  `}>SEMESTER GPA</button>
          </div>
          <div className="col">
            <button onClick={() => setBtn(false)} className={`cgpaBtn  ${!sgpaBtn ? 'activeBtn' : ''}  `}>CUMULATIVE GPA</button>
          </div>
        </div>
        <hr />
        {sgpaBtn &&
          <Sgpa />}
        {!sgpaBtn &&
          <Cgpa />}
      </div>
    </div>
  )
}

export default Home
