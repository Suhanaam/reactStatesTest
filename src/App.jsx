import React,{useState} from 'react'

const App = () => {
  const [name,setName]=useState("suhana");
  const [names,setNames]=useState([]);
  function handleChange(event)
  {
    // console.log("hi")
    // console.log(event.target.value);
    // console.log("helo")
    setName(event.target.value);
    // console.log("heloooo")
    // console.log(name);
    // console.log("he")
  }
  function addData()
  {
setNames([...names,name]);
console.log(names);
console.log("he")

  }
  return (
    <div>
      <h1>{name}</h1>
      <input type="text" onChange={handleChange} />
      <input type="button" value="name entry" onClick={addData} />
      {
        names.map((n)=><h2>{n}</h2>)
      }

    </div>
  )
}

export default App