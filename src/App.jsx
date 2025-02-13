import { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
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
    const obj = {id:Date.now(), text: form.text, color: form.color }
    setNote([...note, obj])
  }
   function deleteItem(idToDelete){
    setNote(note.filter((box)=>box.id !== idToDelete))
   }

  console.log(note);

  return (
    <>
        <h2> * Notepad *</h2>
      <form className="left" onSubmit={addTask}>
        <textarea placeholder='Add your Note' name='text' rows={8} cols={40} value={form.text} onChange={handleForm} required> </textarea> <br />
        <input type="color" value={form.color} name='color' onChange={handleForm} required/>
        <button type='submit' >AddTask</button>
      </form>

      <div className="right">
        <h1>Your Notes</h1>
        <div className='outer'>
          {note.length > 0 ? (
            note.map((item) => {
              return <div className="box" style={{ backgroundColor: item.color }} key={item.id}>  {item.text} <span><RxCross2 onClick={()=>deleteItem(item.id)} /> </span> </div>
            })
          )
            : "you have not added a note yet"}
        </div>
      </div>
    </>
  )
}

export default App