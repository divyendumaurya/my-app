import React, { useState }  from 'react'

export default function About(props) {



// const [myStyle, setMyStyle] = useState({

//   color : "black" ,
//   backgroundColor: "white"
// }
// )

let myStyle = {
  color : props.mode === 'dark'? 'white' : 'black',
  backgroundColor :  props.mode === 'dark'? '#3f3378' : 'white' 
}


  return (

      <div className='container' style={{backgroundColor :  props.mode === 'dark'? '#2e2656' : 'white', color : props.mode === 'dark'? 'white' : 'black'}}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion"  id="accordionExample" >
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Helpful converter
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          <strong>Helpful conveter</strong> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem aliquam velit vero, repudiandae iusto explicabo.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Wrap up your texts
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          <strong>One stop for every solutions.</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eligendi, provident suscipit, at adipisci laboriosam, necessitatibus sunt consectetur illum reprehenderit quaerat maxime quas?
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Free to use
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          <strong>Never disappoints you</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quibusdam nemo doloremque quasi aliquam, eum voluptatum eius nesciunt voluptas dolore fugit mollitia beatae odit facilis quae nulla hic incidunt voluptatem illo. Modi dicta ad nam!
        </div>
      </div>
    </div>
  </div>
  
      </div>
    )
  }
