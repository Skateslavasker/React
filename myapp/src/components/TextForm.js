import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Button was clicked" + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase!","success")
    }
    const handleClear = () =>{
      setText("")
      props.showAlert("Text Cleared!","success")
    }
    
    const handleLoClick = () =>{
      let newText = text.toLowerCase()
      setText(newText)
      props.showAlert("Converted to Lowercase!","success")
    }
    const handleExSpace = () =>{
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Removed extra space!","success")
    }
   
    const handleOnChange = (event) => {
        // console.log("Change was done")
        setText(event.target.value)
    }
    const [text,setText] = useState("Enter text here")
    // setText("Hello") correct way to change 
  return (
    <>
    <div className="container" style = {{color : props.mode === 'dark'? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
<div className="mb-3" >
<textarea className="form-control"  value = {text} style = {{backgroundColor : props.mode === 'dark'? 'rgb(30 52 89)' : 'white',color : props.mode === 'dark'? 'white' : 'black'  }} onChange={handleOnChange} id="myBox" rows="5"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>To Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>To Lowercase</button>
<button className="btn btn-secondary mx-2" onClick={handleClear}>Clear</button>
<button className="btn btn-primary mx-2" onClick={handleExSpace}>Remove Extra Spaces</button>

  </div>
  <div className="container my-3" style = {{color : props.mode === 'dark'? 'white' : 'black' }}>
    <h1>Text Summary</h1>
    <p>Number of word: <b>{text.trim() === "" ? 0 : text.trim().split(" ").length}</b> </p>
    <p>Number of characters: {text.length} </p>
    <p>Number of sentences: <b>{text.split(".").length - 1}</b> </p>
    <p>Time consumed: {0.008 * text.split(" ").length} </p>
    <h3>Preview</h3>
    <p>{text}</p>
  </div>

  </>
  )
}
