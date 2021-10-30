import React , { useState } from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
  // console.log("Uppercase was clicked" + text);
  let newText = text.toUpperCase();
  setText(newText)
  }
  const handleLoClick = ()=>{
  // console.log("Uppercase was clicked" + text);
  let newText = text.toLowerCase();
  setText(newText)
  }
  const handleOnChange = (event)=>{
  // console.log("on change");
  setText(event.target.value)
  }
  const [text, setText] = useState('');
  // text = "new text" ; wrong way to change the state
  // setText = ("new text") ; Correct way to change the state
  return (
    <>
    <div className="container">
      <h1>{props.heading} - </h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert To UpperCase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert To LowerCase</button>
    </div>
    <div className="container my-3">
      <h2>Your text summary </h2>
      <p>{text.split(" ").length} words and {text.length} charcter</p>
      <p>{0.008 *text.split(" ").length} Minutes read</p>
      <h2>Privew</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

