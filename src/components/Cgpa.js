import React, { Fragment, useState } from 'react';

const Cgpa = () => {

  const [semValue, setSemester] = useState(5);
  const [InputValues, setInputValues] = useState({});
  const [cgpa, setCgpa] = useState();
  const [message, setMessage] = useState('');
  const [animation, setAnimation] = useState(false);

  function animate() {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false)
    }, 1000);
  }

  const handleChange = (e) => {
    setSemester(e.target.value);
    setCgpa(false);
    setMessage(false);
    // setInputValues({});
    // document.form.reset();
  }

  const InputChange = (e) => {
    setInputValues({ ...InputValues, [e.target.name]: e.target.value });
  }

  const Calculate = () => {
    animate();
    let InputFilled = 0;
    var a = Object.keys(InputValues).map(function (key) {
      InputFilled++;
      return parseFloat(InputValues[key]);
    });

    for (let i in a) {
      if (isNaN(a[i]))
        InputFilled++;
    }

    //  console.log(InputFilled, InputValues);

    if (parseInt(InputFilled) === parseInt(semValue)) {
      var Sum = 0;
      for (let i in a) {
        Sum += parseFloat(a[i]);
      }
      const cgpa = (Sum / parseInt(semValue));
      if (cgpa > 10) {
        setCgpa(false);
        setMessage(`You entered Wrong Value 😁`);
      } else {
        setMessage(false);
        setCgpa(cgpa.toFixed(2));
      }
    } else {
      setCgpa(false);
      setMessage('Please , Fill all the fields 😕 ');
    }
  }


  return (
    <Fragment >
      <div className="row  justify-content-between">
        <div className="col">
          <span className="lbl">  Semesters Completed : </span>
          <select name="semester" className="semSelect mx-2" onChange={handleChange}  >
            {Array.apply(0, Array(8)).map(function (x, i) {
              if (i === 4)
                return <option key={i} value={i + 1} selected>{i + 1} Done</option>;
              else
                return <option key={i} value={i + 1} >{i + 1} Done</option>;
            })}
          </select>
        </div>
      </div>

      <hr />

      <form id="form" name="form">
        {Array.apply(0, Array(parseInt(semValue))).map(function (x, i) {
          return (
            <div key={i} className="row justify-content-center my-2 text-center">
              <div className="col-md-3 courselbl col">
                Semester  {i + 1}
              </div>
              <div className="col-md-4 col">
                <input type="number" name={`sem${i + 1} `} onChange={InputChange} placeholder={`GPA of Semester ${i + 1} `} className="form-control" />
              </div>
            </div>
          );
        })}
      </form>

      {semValue > 0 && <button onClick={Calculate} className="CalculateBtn">Calculate</button>}

      {
        message && <h2 className={` text-center  text-muted  ${animation ? 'bounceIn' : ''}  `}>{message}</h2>
      }
      {
        cgpa && <h1 className={`gradeClr ${animation ? 'bounceIn' : ''}  `}  >{cgpa}<span className="outof">/10</span></h1>
      }

    </Fragment>
  )
}

export default Cgpa
