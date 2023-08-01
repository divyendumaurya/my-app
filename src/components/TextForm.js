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
 
  const handleCopy = () => {
    let text = document.getElementById('myBox');
    
    navigator.clipboard.writeText(text.value);

    props.showAlert("Copied to clipboard!" , "Success")
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

            <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? '#6f6d97': 'white', color: props.mode==='dark'? 'white': '#2e2656' }} id="myBox" rows="7"></textarea>
            </div>
                  <button disabled ={text.length===0} className ="btn btn-primary mx-2 my-1" onClick= {handleUpClick}>Convert to Uppercase</button>
                  <button disabled ={text.length===0} onClick={handleDuplicates} className  ="btn btn-primary mx-2 my-1" > Remove duplicates</button>

                  <button disabled ={text.length===0} onClick={handleCopy} className ="btn btn-primary mx-2 my-1" > Copy text</button>
              </div>

    <div className="container" style={{color: props.mode==='dark'? 'white': '#2e2656' }} > 
    <h2 >Text Summary </h2>
    
    <p>{text.split(/\s+/).filter( (element) => {return element.length !==0 }).length} words and {text.length} characters are there!</p>

    

    <p> {0.008*text.split(" ").filter( (element) => {return element.length !==0}).length}  Minutes to read</p>

    <h2>Preview text below</h2>
    <p>{text.length>0?text:"Enter text in the box above to preview it here"}</p>
    
    
    
    


    </div>
    </>
  )
}
