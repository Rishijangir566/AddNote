import { useState } from 'react'

function App() {

  const [note, setNote] = useState([])
  const [form, setForm] = useState({
    text: "",
    color: ""
  })

  function handleForm(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  function addTask(e) {
    e.preventDefault()
    const obj = { text: form.text, color: form.color }
    setNote([...note, obj])
  }


  console.log(note);

  return (
    <>
      <form className="left" onSubmit={addTask}>
        <textarea placeholder='Add your Note' name='text' rows={8} cols={40} value={form.text} onChange={handleForm} required> </textarea> <br />
        <input type="color" value={form.color} name='color' onChange={handleForm} required/>
        <button type='submit' >AddTask</button>
      </form>

      <div className="right">
        <h1>Your Notes</h1>
        <div>
          {note.length > 0 ? (
            note.map((item, index) => {
              return <div className="box" style={{ backgroundColor: item.color }} key={index}>{item.text} </div>
            })
          )
            : "you have not added a note yet"}
        </div>
      </div>
    </>
  )
}

export default App