import React, { useState }  from 'react';

const Convert = () => {
  let [isGrade, setGrade] = useState()
  let [isRadian, setRadian] = useState()

  const toRadian = (grades) => {
    return grades * 0.01745;
  };

  const toGrades = (radians) => {
    return radians * 57.296;
  };

    const handleGrade = (event) => {
    isGrade = event.target.value;
    setRadian(toRadian(isGrade));

  }

  const handleRadian = (event) => {
    isRadian = event.target.value;
    setGrade(toGrades(isRadian));
  }

  return (
    <div>
      <p><strong>Radian:</strong>  <input onChange={handleGrade} /> to grades: {isRadian}</p>
      
      <p><strong>Grades:</strong> <input  onChange={handleRadian} /> to radian: {isGrade}</p>
      
    </div>
  )

  // con este metodo hay un bug. 
  // return (
  //   <div>
  //     <p><strong>Radian:</strong>  <input value={isGrade} onChange={handleGrade} /></p>
      
  //     <p><strong>Grades:</strong> <input value={isRadian} onChange={handleRadian} /></p>
      
  //   </div>
  // )
}

export default Convert;