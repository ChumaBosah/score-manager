import React from 'react';


function Internslist({interns,title}) {
  return (
    <div className='interns-list'>
      <nav>
      <h1 className='title'> {title} </h1>
      </nav>
      
      {interns.map((intern) => (
        <div className='intern-preview' key = {intern.id}>
          <img className='images' src={intern.image} width = {70} height={90} />
          <h2 className='name'>{intern.name}</h2>
          <h3 className='path'> Learning Path: {intern.learningPath} </h3>
          <h4> Average Grade: {intern.Grade} </h4>
          <h5 className='email'>Email: {intern.email}</h5>
          <h4>PhoneNumber: {intern.phoneNumber}</h4>
        </div>
      )
      )} 
    </div>
  );
}

export default Internslist;
