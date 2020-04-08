import React, { useState } from 'react';
import It from '../Branch/it.json';
import Cse from '../Branch/Cse.json';
import Instru from '../Branch/Instru.json';
import Extc from '../Branch/Extc.json';
import Prod from '../Branch/Production.json';
import Civil from '../Branch/Civil.json';
import Mech from '../Branch/Mech.json';
import Text from '../Branch/Textile.json';
import Chem from '../Branch/Chemical.json';
import Elec from '../Branch/Electrical.json'



const Sgpa = () => {
  const [semValue, setSemester] = useState(0);
  const [branch, setBranch] = useState(It);
  const [creditsValues, setSelectedValues] = useState({});
  const [sgpa, setSgpa] = useState(false);
  const [message, setMessage] = useState();
  const [animation, setAnimation] = useState(false);


  function animate() {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false)
    }, 1000);
  }

  const handleChange = (e) => {
    setSemester(e.target.value);
    setSelectedValues({});
    setSgpa(false);
    setMessage(false);
    document.form.reset();
  }

  const changeBranch = (e) => {
    if (e.target.value === 'It')
      setBranch(It);
    else if (e.target.value === 'Cse')
      setBranch(Cse);
    else if (e.target.value === 'Instru')
      setBranch(Instru);
    else if (e.target.value === 'Extc')
      setBranch(Extc);
    else if (e.target.value === 'Text')
      setBranch(Text);
    else if (e.target.value === 'Chem')
      setBranch(Chem);
    else if (e.target.value === 'Prod')
      setBranch(Prod);
    else if (e.target.value === 'Civil')
      setBranch(Civil);
    else if (e.target.value === 'Mech')
      setBranch(Mech);
    else if (e.target.value === 'Elec')
      setBranch(Elec);

    setSelectedValues({});
    document.form.reset();
  }


  const Calculate = () => {
    animate();
    let credits = 0;
    let totalFields = 0;
    branch[semValue].forEach((c) => {
      credits = credits + (c.theoryCredits + c.practicalCredits);
      if (c.theoryCredits)
        totalFields++;
      if (c.practicalCredits)
        totalFields++;
    });

    console.log('Credits', credits);

    var a = Object.keys(creditsValues).map(function (key) {
      return creditsValues[key];
    });
    // console.log(creditsValues);
    if (a.length !== totalFields) {
      setMessage('Select Proper Grade 😬')
    } else {
      var Sum = 0;
      for (var i in a) {
        Sum += parseInt(a[i]);
      }
      const sgpa = parseFloat(Sum / parseInt(credits));
      setSgpa(sgpa.toFixed(2));
      setMessage(Messages(sgpa));
    }
  }

  function Messages(sgpa) {
    if (sgpa > 9.00)
      return `Excellent ! Applaudable 👏`;
    else if (sgpa > 8.00)
      return `Machaya! Decent Score 🍻`;
    else if (sgpa > 7.00)
      return `Push yourself, just a little 🙌`;
    else if (sgpa > 6.0)
      return `Need to work harder 🔨 `;
    else if (sgpa > 5)
      return `Apna time Aayega 💪 `;
    else if (sgpa > 4)
      return `Tumse na ho payega 😂 `;
    else
      return `No words ! 🤐`;
  }

  return (
    <div>
      <div className=" mx-1 d-flex flex-row justify-content-around">
        <div>
          <span className="lbl">Branch :</span>
          <select name="Branch" className="semSelect mx-2" onChange={changeBranch} >
            <option value="It" disabled>Branch</option>
            <option value="It" selected>IT</option>
            <option value="Instru" >Instru</option>
            <option value="Mech">Mech</option>
            <option value="Civil">Civil</option>
            <option value="Elec">Elec</option>
            <option value="Extc">Extc</option>
            <option value="Chem">Chem</option>
            <option value="Text">Textile</option>
            <option value="Cse">Cse</option>
            <option value="Prod">Prod</option>
          </select>
        </div>
        <div>
          <span className="lbl d-sm-inline-block d-none">Semester :</span>
          <select name="semester" className="semSelect mx-2" onChange={handleChange} >
            {Array.apply(0, Array(8)).map(function (x, i) {
              return <option key={i} value={i} >Semester {i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <hr />

      {
        ((!branch[semValue]) || (branch[semValue] && branch[semValue].length < 1)) &&
        (
          <div className="d-flex my-5 justify-content-center align-items-center">
            <div>
              <p className="gradeClr">Sorry ! <span>😥</span> </p>
              <h3 className="text-muted">Data Not Available</h3>
              <p className="text-muted text-center lead">If you want this updated as early as I can then Send me the Syllabus Structure   <strong className="font-weight-bold"> <span>📧 </span>2017bit019@sggs.ac.in</strong></p>
            </div>
          </div>
        )
      }

      <form id="form" name="form">
        {
          branch[semValue] && branch[parseInt(semValue)].map((curr, index) => (
            <div key={index} className="row  justify-content-center text-left m-2">
              <div className="col-sm-6 courselbl mb-2 mb-sm-0">
                {curr.courseName}
              </div>
              {
                curr.theoryCredits > 0 && (
                  <div className="col">
                    <select name={curr.courseName + `Th`} defaultValue="none" className="form-control" onChange={(e) => (
                      setSelectedValues({
                        ...creditsValues, [e.target.name]: e.target.value * curr.theoryCredits,
                      }
                      )
                    )}>
                      <option value="none" disabled selected>Theory Grade</option>
                      <option value="10">A+</option>
                      <option value="9">A</option>
                      <option value="8">B+</option>
                      <option value="7">B</option>
                      <option value="6">C+</option>
                      <option value="5">C</option>
                      <option value="4">D</option>
                      <option value="0">F</option>
                    </select>
                  </div>
                )
              }
              {
                curr.practicalCredits > 0 && (<div className="col">
                  <select name={curr.courseName + `Pr`} defaultValue="none" className="form-control" onChange={(e) => (
                    setSelectedValues({
                      ...creditsValues,
                      [e.target.name]: e.target.value * curr.practicalCredits
                    })
                  )} >
                    <option value="none" disabled selected>Practical Grade</option>
                    <option value="10">A+</option>
                    <option value="9">A</option>
                    <option value="8">B+</option>
                    <option value="7">B</option>
                    <option value="6">C+</option>
                    <option value="5">C</option>
                    <option value="4">D</option>
                    <option value="0">F</option>
                  </select>
                </div>)
              }
            </div>
          ))
        }
      </form>
      {
        branch[semValue] && branch[semValue].length >= 1 &&
        <button onClick={Calculate} className="CalculateBtn">Calculate</button>
      }
      <div className="row m-0 align-items-center justify-content-center text-center">
        {sgpa && <div className="col-sm-4">
          <h1 className={`gradeClr ${animation ? 'wobble' : ''}  `}  > {
            sgpa
          }<span className="outof">/ 10</span>
          </h1>
        </div>}
        {
          message &&
          <div className="col-sm-8 ">
            <h2 className={`text-muted  ${animation ? 'flipInY' : ''}  `}  >
              {
                message
              }
            </h2>
          </div>
        }
      </div>
    </div>
  )
}

export default Sgpa

