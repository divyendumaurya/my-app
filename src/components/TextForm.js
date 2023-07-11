import React, {useState} from 'react'

export default function TextForm(props)
{
   const[text , setText] = useState("Enter Your Text here oxox");
  

  const handleUpClick = () =>{
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to Uppercase" , "success")
  };
  
  
  
  
  const handleOnChange = (event) =>{
    // console.log("OnChange was clicked");
    setText(event.target.value);
  };
 
 
 
//   function textToSpeech(){
//     const Speech= new SpeechSynthesisUtterance();
//     const message= document.getElementsByClassName("form-control").value;
//     Speech.lang='eng';
//     Speech.text= message;
//     window.speechSynthesis.speak(Speech);
// }
 


// duplicate func 

function handleDuplicates(){
  let wordArr = text.split(" ");
  let newText = wordArr.filter((item , pos) => {
    return wordArr.indexOf(item) === pos;
  }
  )
  newText = newText.join(" ");
  setText(newText);
}
 
return (
 
  <>

    <div className='container' style={{color: props.mode==='dark'? 'white': '#2e2656'}}>
        <h2>{props.heading}</h2>
            <div className="mb-3">

            <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey': 'white', color: props.mode==='dark'? 'white': '#2e2656' }} id="exampleFormControlTextarea1" rows="7"></textarea>
            </div>
                  <button className="btn btn-primary mx-2" onClick= {handleUpClick}>Convert to Uppercase</button>
                  <button className="btn btn-primary mx-2" onClick= {handleDuplicates}> Remove duplicates</button>
              </div>

    <div className="container" style={{color: props.mode==='dark'? 'white': '#2e2656' }} > 
    <h2 >Text Summary </h2>
    
    {/* <p>{text.split(" ").length} words and {text.length} characters are there!</p> */}

    <p>{text.trim() === "" ? 0 : text.trim().split(" ").length} words and {text.length} characters</p>

    <p> {0.008*text.split(" ").length}  Minutes to read</p>

    <h2>preview text below</h2>
    <p>{text.length>0?text:"Enter text in the box above to preview it here"}</p>
    
    
    
    


    </div>
    </>
  )
}
